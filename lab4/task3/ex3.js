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