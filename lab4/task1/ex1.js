//Завдання 1
function ex1() {
  const fruits = ["яблуко", "банан", "апельсин", "груша", "виноград", "манго"];
 
  fruits.pop();
  console.log("видалення останнього елемента:", fruits);
 
  fruits.unshift("ананас");
 
  fruits.sort((a, b) => b.localeCompare(a, "uk"));
  console.log("сортування у зворотньому порядку:", fruits);
 
  const index = fruits.indexOf("яблуко");
  console.log("Індекс елемента 'яблуко':", index);
}
ex1();

//Завдання 2

function ex2() {
  const colors = [
    "червоний",
    "синій",
    "зелений",
    "темно-синій",
    "жовтий",
    "синій-голубий",
    "фіолетовий",
  ];
 
  const longest = colors.reduce((a, b) => (a.length >= b.length ? a : b));
  const shortest = colors.reduce((a, b) => (a.length <= b.length ? a : b));
  console.log("Найдовший елемент:", longest);
  console.log("Найкоротший елемент:", shortest);
 
  const filtered = colors.filter((c) => c.includes("синій"));
  console.log("Лише з 'синій':", filtered);

  const result = filtered.join(", ");
  console.log("Рядок після join:", result);
}
ex2();

//Завдання 3

function ex3() {
  let employees = [
    { name: "Олег", age: 35, position: "менеджер" },
    { name: "Аліна", age: 28, position: "розробник" },
    { name: "Василь", age: 42, position: "розробник" },
    { name: "Дарина", age: 31, position: "дизайнер" },
    { name: "Богдан", age: 25, position: "розробник" },
  ];
 
  employees.sort((a, b) => a.name.localeCompare(b.name, "uk"));
  console.log("Відсортовано за іменем:", employees);
 
  const developers = employees.filter((e) => e.position === "розробник");
  console.log("Розробники:", developers);

  employees = employees.filter((e) => e.age < 40);
  console.log("Після видалення (вік >= 40):", employees);

  employees.push({ name: "Злата", age: 27, position: "аналітик" });
  console.log("Після додавання нового працівника:", employees);
}
ex3();  

//Завдання 4

function ex4() {
  let students = [
    { name: "Олексій", age: 20, course: 2 },
    { name: "Марія", age: 22, course: 3 },
    { name: "Іван", age: 19, course: 1 },
    { name: "Соломія", age: 21, course: 3 },
    { name: "Тарас", age: 23, course: 4 },
  ];
 
  students = students.filter((s) => s.name !== "Олексій");
  console.log("Після видалення Олексія:", students);
 
  students.push({ name: "Оксана", age: 20, course: 2 });
  console.log("Після додавання нового студента:", students);

  students.sort((a, b) => b.age - a.age);
  console.log("Відсортовано за віком (спадання):", students);

  const thirdCourse = students.find((s) => s.course === 3);
  console.log("ЗСтудент 3-го курсу:", thirdCourse);
}
ex4();

//Завдання 5

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

//Завдання 6

function ex6() {
  function libraryManagement() {
    let books = [
      {
        title: "Кобзар",
        author: "Тарас Шевченко",
        genre: "поезія",
        pages: 240,
        isAvailable: true,
      },
      {
        title: "Тіні забутих предків",
        author: "Михайло Коцюбинський",
        genre: "повість",
        pages: 180,
        isAvailable: false,
      },
      {
        title: "Лісова пісня",
        author: "Леся Українка",
        genre: "драма",
        pages: 120,
        isAvailable: true,
      },
      {
        title: "Захар Беркут",
        author: "Іван Франко",
        genre: "повість",
        pages: 160,
        isAvailable: true,
      },
      {
        title: "Хіба ревуть воли",
        author: "Панас Мирний",
        genre: "роман",
        pages: 420,
        isAvailable: false,
      },
    ];
 
    function addBook(title, author, genre, pages) {
      books.push({ title, author, genre, pages, isAvailable: true });
      console.log(`Книгу "${title}" додано.`);
    }
 
    function removeBook(title) {
      books = books.filter((b) => b.title !== title);
      console.log(`Книгу "${title}" видалено.`);
    }
 
    function findBooksByAuthor(author) {
      return books.filter((b) => b.author === author);
    }
 
    function toggleBookAvailability(title, isBorrowed) {
      const book = books.find((b) => b.title === title);
      if (book) {
        book.isAvailable = !isBorrowed;
        console.log(`"${title}" → Доступно: ${book.isAvailable}`);
      }
    }
 
    function sortBooksByPages() {
      books.sort((a, b) => a.pages - b.pages);
      console.log("Книги відсортовані за кількістю сторінок:", books);
    }
 
    function getBooksStatistics() {
      const total = books.length;
      const available = books.filter((b) => b.isAvailable).length;
      const borrowed = total - available;
      const avgPages = Math.round(
        books.reduce((acc, b) => acc + b.pages, 0) / total
      );
      return { total, available, borrowed, avgPages };
    }
 
    // Демонстрація всіх функцій
    addBook("Місто", "Валер'ян Підмогильний", "роман", 310);
    removeBook("Захар Беркут");
    console.log(
      "Книги Лесі Українки:",
      findBooksByAuthor("Леся Українка")
    );
    toggleBookAvailability("Кобзар", true);       //  взяли
    toggleBookAvailability("Тіні забутих предків", false); // повернули
    sortBooksByPages();
    console.log("Статистика бібліотеки:", getBooksStatistics());
  }
 
  libraryManagement();
}
ex6();

//Завдання 7

function ex7() {
  const student = {
    name: "Дмитро",
    age: 21,
    course: 3,
  };

  student.subjects = ["Математика", "Фізика", "Програмування", "Англійська"];
  console.log("Після додавання предметів:", student);
 
  delete student.age;
  console.log("Після видалення 'age':", student);
}
ex7();