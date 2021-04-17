import { books as bookList } from "../data/books";

const getBooks = (parent, args) => {
  const first = args.first || 5;
  const after = args.after || 0;
  const index = bookList.findIndex((item) => item.isbn13 === after);
  const offset = index + 1;

  const books = bookList.slice(offset, offset + first);
  const lastBook = books[books.length - 1];

  return {
    pageInfo: {
      endCursor: lastBook.isbn13,
      hasNextPage: offset + first < bookList.length,
    },
    edges: books.map((book) => ({
      cursor: book.isbn13,
      node: book,
    })),
  };
}

export default getBooks;