'use strict';

const button = document.getElementById('button');

button.onclick = () => sendPostRequest();

async function sendPostRequest() {
  console.log('send');
  const response = await fetch('user/select', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      accessID: '1234567890',
      data: {
        name: '',
        userID: ''
      }
    })
  });

  const result = await response.json();

  console.log(`status: ${response.status}`);
  console.log('results:', result);
}