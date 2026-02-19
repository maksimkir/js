const title = document.querySelector('#main-title');
const button = document.querySelector('.action-btn');

function processEvent() {

    title.innerText = "Hello world!";

    button.innerText = "Молодець)";
    
    console.warn("Максим");
}

button.onmousemove = processEvent;