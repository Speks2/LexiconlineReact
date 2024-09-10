import styles from '../Header/Header.module.scss';




export function Header() {


    return (

       <>
       <header className={styles.Header}>
        <div className={styles.Svg}>
        <img src="/src/assets/images/Logo.svg" alt="headerSvg" />
        </div>
        <h1>Lexiconline</h1>
        <div className={styles.About}><h2>About Lexiconline</h2></div>
        <div className={styles.Navbar}>
        <nav>
          <div>
          <a href="#home" className={styles.navItem}>HOME</a>
         <a href="#about" className={styles.navItem}>ABOUT</a>
         <a href="#api" className={styles.navItem}>API</a>
          </div>
        </nav>
        </div>
        <div className={styles.HeaderImage}>
        <img src="/src/assets/images/headerImage.jpg" alt="headerImage"/>
        </div>
      </header>
     
       </>


    );
}