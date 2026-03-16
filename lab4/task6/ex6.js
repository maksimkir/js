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