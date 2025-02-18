'use strict';

const body = document.body;
const logo = document.querySelector('.logo');

const messageResolved = document.createElement('div');
const messageReject = document.createElement('div');

messageResolved.setAttribute('class', 'messageResolved');
messageResolved.textContent = 'Promise was resolved!';

messageReject.setAttribute('class', 'messageReject');
messageReject.textContent = 'Promise was rejected!!!';

async function logoPromises() {
  try {
    const result = await Promise.any([promise1(), promise2()]);

    body.append(result);
  } catch (errorMessage) {
    const result = await Promise.any([promise1(), promise2()]);

    body.append(result);
  }
}

function promise1() {
  return new Promise((resolve, reject) => {
    logo.addEventListener('click', () => {
      resolve(messageResolved);
      reject(null);
    });
  });
}

function promise2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(messageReject);
      reject(null);
    }, 3000);
  });
}

logoPromises();
