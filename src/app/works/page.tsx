import { client } from "@/sanity/client";
import Workcard, { WorkcardProps } from "../_components/workcard/workcard";
import styles from "./works.module.css";
import { ALL_WORKS_QUERY } from "@/sanity/lib/queries";
import { work } from "@/sanity/schemas/work";

export default async function Works() {
    const works: WorkcardProps[] = await client.fetch(ALL_WORKS_QUERY);

    return (
        <div className={styles.container}>
            <h1>Works</h1>
            <div className={styles.worksList}>
                {works.map((work) => (
                    <Workcard key={work.slug} {...work} />
                ))}
            </div>
        </div>
    );
}
