"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
            // Registration was successful
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function(err) {
            // registration failed :(
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}

// place your code below

const input = document.querySelector('.editor__story__input--js');
const load = document.querySelector('.editor__button__load--js');
const save = document.querySelector('.editor__button__save--js');
const trash = document.querySelector('.editor__button__trash--js');



save.addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.setItem('input', input.value);
});

load.addEventListener('click', (e) => {
    e.preventDefault();
    input.value = localStorage.getItem('input');
});

trash.addEventListener('click', (e) => {
    e.preventDefault();
    input.value = localStorage.removeItem('input');
});