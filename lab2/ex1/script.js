// Знаходження мінімального та максимального елементів
function findMinMax(numbers) {
    let min = Math.min(...numbers);
    let max = Math.max(...numbers);
    return { min, max };
}

console.log("1.1. Мін/Макс:", findMinMax([10, 5, 22, 1, 7]));

// Порівняння двох об'єктів за їхніми властивостями
function compareObjects(obj1, obj2) {
    // Порівнюємо властивості (наприклад, вік та ім'я)
    if (obj1.name === obj2.name && obj1.age === obj2.age) {
        return "Об'єкти однакові";
    } else {
        return "Об'єкти різні";
    }
}

const user1 = { name: "Ivan", age: 20 };
const user2 = { name: "Ivan", age: 20 };
console.log("1.2. Порівняння об'єктів:", compareObjects(user1, user2));