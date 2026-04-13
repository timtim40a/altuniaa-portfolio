import { client } from "@/sanity/client";
import Workcard, { WorkcardProps } from "../_components/workcard/workcard";
import styles from "./works.module.css";
import { ALL_WORKS_QUERY } from "@/sanity/lib/queries";
import { work } from "@/sanity/schemas/work";

export default async function Works() {
    // const works: WorkcardProps[] = await client.fetch(ALL_WORKS_QUERY);
    const works: WorkcardProps[] = [
        {
            title: "My work",
            slug: "my-work",
            producedOn: "2023-01-01",
            coverImage: "/images/avatar.jpg",
            description: "My photo as a placeholder.",
            collaborators: ["Tymur", "Alona"],
        },
        {
            title: "My work",
            slug: "my-work2",
            producedOn: "2023-01-01",
            coverImage: "/images/avatar.jpg",
            description: "My photo as a placeholder.",
            collaborators: ["Tymur", "Alona"],
        },
    ];

    return (
        <div className={styles.container}>
            <h1>Works</h1>
            <div className={styles.galleryGrid}>
                {works.map((work) => (
                    <Workcard key={work.slug} {...work} />
                ))}
            </div>
        </div>
    );
}
