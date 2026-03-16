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