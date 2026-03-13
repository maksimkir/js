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