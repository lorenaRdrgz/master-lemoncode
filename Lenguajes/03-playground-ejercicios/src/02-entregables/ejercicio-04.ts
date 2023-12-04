//READ BOOKS

interface Libro {
  title: string;
  isRead: boolean;
}

const books: Libro[] = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true },
];

function isBookRead(books: Libro[], titleToSearch: string) {
  let book: Libro;
  book = books.find(x => x.title.includes(titleToSearch));

  if (book === undefined) {
    book = {
      title: "",
      isRead: false
    }
  }

  return book.isRead;
}

console.log(isBookRead(books, "Devastación")); // true
console.log(isBookRead(books, "Canción de hielo y fuego")); // false
console.log(isBookRead(books, "Los Pilares de la Tierra")); // false

