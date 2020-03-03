'use strict';

const createProjectButton = document.getElementById('create-project');

createProjectButton.onclick = async () => {
  const projectName = prompt('Enter project name');
  await sendCreateProjectRequest(projectName);
}

async function sendCreateProjectRequest(name) {
  const response = await fetch('project/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      accessID: '1234567890',
      data: {name}
    })
  });

  const result = await response.json();
  console.log('results:', result);
}