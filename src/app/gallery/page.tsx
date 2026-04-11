import { ALL_PHOTOS_QUERY } from "@/sanity/lib/queries";
import Photocard, { PhotocardProps } from "../_components/photocard/photocard";
import styles from "./gallery.module.css";
import { client } from "@/sanity/client";

export default async function Gallery() {
    const photos: PhotocardProps[] = await client.fetch(ALL_PHOTOS_QUERY);

    return (
        <div className={styles.container}>
            <h1>Gallery</h1>
            <div className={styles.galleryGrid}>
                {photos.map((photo) => (
                    <Photocard key={photo.title} {...photo} />
                ))}
                {/* <Photocard
                    title="Pianissimo"
                    location="Kharkiv, Ukraine"
                    takenAt="2023-01-01"
                    image="/images/test1.jpg"
                />
                <Photocard
                    title="Fortissimo"
                    location="Kharkiv, Ukraine"
                    takenAt="2023-02-01"
                    image="/images/test2.jpg"
                />
                <Photocard
                    title="Fortissimo"
                    location="Kharkiv, Ukraine"
                    takenAt="2020-09-27"
                    image="/images/test3.jpg"
                />
                <Photocard
                    title="Fortissimo"
                    location="Kharkiv, Ukraine"
                    takenAt="2020-09-27"
                    image="/images/test4.jpg"
                />
                <Photocard
                    title="Fortissimo"
                    location="Kharkiv, Ukraine"
                    takenAt="2020-09-27"
                    image="/images/test5.jpg"
                />
                <Photocard
                    title="Fortissimo"
                    location="Kharkiv, Ukraine"
                    takenAt="2020-09-27"
                    image="/images/test6.jpg"
                />
                <Photocard
                    title="Fortissimo"
                    location="Kharkiv, Ukraine"
                    takenAt="2020-09-27"
                    image="/images/test7.jpg"
                /> */}
            </div>
        </div>
    );
}
