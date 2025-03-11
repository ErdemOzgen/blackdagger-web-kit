document.addEventListener('DOMContentLoaded', () => {
    // Initialize API_BASE from localStorage or use default.
    let API_BASE = localStorage.getItem('API_BASE') || 'http://localhost:8080/api/v1';
  
    // Update API URL input in settings.
    function updateSettingsInput() {
      const input = document.getElementById('apiUrl');
      if (input) input.value = API_BASE;
    }
  
    // Initialize Semantic UI tabs and set up tab change events
    $('.menu .item').tab({
      onVisible: function(tabPath) {
        if (tabPath === 'listDags') {
          fetchDags();
        } else if (tabPath === 'settings') {
          updateSettingsInput();
        }
      }
    });
  
    // Initialize by showing the list DAGs tab and fetching data
    $('.menu .item[data-tab="listDags"]').tab('show');
    fetchDags();
  
    // Refresh button functionality
    const refreshButton = document.querySelector('.ui.icon.button .refresh.icon');
    if (refreshButton) {
      refreshButton.parentElement.addEventListener('click', () => {
        const activeTab = $('.menu .item.active').attr('data-tab');
        if (activeTab === 'listDags') {
          fetchDags();
        }
      });
    }
  
    // Fetch DAGs and update table.
    function fetchDags() {
      // Show loader
      $('.loader.list-dags').removeClass('disabled');
      
      fetch(`${API_BASE}/dags`)
        .then(response => response.json())
        .then(data => {
          const tbody = document.querySelector('#dagTable tbody');
          if (!tbody) return;
          tbody.innerHTML = '';
          const apiOrigin = new URL(API_BASE).origin;
          data.DAGs.forEach(item => {
            const tr = document.createElement('tr');
  
            const tdFile = document.createElement('td');
            tdFile.textContent = item.File;
            tr.appendChild(tdFile);
  
            const tdName = document.createElement('td');
            const link = document.createElement('a');
            link.href = `${apiOrigin}/dags/${item.File}`;
            link.target = '_blank';
            link.textContent = item.DAG.Name;
            tdName.appendChild(link);
            tr.appendChild(tdName);
  
            const tdStatus = document.createElement('td');
            tdStatus.textContent = item.Status.StatusText;
            tr.appendChild(tdStatus);
  
            const tdActions = document.createElement('td');
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.className = 'ui small negative button';
            deleteBtn.addEventListener('click', () => deleteDag(item.File));
            tdActions.appendChild(deleteBtn);
            tr.appendChild(tdActions);
  
            tbody.appendChild(tr);
          });
          
          // Hide loader
          $('.loader.list-dags').addClass('disabled');
        })
        .catch(error => {
          console.error('Error fetching DAG list:', error);
          showError('Failed to fetch DAG list: ' + error.message);
          // Hide loader
          $('.loader.list-dags').addClass('disabled');
        });
    }
  
    // Show error in modal
    function showError(message) {
      const errorMsg = document.getElementById('error_message');
      if (errorMsg) {
        errorMsg.textContent = message;
        $('#error_dialog').modal('show');
      } else {
        alert(message);
      }
    }
  
    // Delete a DAG.
    function deleteDag(dagId) {
      if (confirm('Are you sure you want to delete this DAG?')) {
        fetch(`${API_BASE}/dags/${dagId}`, { method: 'DELETE' })
          .then(response => {
            if (response.ok) {
              fetchDags();
            } else {
              showError('Error deleting DAG.');
            }
          })
          .catch(error => {
            console.error('Error deleting DAG:', error);
            showError('Error deleting DAG: ' + error.message);
          });
      }
    }
  
    // --- Parameter Handling Functions ---
  
    // Parse default parameter string into an array of {key, value} objects.
    function parseParams(paramStr) {
      const params = [];
      // Regex: key= either "quoted value" or non-whitespace value.
      const regex = /(\w+)=(".*?"|\S+)/g;
      let match;
      while ((match = regex.exec(paramStr)) !== null) {
        let key = match[1];
        let value = match[2];
        if (value.startsWith('"') && value.endsWith('"')) {
          value = value.substring(1, value.length - 1);
        }
        params.push({ key, value });
      }
      return params;
    }
  
    // Create input groups for parameters.
    function updateParamFields(paramArray) {
      const container = document.getElementById('paramsContainer');
      if (!container) return;
      container.innerHTML = ''; // Clear previous fields.
      if (paramArray.length === 0) {
        // Optionally show a placeholder if no parameters.
        const placeholder = document.createElement('div');
        placeholder.textContent = "No parameters required";
        placeholder.className = "ui message";
        container.appendChild(placeholder);
      } else {
        paramArray.forEach(({ key, value }) => {
          const group = document.createElement('div');
          group.classList.add('fields', 'param-group');
          
          const keyField = document.createElement('div');
          keyField.className = 'eight wide field';
          const keyInput = document.createElement('input');
          keyInput.type = 'text';
          keyInput.classList.add('param-key');
          keyInput.placeholder = 'Parameter name';
          keyInput.value = key;
          keyField.appendChild(keyInput);
          
          const valueField = document.createElement('div');
          valueField.className = 'eight wide field';
          const valueInput = document.createElement('input');
          valueInput.type = 'text';
          valueInput.classList.add('param-value');
          valueInput.placeholder = 'Parameter value';
          valueInput.value = value;
          valueField.appendChild(valueInput);
          
          // Add a remove button for each parameter.
          const buttonField = document.createElement('div');
          buttonField.className = 'field';
          const removeBtn = document.createElement('button');
          removeBtn.type = 'button';
          removeBtn.className = 'ui negative icon button';
          removeBtn.innerHTML = '<i class="trash icon"></i>';
          removeBtn.addEventListener('click', () => group.remove());
          buttonField.appendChild(removeBtn);
          
          group.appendChild(keyField);
          group.appendChild(valueField);
          group.appendChild(buttonField);
          container.appendChild(group);
        });
      }
    }
  
    // Allow user to add an empty parameter field.
    const addParamButton = document.getElementById('addParamButton');
    if (addParamButton) {
      addParamButton.addEventListener('click', () => {
        const container = document.getElementById('paramsContainer');
        if (!container) return;
        
        const group = document.createElement('div');
        group.classList.add('fields', 'param-group');
        
        const keyField = document.createElement('div');
        keyField.className = 'eight wide field';
        const keyInput = document.createElement('input');
        keyInput.type = 'text';
        keyInput.classList.add('param-key');
        keyInput.placeholder = 'Parameter name';
        keyField.appendChild(keyInput);
        
        const valueField = document.createElement('div');
        valueField.className = 'eight wide field';
        const valueInput = document.createElement('input');
        valueInput.type = 'text';
        valueInput.classList.add('param-value');
        valueInput.placeholder = 'Parameter value';
        valueField.appendChild(valueInput);
        
        const buttonField = document.createElement('div');
        buttonField.className = 'field';
        const removeBtn = document.createElement('button');
        removeBtn.type = 'button';
        removeBtn.className = 'ui negative icon button';
        removeBtn.innerHTML = '<i class="trash icon"></i>';
        removeBtn.addEventListener('click', () => group.remove());
        buttonField.appendChild(removeBtn);
        
        group.appendChild(keyField);
        group.appendChild(valueField);
        group.appendChild(buttonField);
        container.appendChild(group);
      });
    }
  
    // Compile all parameter input groups into a single parameter string.
    function compileParams() {
      const container = document.getElementById('paramsContainer');
      if (!container) return "";
      const groups = container.querySelectorAll('.param-group');
      const parts = [];
      groups.forEach(group => {
        const keyInput = group.querySelector('.param-key');
        const valueInput = group.querySelector('.param-value');
        if (keyInput && valueInput) {
          const key = keyInput.value.trim();
          const value = valueInput.value.trim();
          if (key) {
            let part = key + "=";
            // If value contains spaces and isn't already quoted, wrap it in quotes.
            if (value.indexOf(' ') >= 0 && !(value.startsWith('"') && value.endsWith('"'))) {
              part += `"${value}"`;
            } else {
              part += value;
            }
            parts.push(part);
          }
        }
      });
      return parts.join(' ');
    }
  
    // --- Auto-fetch Default Parameters on DAG Name Change ---
    const startDagIdInput = document.getElementById('startDagId');
    if (startDagIdInput) {
      startDagIdInput.addEventListener('change', function() {
        const dagName = startDagIdInput.value.trim();
        if (!dagName) return;
        
        // Show loader
        $('.loader.start-dag').removeClass('disabled');
        
        // Fetch DAG details. (Assumes GET /dags/{dagName} returns a getDagDetailsResponse.)
        fetch(`${API_BASE}/dags/${dagName}`)
          .then(response => response.json())
          .then(data => {
            // Adjust based on your API response structure.
            const dagDetail = data.DAG && data.DAG.DAG;
            const defaultParamsStr = dagDetail && dagDetail.DefaultParams ? dagDetail.DefaultParams : "";
            const paramArray = parseParams(defaultParamsStr);
            updateParamFields(paramArray);
            
            // Hide loader
            $('.loader.start-dag').addClass('disabled');
          })
          .catch(error => {
            console.error("Error fetching DAG details:", error);
            showError("Error fetching DAG details: " + error.message);
            
            // Hide loader
            $('.loader.start-dag').addClass('disabled');
          });
      });
    }
  
    // Start DAG form submission.
    const startDagForm = document.getElementById('startDagForm');
    if (startDagForm) {
      startDagForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Show loader
        $('.loader.start-dag').removeClass('disabled');
        
        const dagName = document.getElementById('startDagId').value.trim();
        const params = compileParams();
        
        fetch(`${API_BASE}/dags/${dagName}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ action: "start", params })
        })
          .then(response => response.json())
          .then(data => {
            const resultDiv = document.getElementById('startDagResult');
            if (resultDiv) {
              resultDiv.innerHTML = data.NewDagID
                ? `<div class="ui positive message">DAG started successfully. New DAG ID: ${data.NewDagID}</div>`
                : '<div class="ui positive message">DAG started successfully.</div>';
              resultDiv.style.display = 'block';
            }
            
            // Hide loader
            $('.loader.start-dag').addClass('disabled');
          })
          .catch(error => {
            console.error('Error starting DAG:', error);
            showError('Error starting DAG: ' + error.message);
            
            // Hide loader
            $('.loader.start-dag').addClass('disabled');
          });
      });
    }
  
    // Search for DAGs and display results as hyperlinks.
    const searchDagForm = document.getElementById('searchDagForm');
    if (searchDagForm) {
      searchDagForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Show loader
        $('.loader.search-dags').removeClass('disabled');
        
        const q = document.getElementById('q').value;
        fetch(`${API_BASE}/search?q=${encodeURIComponent(q)}`)
          .then(response => response.json())
          .then(data => {
            const resultsDiv = document.getElementById('searchResults');
            if (!resultsDiv) return;
            resultsDiv.innerHTML = '';
            resultsDiv.style.display = 'block';
            
            const searchResults = data.Results || data.results;
            if (searchResults && searchResults.length > 0) {
              const apiOrigin = new URL(API_BASE).origin;
              searchResults.forEach(result => {
                const container = document.createElement('div');
                container.className = 'ui segment';
                container.style.marginBottom = '15px';
                
                const dagName = result.Name || (result.DAG && result.DAG.Name) || "Unknown";
                const dagUrl = `${apiOrigin}/dags/${dagName}`;
                
                const header = document.createElement('h3');
                header.className = 'ui header';
                const link = document.createElement('a');
                link.href = dagUrl;
                link.target = '_blank';
                link.textContent = dagName;
                header.appendChild(link);
                container.appendChild(header);
                
                if (result.Matches && result.Matches.length > 0) {
                  const pre = document.createElement('pre');
                  pre.innerText = JSON.stringify(result.Matches, null, 2);
                  container.appendChild(pre);
                }
                
                resultsDiv.appendChild(container);
              });
            } else {
              resultsDiv.innerHTML = '<div class="ui warning message">No results found for the given query.</div>';
            }
            
            // Hide loader
            $('.loader.search-dags').addClass('disabled');
          })
          .catch(error => {
            console.error('Error searching DAGs:', error);
            showError('Error searching DAGs: ' + error.message);
            
            // Hide loader
            $('.loader.search-dags').addClass('disabled');
          });
      });
    }
  
    // Settings form to update API endpoint.
    const settingsForm = document.getElementById('settingsForm');
    if (settingsForm) {
      settingsForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Show loader
        $('.loader.settings').removeClass('disabled');
        
        const newUrl = document.getElementById('apiUrl').value.trim();
        const result = document.getElementById('settingsResult');
        
        if (newUrl) {
          API_BASE = newUrl;
          localStorage.setItem('API_BASE', API_BASE);
          if (result) {
            result.className = 'ui positive message';
            result.innerHTML = `API URL updated to: <strong>${API_BASE}</strong>`;
            result.style.display = 'block';
          }
        } else {
          if (result) {
            result.className = 'ui negative message';
            result.innerText = 'Please enter a valid API URL.';
            result.style.display = 'block';
          }
        }
        
        // Hide loader
        $('.loader.settings').addClass('disabled');
      });
    }
  });