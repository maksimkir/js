const myHeader = document.querySelector('h1');

myHeader.onmousemove = function() {

    console.warn("Максим"); 
    
    myHeader.innerText = "Hello world!";
};