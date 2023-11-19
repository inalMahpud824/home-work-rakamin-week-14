// pages/books/[id].jsx
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { instance } from '@/modules/axios';

export default function BookDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await instance.get(`/books/${id}`);
        setBook(response.data.book);
      } catch (error) {
        console.error('Error fetching book:', error);
      }
    };

    if (id) {
      fetchBook();
    }
  }, [id]);

  if (!book) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{book.title}</h1>
      <p>Author: {book.author}</p>
      <p>Publisher: {book.publisher}</p>
      {/* Add more details as needed */}
    </div>
  );
}
