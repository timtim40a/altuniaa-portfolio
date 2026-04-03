import styles from "./blogpost.module.css";

export default function BlogPost() {
    return (
        <article className={styles.container}>
            <img className={styles.coverImage} alt="Cover" />
            <div className={styles.textContent}>
                <h2 className={styles.title}>Blog Post Title</h2>
                <p className={styles.excerpt}>
                    This is a short excerpt of the blog post. It gives a brief
                    overview of the content to entice readers to click and read
                    more.
                </p>
                <span className={styles.publishedAt}>
                    Published on: 2024-06-01
                </span>
            </div>
        </article>
    );
}
