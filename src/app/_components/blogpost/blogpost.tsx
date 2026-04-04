import Image from "next/image";
import Link from "next/link";
import type { SanityImageSource } from "@sanity/image-url";
import { urlFor } from "@/sanity/lib/image";
import styles from "./blogpost.module.css";

export type BlogPostProps = {
    title: string;
    slug: string;
    publishedAt: string;
    coverImage: SanityImageSource;
    excerpt: string;
    body: any;
};

export default function BlogPost({
    title,
    slug,
    publishedAt,
    coverImage,
    excerpt,
    body,
}: BlogPostProps) {
    return (
        <Link href={`/blog/${slug}`} className={styles.container}>
            <div className={styles.imageWrapper}>
                <Image
                    className={styles.coverImage}
                    src={urlFor(coverImage).width(480).height(480).url()}
                    alt={title}
                    fill
                />
            </div>
            <div className={styles.textContent}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.excerpt}>{excerpt}</p>
                <span className={styles.publishedAt}>
                    Published on: {publishedAt}
                </span>
            </div>
        </Link>
    );
}
