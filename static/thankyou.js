const rated = document.getElementById('rated');

var value;

if(localStorage.getItem('ratedValue')){
    value = localStorage.getItem('ratedValue');
}
else {
    let urlParams = new URLSearchParams(window.location.search);
    value = urlParams.get('value');
}

rated.textContent = value;