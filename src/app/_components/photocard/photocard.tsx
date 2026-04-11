import Image from "next/image";
import styles from "./photocard.module.css";
import { SanityImageSource, urlFor } from "@/sanity/lib/image";
import { url } from "inspector";

export type PhotocardProps = {
    title: string;
    image: SanityImageSource;
    alt?: string;
    location: string;
    takenAt: string;
    // expanded?: boolean;
};

function Photocard({
    title,
    image,
    alt = title,
    location,
    takenAt,
    // expanded = false,
}: PhotocardProps) {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image
                    className={styles.image}
                    src={urlFor(image).width(720).height(480).url()}
                    alt={alt}
                    fill
                    sizes="20vw 20vw"
                />
            </div>
            <div className={styles.overlay}>
                {takenAt}
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.location}>{location}</p>
            </div>
        </div>
    );
}

export default Photocard;
