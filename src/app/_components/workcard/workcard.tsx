import Image from "next/image";
import styles from "./workcard.module.css";
import { SanityImageSource, urlFor } from "@/sanity/lib/image";

export type WorkcardProps = {
    title: string;
    slug: string;
    producedOn: string;
    coverImage: SanityImageSource | string;
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
                    src={
                        typeof coverImage === "string"
                            ? coverImage
                            : urlFor(coverImage).width(720).height(480).url()
                    }
                    alt={title}
                    fill
                    sizes="20vw 20vw"
                />
            </div>
            <div className={styles.textContainer}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.description}>{description}</p>
                <div className={styles.collaboratorsSection}>
                    <span className={styles.collaboratorsLabel}>
                        Together with:
                    </span>
                    <div className={styles.collaborators}>
                        {collaborators.map((collaborator, index) => (
                            <span key={index} className={styles.collaborator}>
                                {collaborator}
                            </span>
                        ))}
                    </div>
                </div>
                <span className={styles.producedOn}>
                    Produced on: {producedOn}
                </span>
            </div>
        </div>
    );
}

export default Workcard;
