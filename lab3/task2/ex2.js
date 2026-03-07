function task2(number) {
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }
    console.log(`Факторіал числа: ${number} = ${factorial}`);
}

task2(5); 