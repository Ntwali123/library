import React from "react";
import BookCard from "@/components/BookCard";

// interface Book {
//   title: string;
//   // Add other properties of Book if needed
// }

interface Props {
  title: string;
  books: Book[];
  containerClassName?: string;
}

const BookList = ({ title, books, containerClassName }: Props) => {
  if (books.length < 2) return null; // Fix: Return null instead of `undefined`

  return (
    <section className={containerClassName}>
      {" "}
      {/* Fix: Proper JSX syntax */}
      <h2 className="font-bebas-neue text-4xl text-light-100">{title}</h2>
      <ul className="book-list">
        {books.map((book) => (
          <BookCard key={book.title} {...book} />
        ))}
      </ul>
    </section>
  );
};

export default BookList;
