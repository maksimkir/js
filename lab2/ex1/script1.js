document.getElementById('btnCalc').onclick = function() {
    const input = document.getElementById('nums').value;
    const arr = input.split(',').map(Number);
    
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    
    document.getElementById('result').innerText = `Мін: ${min}, Макс: ${max}`;
};

document.getElementById('btnComp').onclick = function() {
    const obj1 = { id: 1, name: "Test" };
    const obj2 = { id: 2, name: "Test" };
  
    const isEqual = JSON.stringify(obj1) === JSON.stringify(obj2);
    
    document.getElementById('result').innerText = `Об'єкти рівні за властивостями: ${isEqual}`;
};