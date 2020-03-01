'use strict';

const button = document.getElementById('button');

button.onclick = () => sendPostRequest();

async function sendPostRequest() {
  console.log('send');

  const response = await fetch('user/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      access: '1234',
      data: {
        named: 'Shcherbak',
        userID: '4321'
      }
    })
  });
}