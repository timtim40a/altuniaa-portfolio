import { BlogPostProps } from "@/app/_components/blogpost/blogpost";
import { client } from "@/sanity/client";
import { urlFor } from "@/sanity/lib/image";
import { ALL_POSTS_QUERY, POST_BY_SLUG_QUERY } from "@/sanity/lib/queries";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import styles from "./page.module.css";

export async function generateStaticParams() {
    const posts: BlogPostProps[] = await client.fetch(ALL_POSTS_QUERY);

    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const post: BlogPostProps = await client.fetch(POST_BY_SLUG_QUERY, {
        slug,
    });

    return (
        <>
            <div className={styles.container}>
                <h1 className={styles.title}>{post.title}</h1>
                <p className={styles.publishedAt}>{post.publishedAt}</p>
                <div className={styles.body}>
                    <PortableText value={post.body} />
                </div>
                <div className={styles.imageWrapper}>
                    <Image
                        className={styles.coverImage}
                        src={urlFor(post.coverImage)
                            .width(800)
                            .height(600)
                            .url()}
                        alt={post.title}
                        fill
                    />
                </div>
            </div>
        </>
    );
}
