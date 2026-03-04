document.getElementById('btnCalc').onclick = function() {
    const input = document.getElementById('nums').value;
    // Очищуємо пробіли та перетворюємо у числа
    const arr = input.split(',').map(num => Number(num.trim()));
    
    const min = Math.min(...arr);
    const max = Math.max(...arr);

    console.log("--- Розрахунок чисел ---");
    console.log("Вхідний масив:", arr);
    console.log("Мінімум:", min);
    console.log("Максимум:", max);
    
    document.getElementById('result').innerText = `Мін: ${min}, Макс: ${max}`;
};  

document.getElementById('btnComp').onclick = function() {
    const obj1 = { id: 2, name: "Test" };
    const obj2 = { id: 1, name: "Test" };
  
    const isEqual = JSON.stringify(obj1) === JSON.stringify(obj2);

    console.log("--- Порівняння об'єктів ---");
    console.log("Об'єкт 1:", obj1);
    console.log("Об'єкт 2:", obj2);
    console.log("Результат:", isEqual);
    
    document.getElementById('result').innerText = `Об'єкти рівні за властивостями: ${isEqual}`;
};