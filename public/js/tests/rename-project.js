'use strict';

const renameProjectButton = document.getElementById('rename-project');

renameProjectButton.onclick = async () => {
  const projectID = prompt('Select project to rename');
  const projectName = prompt('Enter new project name');
  await sendRenameProjectRequest(projectName, projectID);
}

async function sendRenameProjectRequest(name, id) {
  const response = await fetch('project/rename', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      accessID: '1234567890',
      data: {name, id}
    })
  });

  const result = await response.json();
  console.log('results:', result);
}