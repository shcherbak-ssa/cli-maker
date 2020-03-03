'use strict';

const selectUserButton = document.getElementById('select-user');

selectUserButton.onclick = () => sendSelectUserRequest();

async function sendSelectUserRequest() {
  const response = await fetch('user/select', {
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