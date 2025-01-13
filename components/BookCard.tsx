import React from "react";
import Link from "next/link";
import BookCover from "@/components/BookCover";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const BookCard = ({
  id,
  title,
  genre,
  coverColor,
  coverUrl,
  isLoanedBook = false,
}: Book) => (
  <li className={cn(isLoanedBook && "xs:w-52 w-full")}>
    <Link
      href={`/books/${id}`}
      className={cn(isLoanedBook && "w-full flex flex-col items-center")}
    >
      <BookCover coverUrl={coverUrl} coverImage={coverUrl} />

      <div className={cn("mt-4", !isLoanedBook && "xs:max-w-40 max-w-28")}>
        <p className="book-title">{title}</p>
        <p className="book-genre">{genre}</p>
      </div>

      {isLoanedBook && (
        <div className={cn("mt-3 w-full")}>
          <div className="book-loaned">
            <Image
              src="/icon/calender.svg"
              alt="calender"
              width={18}
              className="object-container"
            />
            <p className="text-light-100">11 days left to return</p>
          </div>

          <Button className="book=btn">Download receipt</Button>
        </div>
      )}
    </Link>
  </li>
);
export default BookCard;
