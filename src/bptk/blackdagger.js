document.addEventListener('DOMContentLoaded', () => {
    // Initialize API_BASE from localStorage or use default.
    let API_BASE = localStorage.getItem('API_BASE') || 'http://localhost:8080/api/v1';
  
    // Update API URL input in settings.
    function updateSettingsInput() {
      const input = document.getElementById('apiUrl');
      if (input) input.value = API_BASE;
    }
  
    // Switch between sections.
    function switchSection(sectionId) {
      document.querySelectorAll('.section').forEach(el => el.classList.remove('active'));
      const sec = document.getElementById(sectionId);
      if (sec) sec.classList.add('active');
      if (sectionId === 'sectionSettings') updateSettingsInput();
    }
  
    // Navigation button listeners.
    const btnListDags = document.getElementById('btnListDags');
    if (btnListDags) {
      btnListDags.addEventListener('click', () => {
        switchSection('sectionListDags');
        fetchDags();
      });
    }
    const btnStartDag = document.getElementById('btnStartDag');
    if (btnStartDag) {
      btnStartDag.addEventListener('click', () => switchSection('sectionStartDag'));
    }
    const btnSearchDags = document.getElementById('btnSearchDags');
    if (btnSearchDags) {
      btnSearchDags.addEventListener('click', () => switchSection('sectionSearchDags'));
    }
    const btnSettings = document.getElementById('btnSettings');
    if (btnSettings) {
      btnSettings.addEventListener('click', () => switchSection('sectionSettings'));
    }
  
    // Fetch DAGs and update table.
    function fetchDags() {
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
            deleteBtn.addEventListener('click', () => deleteDag(item.File));
            tdActions.appendChild(deleteBtn);
            tr.appendChild(tdActions);
  
            tbody.appendChild(tr);
          });
        })
        .catch(error => console.error('Error fetching DAG list:', error));
    }
  
    // Delete a DAG.
    function deleteDag(dagId) {
      fetch(`${API_BASE}/dags/${dagId}`, { method: 'DELETE' })
        .then(response => {
          if (response.ok) {
            alert('DAG deleted successfully.');
            fetchDags();
          } else alert('Error deleting DAG.');
        })
        .catch(error => console.error('Error deleting DAG:', error));
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
        container.appendChild(placeholder);
      } else {
        paramArray.forEach(({ key, value }) => {
          const group = document.createElement('div');
          group.classList.add('param-group');
          const keyInput = document.createElement('input');
          keyInput.type = 'text';
          keyInput.classList.add('param-key');
          keyInput.placeholder = 'Parameter name';
          keyInput.value = key;
          const valueInput = document.createElement('input');
          valueInput.type = 'text';
          valueInput.classList.add('param-value');
          valueInput.placeholder = 'Parameter value';
          valueInput.value = value;
          // Optional: Add a remove button for each parameter.
          const removeBtn = document.createElement('button');
          removeBtn.type = 'button';
          removeBtn.textContent = 'Remove';
          removeBtn.addEventListener('click', () => group.remove());
          group.appendChild(keyInput);
          group.appendChild(valueInput);
          group.appendChild(removeBtn);
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
        group.classList.add('param-group');
        const keyInput = document.createElement('input');
        keyInput.type = 'text';
        keyInput.classList.add('param-key');
        keyInput.placeholder = 'Parameter name';
        const valueInput = document.createElement('input');
        valueInput.type = 'text';
        valueInput.classList.add('param-value');
        valueInput.placeholder = 'Parameter value';
        const removeBtn = document.createElement('button');
        removeBtn.type = 'button';
        removeBtn.textContent = 'Remove';
        removeBtn.addEventListener('click', () => group.remove());
        group.appendChild(keyInput);
        group.appendChild(valueInput);
        group.appendChild(removeBtn);
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
        // Fetch DAG details. (Assumes GET /dags/{dagName} returns a getDagDetailsResponse.)
        fetch(`${API_BASE}/dags/${dagName}`)
          .then(response => response.json())
          .then(data => {
            // Adjust based on your API response structure.
            const dagDetail = data.DAG && data.DAG.DAG;
            const defaultParamsStr = dagDetail && dagDetail.DefaultParams ? dagDetail.DefaultParams : "";
            const paramArray = parseParams(defaultParamsStr);
            updateParamFields(paramArray);
          })
          .catch(error => {
            console.error("Error fetching DAG details:", error);
          });
      });
    }
  
    // Start DAG form submission.
    const startDagForm = document.getElementById('startDagForm');
    if (startDagForm) {
      startDagForm.addEventListener('submit', function(e) {
        e.preventDefault();
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
              resultDiv.innerText = data.NewDagID
                ? `DAG started successfully. New DAG ID: ${data.NewDagID}`
                : 'DAG started successfully.';
            }
          })
          .catch(error => console.error('Error starting DAG:', error));
      });
    }
  
    // Search for DAGs and display results as hyperlinks.
    const searchDagForm = document.getElementById('searchDagForm');
    if (searchDagForm) {
      searchDagForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const q = document.getElementById('q').value;
        fetch(`${API_BASE}/search?q=${encodeURIComponent(q)}`)
          .then(response => response.json())
          .then(data => {
            const resultsDiv = document.getElementById('searchResults');
            if (!resultsDiv) return;
            resultsDiv.innerHTML = '';
            const searchResults = data.Results || data.results;
            if (searchResults && searchResults.length > 0) {
              const apiOrigin = new URL(API_BASE).origin;
              searchResults.forEach(result => {
                const container = document.createElement('div');
                container.style.marginBottom = '15px';
                const dagName = result.Name || (result.DAG && result.DAG.Name) || "Unknown";
                const dagUrl = `${apiOrigin}/dags/${dagName}`;
                const header = document.createElement('h3');
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
              resultsDiv.innerText = 'No results found for the given query.';
            }
          })
          .catch(error => console.error('Error searching DAGs:', error));
      });
    }
  
    // Settings form to update API endpoint.
    const settingsForm = document.getElementById('settingsForm');
    if (settingsForm) {
      settingsForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const newUrl = document.getElementById('apiUrl').value.trim();
        const result = document.getElementById('settingsResult');
        if (newUrl) {
          API_BASE = newUrl;
          localStorage.setItem('API_BASE', API_BASE);
          if (result) result.innerText = `API URL updated to: ${API_BASE}`;
        } else {
          if (result) result.innerText = 'Please enter a valid API URL.';
        }
      });
    }
  });
  