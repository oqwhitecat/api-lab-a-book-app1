// src/app/page.js
import Link from 'next/link';
import { books } from './data';
import styles from './page.module.css';
import ContactSection from './components/ContactSection';

export default function HomePage() {
  return (
    <main className="container">
      <h1 className="main-header">Book Discovery</h1>
      <div className={styles.grid}>
        {books.map((book) => (
          <Link href={`/books/${book.id}`} key={book.id} className={styles.card}>
            <img src={book.imageUrl} alt={book.title} className={styles.cardImage} />
            <div className={styles.cardContent}>
              <h3>{book.title}</h3>
              <p>{book.author}</p>
            </div>
          </Link>
        ))}
      </div>
      <ContactSection />
    </main>
  );
}