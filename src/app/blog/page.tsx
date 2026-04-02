import BlogPost from "../_components/blogpost/blogpost";
import styles from "./blog.module.css";

export default function Blog() {
    return (
        <div className={styles.container}>
            <h1>Blog</h1>
            <BlogPost />
        </div>
    );
}
