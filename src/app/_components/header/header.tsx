import Star from "../star/star";
import styles from "./header.module.css";

export default function Header() {
    return (
        <header className={styles.container}>
            <div className={styles.panel}>
                <h1 className={styles.title}>Alona Altunina</h1>
                <div className={styles.starContainer}>
                    <Star trail={true} />
                </div>
            </div>
        </header>
    );
}
