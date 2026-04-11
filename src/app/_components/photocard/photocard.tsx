import Image from "next/image";
import styles from "./photocard.module.css";

function Photocard({
    title,
    location,
    takenAt,
    img1,
    alt = title,
    // expanded = false,
}: {
    title: string;
    location: string;
    takenAt: string;
    img1: string;
    alt?: string;
    // expanded?: boolean;
}) {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image
                    className={styles.image}
                    src={img1}
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
