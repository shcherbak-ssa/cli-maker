'use strict';

const button = document.getElementById('button');

button.onclick = () => sendPostRequest();

async function sendPostRequest() {
  const response = await fetch('project/select', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      accessID: '1234567890',
      data: {}
    })
  });

  const result = await response.json();
  console.log('results:', result);
}