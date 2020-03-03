'use strict';

const deleteProjectButton = document.getElementById('delete-project');

deleteProjectButton.onclick = async () => {
  const projectID = prompt('Select project to delete');
  await sendDeleteProjectRequest(projectID);
}

async function sendDeleteProjectRequest(id) {
  const response = await fetch('project/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      accessID: '1234567890',
      data: {id}
    })
  });

  const result = await response.json();
  console.log('results:', result);
}