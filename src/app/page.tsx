import styles from "./page.module.css";

export default function Home() {
    return (
        <div className={styles.page}>
            <h2 className={styles.subtitle}>Welcome to my portfolio!</h2>
            <aside className={styles.aside}>
                <img
                    src="/images/astronaut.jpg"
                    alt="Astronaut"
                    className={styles.avatar}
                />
            </aside>
            <p className={styles.text}>
                I'm a software developer with a passion for creating innovative
                and efficient solutions. This portfolio showcases some of my
                projects and skills. Feel free to explore and contact me if
                you'd like to collaborate or learn more about my work.
            </p>
        </div>
    );
}
