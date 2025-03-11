$(document).ready(function() {
    // Store for favorites and run history
    let favorites = [];
    let runHistory = [];
    let availableWorkflows = [];
    let selectedWorkflow = null;
  
    // Load saved data from storage
    function loadSavedData() {
      const savedCredentials = localStorage.getItem('github_credentials');
      if (savedCredentials) {
        const credentials = JSON.parse(savedCredentials);
        $('#username').val(credentials.username || '');
        $('#repo').val(credentials.repo || '');
        $('#branch').val(credentials.branch || 'main');
        // Don't load the token for security reasons
      }
      
      const savedFavorites = localStorage.getItem('favorite_workflows');
      if (savedFavorites) {
        favorites = JSON.parse(savedFavorites);
        renderFavorites();
      }
      
      const savedHistory = localStorage.getItem('run_history');
      if (savedHistory) {
        runHistory = JSON.parse(savedHistory);
        renderRunHistory();
      }
    }
    
    // Call loadSavedData on startup
    loadSavedData();
    
    // Show result modal
    function showResult(header, message) {
      $('#result_header').text(header);
      $('#result_message').text(message);
      $('#result_dialog').modal('show');
    }
    
    // Render run history
    function renderRunHistory() {
      const runHistoryContainer = $('#runHistory');
      runHistoryContainer.empty();
      if (runHistory.length === 0) {
        runHistoryContainer.html('<div class="ui message" id="noRunsMessage">No recent workflow runs.</div>');
        return;
      }
      runHistory.forEach(run => {
        const runItem = $(`
          <div class="ui message run-history-item ${run.status === 'success' ? 'run-success' : (run.status === 'failure' ? 'run-failure' : 'run-pending')}">
            <div class="header">${run.name}</div>
            <p>${run.timestamp} - ${run.status}</p>
          </div>
        `);
        runHistoryContainer.append(runItem);
      });
    }
    
    // Save credentials to local storage
    $('#saveCredentials').on('click', function() {
      const username = $('#username').val().trim();
      const token = $('#token').val().trim();
      const repo = $('#repo').val().trim();
      const branch = $('#branch').val().trim();
      
      if (!username || !repo) {
        showResult('Error', 'Username and repository name are required.');
        return;
      }
      
      // Save to local storage (excluding token for security)
      localStorage.setItem('github_credentials', JSON.stringify({
        username,
        repo,
        branch
      }));
      
      showResult('Success', 'Credentials saved successfully!');
    });
    
    // Load workflows from GitHub
    $('#loadWorkflows').on('click', loadWorkflows);
    $('#refreshWorkflowsButton').on('click', loadWorkflows);
    
    function loadWorkflows() {
      const username = $('#username').val().trim();
      const token = $('#token').val().trim();
      const repo = $('#repo').val().trim();
      
      if (!username || !token || !repo) {
        showResult('Error', 'Username, token, and repository name are required to load workflows.');
        return;
      }
      
      $('#init_loader').show();
      $('#noWorkflowsMessage').show();
      $('#workflowList').html('');
      
      const url = `https://api.github.com/repos/${username}/${repo}/actions/workflows`;
      
      fetch(url, {
        method: 'GET',
        headers: {
          'Accept': 'application/vnd.github+json',
          'Authorization': 'Bearer ' + token
        }
      })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        availableWorkflows = data.workflows || [];
        
        if (availableWorkflows.length === 0) {
          $('#noWorkflowsMessage').text('No workflows found in this repository.');
        } else {
          $('#noWorkflowsMessage').hide();
          renderWorkflows(availableWorkflows);
        }
      })
      .catch(error => {
        showResult('Error', 'Failed to load workflows: ' + error.message);
      })
      .finally(() => {
        $('#init_loader').hide();
      });
    }
    
    // Render workflows in the list
    function renderWorkflows(workflows) {
      const workflowList = $('#workflowList');
      workflowList.empty();
      
      workflows.forEach(workflow => {
        const fileName = workflow.path.split('/').pop();
        const isFavorite = favorites.some(fav => fav.id === workflow.id);
        
        const workflowItem = $(`
          <div class="item workflow-item" data-id="${workflow.id}" data-name="${workflow.name}" data-path="${workflow.path}" data-filename="${fileName}">
            <div class="right floated content">
              <div class="ui tiny icon button favorite-button ${isFavorite ? 'yellow' : ''}" data-id="${workflow.id}">
                <i class="star icon"></i>
              </div>
              <div class="ui tiny primary icon button run-button">
                <i class="play icon"></i>
              </div>
            </div>
            <i class="large github middle aligned icon"></i>
            <div class="content">
              <div class="header">${workflow.name}</div>
              <div class="description">${fileName}</div>
              <div class="meta">
                <span class="state ${workflow.state}">${workflow.state}</span>
              </div>
            </div>
          </div>
        `);
        
        workflowList.append(workflowItem);
      });
      
      // Attach event handlers
      $('.workflow-item').on('click', function(e) {
        if (!$(e.target).closest('.favorite-button, .run-button').length) {
          const id = $(this).data('id');
          const workflow = availableWorkflows.find(w => w.id === id);
          if (workflow) {
            selectWorkflow(workflow);
          }
        }
      });
      
      $('.favorite-button').on('click', function() {
        const id = $(this).data('id');
        toggleFavorite(id);
      });
      
      $('.run-button').on('click', function() {
        const item = $(this).closest('.workflow-item');
        const id = item.data('id');
        const workflow = availableWorkflows.find(w => w.id === id);
        if (workflow) {
          openRunDialog(workflow);
        }
      });
    }
    
    // Filter workflows based on search
    $('#workflowSearch').on('input', function() {
      const searchTerm = $(this).val().toLowerCase();
      
      if (!availableWorkflows.length) return;
      
      const filteredWorkflows = searchTerm ? 
        availableWorkflows.filter(w => 
          w.name.toLowerCase().includes(searchTerm) || 
          w.path.toLowerCase().includes(searchTerm)
        ) : 
        availableWorkflows;
      
      renderWorkflows(filteredWorkflows);
    });
    
    // Select a workflow and show its details
    function selectWorkflow(workflow) {
      selectedWorkflow = workflow;
      
      const fileName = workflow.path.split('/').pop();
      $('#noSelectionMessage').hide();
      
      const selectedWorkflowDiv = $('#selectedWorkflow');
      selectedWorkflowDiv.html(`
        <h4 class="ui header">${workflow.name}</h4>
        <p><strong>File:</strong> ${fileName}</p>
        <p><strong>State:</strong> <span class="ui ${workflow.state === 'active' ? 'green' : 'grey'} label">${workflow.state}</span></p>
        <div id="workflowYamlContent" style="margin-top: 1em;">
          <div class="ui active loader"></div>
        </div>
        <div class="ui buttons" style="margin-top: 1em;">
          <button class="ui primary button" id="runSelectedWorkflow">Run Workflow</button>
          <button class="ui button" id="toggleFavoriteSelected">
            ${favorites.some(f => f.id === workflow.id) ? 'Remove from Favorites' : 'Add to Favorites'}
          </button>
        </div>
      `);
      
      // Fetch the workflow YAML content
      fetchWorkflowContent(workflow);
      
      // Attach event handlers
      $('#runSelectedWorkflow').on('click', function() {
        openRunDialog(workflow);
      });
      
      $('#toggleFavoriteSelected').on('click', function() {
        toggleFavorite(workflow.id);
        $(this).text(favorites.some(f => f.id === workflow.id) ? 'Remove from Favorites' : 'Add to Favorites');
      });
    }
    
    // Fetch the workflow YAML content
    function fetchWorkflowContent(workflow) {
      const username = $('#username').val().trim();
      const token = $('#token').val().trim();
      const repo = $('#repo').val().trim();
      
      const workflowPath = workflow.path;
      const url = `https://api.github.com/repos/${username}/${repo}/contents/${workflowPath}`;
      
      fetch(url, {
        method: 'GET',
        headers: {
          'Accept': 'application/vnd.github+json',
          'Authorization': 'Bearer ' + token
        }
      })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        // Decode the Base64 content
        const decodedContent = atob(data.content);
        
        // Create a CodeMirror instance for the YAML
        $('#workflowYamlContent').html('<textarea id="yamlEditor"></textarea>');
        const editor = CodeMirror.fromTextArea(document.getElementById('yamlEditor'), {
          mode: 'yaml',
          lineNumbers: true,
          readOnly: true,
          foldGutter: true,
          gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"]
        });
        
        editor.setValue(decodedContent);
      })
      .catch(error => {
        $('#workflowYamlContent').html(`<div class="ui negative message">Error loading workflow content: ${error.message}</div>`);
      });
    }
    
    // Toggle a workflow as favorite
    function toggleFavorite(workflowId) {
      const workflowIndex = favorites.findIndex(f => f.id === workflowId);
      const workflow = availableWorkflows.find(w => w.id === workflowId);
      
      if (workflowIndex === -1 && workflow) {
        // Add to favorites
        const fileName = workflow.path.split('/').pop();
        favorites.push({
          id: workflow.id,
          name: workflow.name,
          path: workflow.path,
          fileName: fileName
        });
        $(`.favorite-button[data-id="${workflowId}"]`).addClass('yellow');
      } else {
        // Remove from favorites
        favorites.splice(workflowIndex, 1);
        $(`.favorite-button[data-id="${workflowId}"]`).removeClass('yellow');
      }
      
      // Save to local storage
      localStorage.setItem('favorite_workflows', JSON.stringify(favorites));
      
      // Render favorites
      renderFavorites();
    }
    
    // Render favorite workflows
    function renderFavorites() {
      const favoritesContainer = $('#favoriteWorkflows');
      favoritesContainer.empty();
      
      if (favorites.length === 0) {
        favoritesContainer.html(`
          <div class="ui message" id="noFavoritesMessage">
            No favorite workflows saved yet. Save a workflow by clicking the star icon.
          </div>
        `);
        return;
      }
      
      favorites.forEach(favorite => {
        const card = $(`
          <div class="ui card action-card" data-id="${favorite.id}">
            <div class="content">
              <div class="right floated">
                <i class="close icon remove-favorite" data-id="${favorite.id}"></i>
              </div>
              <div class="header">${favorite.name}</div>
              <div class="meta">${favorite.fileName}</div>
            </div>
            <div class="ui bottom attached button" data-id="${favorite.id}">
              <i class="play icon"></i>
              Run Workflow
            </div>
          </div>
        `);
        
        favoritesContainer.append(card);
      });
      
      // Attach event handlers
      $('.action-card .button').on('click', function() {
        const id = $(this).data('id');
        const favorite = favorites.find(f => f.id === id);
        const workflow = availableWorkflows.find(w => w.id === id) || {
          id: favorite.id,
          name: favorite.name,
          path: favorite.path
        };
        
        openRunDialog(workflow);
      });
      
      $('.action-card .content').on('click', function(e) {
        if (!$(e.target).hasClass('remove-favorite')) {
          const id = $(this).closest('.action-card').data('id');
          const workflow = availableWorkflows.find(w => w.id === id);
          if (workflow) {
            selectWorkflow(workflow);
          } else {
            showResult('Info', 'Please load workflows first to view details.');
          }
        }
      });
      
      $('.remove-favorite').on('click', function(e) {
        e.stopPropagation();
        const id = $(this).data('id');
        toggleFavorite(id);
      });
    }
    
    // Open the run dialog for a workflow
    function openRunDialog(workflow) {
      const fileName = workflow.path.split('/').pop();
      $('#workflow_name').text(workflow.name + ' (' + fileName + ')');
      
      // Load workflow inputs
      fetchWorkflowInputs(workflow, fileName);
      
      // Show the dialog
      $('#workflow_run_dlg').modal('show');
    }
    
    // Fetch workflow input parameters
    function fetchWorkflowInputs(workflow, fileName) {
      const username = $('#username').val().trim();
      const token = $('#token').val().trim();
      const repo = $('#repo').val().trim();
      
      const workflowPath = workflow.path;
      const url = `https://api.github.com/repos/${username}/${repo}/contents/${workflowPath}`;
      
      $('#workflowInputsContainer').html('<div class="ui active loader"></div>');
      
      fetch(url, {
        method: 'GET',
        headers: {
          'Accept': 'application/vnd.github+json',
          'Authorization': 'Bearer ' + token
        }
      })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        const decodedContent = atob(data.content);
        const workflowYaml = jsyaml.load(decodedContent);
        let inputs = {};
        
        if (workflowYaml && workflowYaml.on && workflowYaml.on.workflow_dispatch && 
            workflowYaml.on.workflow_dispatch.inputs) {
          inputs = workflowYaml.on.workflow_dispatch.inputs;
        }
        
        const inputsContainer = $('#workflowInputsContainer');
        inputsContainer.empty();
        
        if (Object.keys(inputs).length === 0) {
          inputsContainer.html('<div class="ui message">This workflow does not have any input parameters.</div>');
        } else {
          for (const inputName in inputs) {
            const inputDef = inputs[inputName];
            const inputField = $(`
              <div class="field">
                <label for="input-${inputName}">${inputName}${inputDef.description ? ` (${inputDef.description})` : ""}</label>
                <input type="text" id="input-${inputName}" placeholder="${inputName}" value="${inputDef.default || ""}">
              </div>
            `);
            inputsContainer.append(inputField);
          }
        }
        
        $('#runWorkflowBtn').data('workflow', {
          ...workflow,
          fileName: fileName
        });
      })
      .catch(error => {
        $('#workflowInputsContainer').html(`
          <div class="ui negative message">
            Error loading workflow inputs: ${error.message}
          </div>
        `);
      });
    }
    
    // Run the workflow
    $('#runWorkflowBtn').on('click', function() {
      const workflow = $(this).data('workflow');
      if (!workflow) return;
      
      const username = $('#username').val().trim();
      const token = $('#token').val().trim();
      const repo = $('#repo').val().trim();
      const branch = $('#branch').val().trim();
      
      if (!username || !token || !repo || !branch) {
        showResult('Error', 'Missing required fields. Please check your credentials.');
        return;
      }
      
      const inputsContainer = $('#workflowInputsContainer');
      const inputElements = inputsContainer.find('input');
      const inputs = {};
      
      inputElements.each(function() {
        const name = $(this).attr('id').replace('input-', '');
        inputs[name] = $(this).val().trim();
      });
      
      const url = `https://api.github.com/repos/${username}/${repo}/actions/workflows/${workflow.fileName}/dispatches`;
      
      const payload = { ref: branch };
      if (Object.keys(inputs).length > 0) {
        payload.inputs = inputs;
      }
      
      $('#workflow_run_dlg').modal('hide');
      $('#actionRunning').show();
      $('#running_workflow').text(workflow.name);
      
      fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/vnd.github+json',
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })
      .then(response => {
        if (!response.ok) {
          return response.json().then(errorData => {
            throw new Error(errorData.message || 'Unknown error');
          });
        }
      })
      .then(() => {
        const runEntry = {
          id: Date.now(),
          name: workflow.name,
          status: 'pending',
          timestamp: new Date().toLocaleString()
        };
        runHistory.push(runEntry);
        localStorage.setItem('run_history', JSON.stringify(runHistory));
        renderRunHistory();
  
        $('#actionRunning').hide();
        showResult('Success', 'Workflow triggered successfully!');
      })
      .catch(error => {
        $('#actionRunning').hide();
        showResult('Error', 'Failed to trigger workflow: ' + error.message);
      });
    });
  });
  