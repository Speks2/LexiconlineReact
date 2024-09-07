import styles from '../Header/Header.module.scss';




export function Header() {


    return (

       <>
       <header className={styles.Header}>
        <div className={styles.Svg}>
        <img src="/src/assets/images/Logo.svg" alt="headerSvg" />
        </div>
        <h1>Lexiconline</h1>
        <container><h2>About Lexiconline</h2></container>
        <div className={styles.Navbar}>
        <nav>
         <a href="#home" className={styles.navItem}>HOME</a>
         <a href="#about" className={styles.navItem}>ABOUT</a>
         <a href="#api" className={styles.navItem}>API</a>
        </nav>
        </div>
        <img src="/src/assets/images/headerImage.jpg" alt="headerImage"/>
      </header>
     
       </>


    );
}