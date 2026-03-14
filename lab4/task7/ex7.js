function ex7() {
  const student = {
    name: "Дмитро",
    age: 21,
    course: 3,
  };

  student.subjects = ["Математика", "Фізика", "Програмування", "Англійська"];
  console.log("Завдання 7 | Після додавання предметів:", student);
 
  delete student.age;
  console.log("Завдання 7 | Після видалення 'age':", student);
}
ex7();