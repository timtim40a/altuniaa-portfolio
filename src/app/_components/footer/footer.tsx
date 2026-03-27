import styles from "./footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.container}>
            <div className={styles.panel}>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        Email:{" "}
                        <a
                            href="mailto:altuninaalyona@gmail.com"
                            className={styles.link}
                        >
                            altuninaalyona@gmail.com
                        </a>
                    </li>
                    <li className={styles.item}>Tel: 0325-234552</li>
                    <li className={styles.item}>@altuniaaa</li>
                </ul>
            </div>
        </footer>
    );
}
