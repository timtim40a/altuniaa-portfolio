import Photocard from "../_components/photocard/photocard";
import styles from "./gallery.module.css";

export default function Gallery() {
    return (
        <div className={styles.container}>
            <h1>Gallery</h1>
            <div className={styles.galleryGrid}>
                <Photocard
                    title="Pianissimo"
                    location="Kharkiv, Ukraine"
                    takenAt="2023-01-01"
                    img1="/images/test1.jpg"
                />
                <Photocard
                    title="Fortissimo"
                    location="Kharkiv, Ukraine"
                    takenAt="2023-02-01"
                    img1="/images/test2.jpg"
                />
                <Photocard
                    title="Fortissimo"
                    location="Kharkiv, Ukraine"
                    takenAt="2020-09-27"
                    img1="/images/test3.jpg"
                />
                <Photocard
                    title="Fortissimo"
                    location="Kharkiv, Ukraine"
                    takenAt="2020-09-27"
                    img1="/images/test4.jpg"
                />
                <Photocard
                    title="Fortissimo"
                    location="Kharkiv, Ukraine"
                    takenAt="2020-09-27"
                    img1="/images/test5.jpg"
                />
                <Photocard
                    title="Fortissimo"
                    location="Kharkiv, Ukraine"
                    takenAt="2020-09-27"
                    img1="/images/test6.jpg"
                />
                <Photocard
                    title="Fortissimo"
                    location="Kharkiv, Ukraine"
                    takenAt="2020-09-27"
                    img1="/images/test7.jpg"
                />
            </div>
        </div>
    );
}
