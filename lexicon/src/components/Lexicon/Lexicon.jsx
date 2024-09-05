import styles from '../Lexicon/Lexicon.module.scss';

export function Lexicon() {
  return (
    <>
      <header className={styles.Header}>
        <h1>Lexiconline</h1>
        <div className={styles.Navbar}>
        <nav>
         <a href="#home" className={styles.navItem}>HOME</a>
         <a href="#about" className={styles.navItem}>ABOUT</a>
         <a href="#api" className={styles.navItem}>API</a>
        </nav>
        </div>
      </header>
      <main className={styles.Main}>
        <p>Text</p>
      </main>
      <footer className={styles.Footer}>
        <p>text</p>
      </footer>
    </>
  );
}
