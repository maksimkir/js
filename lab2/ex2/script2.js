function checkRange() {
    const val = Number(document.getElementById('numInput').value);
    const min = 10;
    const max = 50;
    
    // Перевіряємо, чи число знаходиться в межах
    const inRange = val >= min && val <= max;
    
    document.getElementById('rangeResult').innerText = inRange 
         "Число в діапазоні " 
         "Число поза діапазоном ";
}

let isHappy = true;

function toggleStatus() {
    // Оператор NOT 
    isHappy = !isHappy; 
    
    document.getElementById('statusText').innerText = isHappy;
}