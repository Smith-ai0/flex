const button = document.getElementById('myButton');

button.addEventListener('click', function() {
    if (button.textContent === 'Click me!') {
        button.textContent = 'Clicked!';
    } else {
        button.textContent = 'Click me!';
    }
});
