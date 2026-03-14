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