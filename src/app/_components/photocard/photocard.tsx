import Image from "next/image";
import styles from "./photocard.module.css";

function Photocard({
    title,
    caption,
    takenAt,
    img1,
    alt = title,
    expanded = false,
}: {
    title: string;
    caption: string;
    takenAt: string;
    img1: string;
    alt?: string;
    expanded?: boolean;
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
            <div className={styles.overlay}>{takenAt}</div>
            {expanded && (
                <div className={styles.textContainer}>
                    <h3 className={styles.title}>{title}</h3>
                    <p className={styles.caption}>{caption}</p>
                </div>
            )}
        </div>
    );
}

export default Photocard;
