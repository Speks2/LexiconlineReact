import styles from '../Header/Header.module.scss';




export function Header() {


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
       </>


    );
}