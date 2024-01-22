const rated = document.getElementById('rated');

let urlParams = new URLSearchParams(window.location.search);
const value = urlParams.get('value');

rated.textContent = value;