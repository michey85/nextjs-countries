import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <div className={styles.header}>
      <Link href="/" className={styles.link}>
        <h1 className={styles.h1}>Where in the world?</h1>
      </Link>
    </div>
  );
}
