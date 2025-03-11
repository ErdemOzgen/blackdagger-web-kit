// action-runner.js

// Load available workflows from the repository and populate the drop-down.
document.getElementById('loadWorkflows').addEventListener('click', async () => {
    const username = document.getElementById('username').value.trim();
    const token = document.getElementById('token').value.trim();
    const repo = document.getElementById('repo').value.trim();
  
    if (!username || !token || !repo) {
      document.getElementById('result').innerText = "Username, Token, and Repository are required to load workflows.";
      return;
    }
  
    const url = `https://api.github.com/repos/${username}/${repo}/actions/workflows`;
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Accept': 'application/vnd.github+json',
          'Authorization': 'Bearer ' + token
        }
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        document.getElementById('result').innerText = "Error loading workflows: " + errorData.message;
        return;
      }
  
      const data = await response.json();
      const workflows = data.workflows || [];
      const workflowSelect = document.getElementById('workflow');
  
      // Clear existing options (keeping the placeholder)
      workflowSelect.innerHTML = `<option value="">Select a workflow</option>`;
      workflows.forEach(wf => {
        // Extract just the file name from the full path.
        const fileName = wf.path.split('/').pop();
        const option = document.createElement('option');
        option.value = fileName;  // Use the file name for the dispatch call.
        option.text = `${wf.name} (${fileName})`;
        workflowSelect.appendChild(option);
      });
  
      if (workflows.length === 0) {
        document.getElementById('result').innerText = "No workflows found in this repository.";
      } else {
        document.getElementById('result').innerText = "Workflows loaded successfully.";
      }
    } catch (err) {
      document.getElementById('result').innerText = "Request failed: " + err;
    }
  });
  
  // When a workflow is selected, fetch its file content and dynamically generate input fields.
  document.getElementById('workflow').addEventListener('change', async () => {
    const username = document.getElementById('username').value.trim();
    const token = document.getElementById('token').value.trim();
    const repo = document.getElementById('repo').value.trim();
    // Assumes workflows are in .github/workflows/ folder.
    const workflowFileName = document.getElementById('workflow').value.trim();
    const workflowPath = `.github/workflows/${workflowFileName}`;
    const inputsContainer = document.getElementById('workflowInputsContainer');
    inputsContainer.innerHTML = ""; // Clear any previous inputs
  
    if (!workflowFileName) return;
  
    const url = `https://api.github.com/repos/${username}/${repo}/contents/${workflowPath}`;
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Accept': 'application/vnd.github+json',
          'Authorization': 'Bearer ' + token
        }
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        inputsContainer.innerText = "Error loading workflow file: " + errorData.message;
        return;
      }
  
      const data = await response.json();
      // The file content is Base64 encoded.
      const decodedContent = atob(data.content);
      // Parse the YAML content.
      const workflowYaml = jsyaml.load(decodedContent);
      let inputs = {};
      if (workflowYaml && workflowYaml.on && workflowYaml.on.workflow_dispatch && workflowYaml.on.workflow_dispatch.inputs) {
        inputs = workflowYaml.on.workflow_dispatch.inputs;
      }
      
      if (Object.keys(inputs).length === 0) {
        inputsContainer.innerText = "No workflow inputs defined in this workflow.";
      } else {
        // For each input defined in the workflow, create a Semantic UI field.
        for (const inputName in inputs) {
          const inputDef = inputs[inputName];
          const fieldDiv = document.createElement('div');
          fieldDiv.className = 'field';
  
          const label = document.createElement('label');
          label.htmlFor = `input-${inputName}`;
          label.innerText = inputName + (inputDef.description ? ` (${inputDef.description})` : "");
  
          const inputField = document.createElement('input');
          inputField.type = 'text';
          inputField.id = `input-${inputName}`;
          inputField.placeholder = inputName;
          inputField.value = inputDef.default || "";
  
          fieldDiv.appendChild(label);
          fieldDiv.appendChild(inputField);
          inputsContainer.appendChild(fieldDiv);
        }
      }
    } catch (err) {
      inputsContainer.innerText = "Request failed: " + err;
    }
  });
  
  // Trigger the workflow dispatch, including any workflow inputs provided.
  document.getElementById('trigger').addEventListener('click', async () => {
    const username = document.getElementById('username').value.trim();
    const token = document.getElementById('token').value.trim();
    const repo = document.getElementById('repo').value.trim();
    const workflowFileName = document.getElementById('workflow').value.trim();
    const branch = document.getElementById('branch').value.trim();
  
    if (!username || !token || !repo || !workflowFileName || !branch) {
      document.getElementById('result').innerText = "Please fill in all required fields.";
      return;
    }
  
    // Gather the workflow inputs values.
    const inputsContainer = document.getElementById('workflowInputsContainer');
    const inputElements = inputsContainer.querySelectorAll('input');
    const inputs = {};
    inputElements.forEach(inputEl => {
      const name = inputEl.id.replace('input-', '');
      inputs[name] = inputEl.value.trim();
    });
  
    // Build the GitHub API URL for workflow dispatch.
    const url = `https://api.github.com/repos/${username}/${repo}/actions/workflows/${workflowFileName}/dispatches`;
  
    // Create the payload with ref and inputs.
    const payload = { ref: branch };
    if (Object.keys(inputs).length > 0) {
      payload.inputs = inputs;
    }
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/vnd.github+json',
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });
  
      if (response.ok) {
        document.getElementById('result').innerText = "Workflow dispatched successfully!";
      } else {
        const errorData = await response.json();
        document.getElementById('result').innerText = "Error: " + errorData.message;
      }
    } catch (err) {
      document.getElementById('result').innerText = "Request failed: " + err;
    }
  });
  