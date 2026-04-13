"use client";

import { useMemo } from "react";
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
    className?: string;
    photoClassName?: string;
};

export default function RandomPhotos({ photos, className, photoClassName }: Props) {
    const randomPhotos = useMemo(
        () => [...photos].sort(() => Math.random() - 0.5).slice(0, 3),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [],
    );

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
