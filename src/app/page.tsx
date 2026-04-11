import styles from "./page.module.css";

export default function Home() {
    return (
        <div className={styles.page}>
            <div className={styles.hero}>
                <h2 className={styles.subtitle}>Welcome to my portfolio!</h2>
                <aside className={styles.aside}>
                    <img
                        src="/images/avatar.jpg"
                        alt="Astronaut"
                        className={styles.avatar}
                    />
                </aside>
                <p className={styles.text}>
                    Hi! My name is Alona, I'm a multidisciplinary artist
                    combining playback theatre, songwriting and performance, and
                    creative writing based in Brighton, UK. On this website you
                    can find my portfolio and works. Don't hesitate to contact
                    me if you're interested in collaboration! Text me … or drop
                    an email to altuninaalyona@gmail.com Glad to have you here!
                </p>
            </div>
            <div className={styles.sectionWrapper}>
                <div className={styles.randomPhotosContainer}>
                    <h2 className={styles.sectionTitle}>Random Photos</h2>
                    <img
                        src="/images/photo1.jpg"
                        alt="Random Photo 1"
                        className={styles.randomPhoto}
                    />
                    <img
                        src="/images/photo2.jpg"
                        alt="Random Photo 2"
                        className={styles.randomPhoto}
                    />
                    <img
                        src="/images/photo3.jpg"
                        alt="Random Photo 3"
                        className={styles.randomPhoto}
                    />
                </div>
                <div className={styles.featuredWorkContainer}>
                    <h2 className={styles.sectionTitle}>Featured Work</h2>
                    <img
                        src="/images/featured1.jpg"
                        alt="Featured Work 1"
                        className={styles.featuredWorkImage}
                    />
                    <p className={styles.text}>
                        Here are some of my recent projects that I'm proud of.
                    </p>
                </div>
            </div>
        </div>
    );
}
