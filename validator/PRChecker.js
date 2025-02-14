function fetchPRFiles() {
    const prNumber = document.getElementById('prNumber').value;
    const owner = 'acmsigsoft';
    const repo = 'EmpiricalStandards';
    const apiUrl = `https://api.github.com/repos/${owner}/${repo}/pulls/${prNumber}`;
    const apiFilesUrl = `https://api.github.com/repos/${owner}/${repo}/pulls/${prNumber}/files`;

    // Fetch PR details to get the title
    fetch(apiUrl, {
        method: 'GET',
        headers: new Headers({
            'Accept': 'application/vnd.github.v3+json'
        })
    })
    .then(response => response.json())
    .then(prDetails => {
        const outputDiv = document.getElementById('output');
        outputDiv.innerHTML = '';  // Clear previous results
        outputDiv.innerHTML += `<p style="font-size: 24px; font-weight: bold;">Pull Ruest Title: ${prDetails.title}</p>`;
        outputDiv.innerHTML += `<p style="font-size: 24px; font-weight: bold;">Author: ${prDetails.user.login}</p>`;

        // Now fetch the files
        fetch(apiFilesUrl, {
            method: 'GET',
            headers: new Headers({
                'Accept': 'application/vnd.github.v3+json'
            })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.statusText);
            }
            return response.json();
        })
        .then(files => {
            let table_flag = true;
            files.forEach(file => {
                if (file.filename.startsWith('docs/attribute_customizations') && file.filename.endsWith('table.md')) {
                    table_flag = false;
                    const patchLines = file.patch.split('\n');
                    let correct_flag = true;
                    outputDiv.innerHTML += `<p style="font-size: 18px; font-weight: bold;"> File Address: ${file.filename}</p>`
                    console.log(file.filename);
                    patchLines.forEach(line => {
                        if (line.startsWith('+')) {
                            line = line.substring(1).trim();
                            if (!line.startsWith('| Type') && !line.startsWith('| -----')) {
                                const fields = line.split('|').slice(1, -1).map(field => field.trim());
                                if (fields.length === 6) {
                                    const [type, , isTrueFalse, range, anotherBool, strField] = fields;
                                    const rangeRegex = /^[1-4](,[1-4]){0,3}$/;
                                    if (type === 'Essential' &&
                                        typeof strField === 'string' &&
                                        (isTrueFalse === 'True' || isTrueFalse === 'False') &&
                                        rangeRegex.test(range) &&
                                        (anotherBool === 'True' || anotherBool === 'False')) {
                                        //outputDiv.innerHTML += `<p>Correct: ${line}</p>`;
                                    } else {
                                        correct_flag = false;
                                        outputDiv.innerHTML += `<p>Error in line: ${line}</p>`;
                                    }
                                }
                            }
                        }
                    });
                    if (correct_flag){
                        outputDiv.innerHTML += `<p>No Error in this file</p>`;
                    }
                }
            });
            if (table_flag){
                outputDiv.innerHTML += `<p>No modification under the attribute_customizations file</p>`;
            }
        })
        .catch(error => {
            console.error('Error fetching files:', error);
            outputDiv.textContent = 'Error fetching files: ' + error.message;
        });
    })
    .catch(error => {
        console.error('Error fetching PR details:', error);
        document.getElementById('output').textContent = 'Error fetching PR details: ' + error.message;
    });
}