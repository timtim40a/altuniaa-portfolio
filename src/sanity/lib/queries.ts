import { defineQuery } from "next-sanity";

export const ALL_POSTS_QUERY = defineQuery(`
    *[_type == "blogPost"] | order(publishedAt desc) {
        title,
        "slug": slug.current,
        publishedAt,
        coverImage,
        excerpt
    }
`);

export const POST_BY_SLUG_QUERY = defineQuery(`
    *[_type == "blogPost" && slug.current == $slug][0] {
        title,
        "slug": slug.current,
        publishedAt,
        coverImage,
        body
    }
`);

export const ALL_PHOTOS_QUERY = defineQuery(`
    *[_type == "galleryPhoto"] | order(order asc) {
        title,
        image,
        alt,
        caption,
        takenAt
    }
`);
