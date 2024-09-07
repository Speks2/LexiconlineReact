import styles from '../Footer/Footer.module.scss';



export function Footer() {



return (

<>
<footer className={styles.Footer}>
    <container>
        <div>
        <p>Address: Somestreet 232 Luxemborg</p>
        </div>
        <div>
            <p>Contact: Email:  somemail@mail.com Phone: 44332343</p>
        </div>
        <div>
            <p>With special thanks to https://dictionaryapi.dev/ For the awesome API</p>
        </div>
        <div>
            <img src="/src/assets/images/Logo.svg" alt="logoSvg" />
            <p>Lexicon</p>
        </div>
    </container>
</footer>
</>



);
}