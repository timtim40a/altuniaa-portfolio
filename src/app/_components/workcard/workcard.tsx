import Image from "next/image";
import styles from "./workcard.module.css";
import { SanityImageSource, urlFor } from "@/sanity/lib/image";

export type WorkcardProps = {
    title: string;
    slug: string;
    producedOn: string;
    coverImage: SanityImageSource;
    description: string;
    collaborators: string[];
};

function Workcard({
    title,
    slug,
    producedOn,
    coverImage,
    description,
    collaborators,
}: WorkcardProps) {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image
                    className={styles.image}
                    src={urlFor(coverImage).width(720).height(480).url()}
                    alt={title}
                    fill
                    sizes="20vw 20vw"
                />
            </div>
            <div className={styles.textContainer}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
                <div className={styles.collaborators}>
                    {collaborators.map((collaborator, index) => (
                        <span key={index} className={styles.collaborator}>
                            {collaborator}
                        </span>
                    ))}
                </div>
                <span className={styles.producedOn}>
                    Produced on: {producedOn}
                </span>
            </div>
        </div>
    );
}

export default Workcard;
