// 1. Отримуємо доступ до елементів за допомогою querySelector (вимога варіанту)
const title = document.querySelector('#main-title');
const button = document.querySelector('.action-btn');

// 2. Створюємо функцію для обробки події
function processEvent() {
    // Виводимо повідомлення у елемент h1 (вимога завдання)
    title.innerText = "Hello world!";
    
    // Виводимо ім'я в консоль як warn (вимога варіанту)
    console.warn("Максим");
}

// 3. Призначаємо івент onmousemove для кнопки (вимога варіанту та завдання)
button.onmousemove = processEvent;