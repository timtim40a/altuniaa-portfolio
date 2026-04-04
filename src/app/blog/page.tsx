import BlogPost, { BlogPostProps } from "../_components/blogpost/blogpost";
import styles from "./blog.module.css";

import { client } from "@/sanity/client";
import { ALL_POSTS_QUERY } from "@/sanity/lib/queries";

export const revalidate = false; // Disable ISR for this page, as blog posts are not expected to change frequently. Adjust as needed.

export default async function Blog() {
    const posts: BlogPostProps[] = await client.fetch(ALL_POSTS_QUERY);

    return (
        <div className={styles.container}>
            <h1>Blog</h1>
            {posts.map((post) => (
                <BlogPost key={post.slug} {...post} />
            ))}
        </div>
    );
}
