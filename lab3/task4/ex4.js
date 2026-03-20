function calculateEvenElements(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sum += arr[i];
        }
        
    }
    return sum;
}

const result = calculateEvenElements([1, 2, 3, 4, 5, 6, 10]);
console.log("Сума парних чисел у масиві [1, 2, 3, 4, 5, 6, 10] = " + result);
