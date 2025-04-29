'use strict';

const logo = document.querySelector('.logo');
const message = document.createElement('div');
const errorMessage = document.createElement('div');

message.className = 'message';
errorMessage.className = 'error-message';
errorMessage.className = 'message';

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

promise1
  .then((messages) => {
    message.innerHTML = messages;
  })
  .catch((error) => {
    errorMessage.innerHTML = error;
    logo.appendChild(errorMessage);
  })
  .finally(() => {
    message.innerHTML = 'Promise was resolved!';
    logo.appendChild(message);
  });

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise 2 resolved'));
  }, 3000);
});

promise2
  .then((messages) => {
    message.innerHTML = messages;
  })
  .catch((error) => {
    errorMessage.innerHTML = error;
    logo.appendChild(errorMessage);
  })
  .finally(() => {
    message.innerHTML = 'Promise was resolved!';
    logo.appendChild(message);
  });
