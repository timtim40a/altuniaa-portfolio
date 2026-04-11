import Image from "next/image";
import styles from "./photocard.module.css";

export type PhotocardProps = {
    title: string;
    image: string;
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
                    src={image}
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
