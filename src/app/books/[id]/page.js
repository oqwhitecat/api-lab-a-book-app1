// src/app/books/[id]/page.js
import { books } from '@/app/data';
import Link from 'next/link';
import styles from './bookDetail.module.css';
import ContactSection from '@/app/components/ContactSection';

export default function BookDetailPage({ params }) {
  const book = books.find(b => b.id === parseInt(params.id));

  if (!book) {
    return <p className="container">Book not found.</p>;
  }

  return (
    <main className="container">
      <Link href="/" className={styles.backButton}>&larr; Back to All Books</Link>
      <div className={styles.bookDetailContainer}>
        <img src={book.imageUrl} alt={book.title} className={styles.bookImage} />
        <div className={styles.bookInfo}>
          <h1>{book.title}</h1>
          <h2>by {book.author}</h2>
          <p className={styles.meta}><strong>Genre:</strong> {book.genre} | <strong>Year:</strong> {book.year}</p>
          <p className={styles.description}>{book.description}</p>
          <button className={styles.buyButton}>Buy Now</button>
        </div>
      </div>
      <ContactSection />
    </main>
  );
}