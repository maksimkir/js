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