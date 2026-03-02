
// Функція для перевірки діапазону (наприклад, від 10 до 50)
function checkRange() {
    const num = Number(document.getElementById('rangeNum').value);
    // Використання логічного оператора && для діапазону
    const isInRange = (num >= 10 && num <= 50);
    
    document.getElementById('rangeRes').innerText = isInRange 
        ? "Число в діапазоні (10-50)" 
        : "Число поза діапазоном";
}

// Використання оператора NOT (!) для зміни стану
let currentState = true;
function toggleState() {
    currentState = !currentState; // Інверсія стану
    document.getElementById('stateValue').innerText = currentState;
}


// === ЗАВДАННЯ 3: УМОВНІ РОЗГАЛУЖЕННЯ ===

// 1. Оцінка студента у словесному форматі (використання if)
function getGradeLiteral(grade) {
    if (grade >= 90) return "Відмінно";
    if (grade >= 75) return "Добре";
    if (grade >= 60) return "Задовільно";
    return "Незадовільно";
}

// 2. Визначення сезону (використання тернарного оператора ?)
function getSeason(month) {і
    return (month === 12 || month <= 2) ? "Зима" :
           (month >= 3 && month <= 5) ? "Весна" :
           (month >= 6 && m <= 8) ? "Літо" :
           (month >= 9 && month <= 11) ? "Осінь" : "Некоректний місяць";
}

// Функції для виводу результатів на екран
function processGrade() {
    const val = Number(document.getElementById('gradeInput').value);
    document.getElementById('gradeRes').innerText = `Результат: ${getGradeLiteral(val)}`;
}

function processSeason() {
    const val = Number(document.getElementById('monthInput').value);
    document.getElementById('seasonRes').innerText = `Пора року: ${getSeason(val)}`;
}