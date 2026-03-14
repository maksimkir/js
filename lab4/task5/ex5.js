function ex5() {
  let numbers = [3, 7, 2, 8, 5, 1, 6, 4, 9, 10];

  const squared = numbers.map((n) => n ** 2);
  console.log("Квадрати чисел:", squared);
 
  const evens = numbers.filter((n) => n % 2 === 0);
  console.log("Парні числа:", evens);

  const sum = numbers.reduce((acc, n) => acc + n, 0);
  console.log("Сума елементів:", sum);

  const extra = [11, 12, 13, 14, 15];
  numbers = [...extra, ...numbers];
  console.log("Після додавання 5 чисел:", numbers);

  numbers.splice(0, 3);
  console.log("Після видалення перших 3 елементів:", numbers);
}
ex5();