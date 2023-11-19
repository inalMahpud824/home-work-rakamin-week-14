import Navbar from "@/components/Elements/Navbar";
import FormBook from "@/components/Fragments/FormBook";
import { instance } from "@/modules/axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchBooks = async () => {
      const books = await getAllBooks();
      setBooks(books);
    };
    fetchBooks();
  }, [books]);

  const handleDelete = async (id) => {
    try {
      await deleteBook(id);
      // Remove the deleted book from the state
    } catch (error) {
      console.error("Error during book deletion:", error);
    }
  };

  return (
    <div>
      <Navbar>username</Navbar>
      <div className="flex justify-center mx-auto mt-8">
        {books?.books?.map((book) => (
          <div
            className="max-w-xs rounded overflow-hidden shadow-lg"
            key={book.id}
          >
            <Image
              className="w-full cover"
              alt="Judul Buku"
              src={`http://localhost:8000/${book.image}`}
              width={20}
              height={20}
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{book.title}</div>
            </div>
            <button
              className="bg-yellow-400 text-white px-4 py-2"
            >
              <Link href={`/books/${book.id}`}>Detail</Link>
            </button>
            <button
              className="bg-red-500 text-white px-4 py-2"
              onClick={() => handleDelete(book.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      <FormBook />
    </div>
  );
}

async function getAllBooks() {
  try {
    const response = await instance.get("/books");
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || "Something went wrong");
  }
}

async function deleteBook(id) {
  try {
    const response = await instance.delete(`/books/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || "Something went wrong");
  }
}
