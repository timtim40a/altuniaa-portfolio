"use client";

import { useState, useEffect } from "react";
import { urlFor, type SanityImageSource } from "@/sanity/lib/image";

type Photo = {
    title: string | null;
    image: SanityImageSource;
    alt: string | null;
    location: string | null;
    takenAt: string | null;
};

type Props = {
    photos: Photo[];
    photoClassName?: string;
};

export default function RandomPhotos({ photos, photoClassName }: Props) {
    const [randomPhotos, setRandomPhotos] = useState<Photo[]>([]);

    useEffect(() => {
        setRandomPhotos([...photos].sort(() => Math.random() - 0.5).slice(0, 3));
    }, [photos]);

    return (
        <>
            {randomPhotos.map((photo, i) => (
                <img
                    key={i}
                    src={urlFor(photo.image).width(600).url()}
                    alt={photo.alt ?? photo.title ?? "Photo"}
                    className={photoClassName}
                />
            ))}
        </>
    );
}
