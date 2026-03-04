function checkRange() {
    const val = Number(document.getElementById('numInput').value);
    const min = 10;
    const max = 50;
    
    // Перевіряємо, чи число знаходиться в межах
    const inRange = val >= min && val <= max;
    
    // Вивід у консоль
    console.log(`Введене число: ${val}`);
    console.log(`Чи в діапазоні (${min}-${max}): ${inRange}`);

    document.getElementById('rangeResult').innerText = inRange 
        ? "Число в діапазоні" 
        : "Число поза діапазоном";
}

let isHappy = true;

function toggleStatus() {
    // Оператор NOT змінює true на false і навпаки
    isHappy = !isHappy; 
    
    // Вивід у консоль
    console.log("Поточний стан (isHappy):", isHappy);
    
    document.getElementById('statusText').innerText = isHappy;
}