import { createImageUrlBuilder } from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url";
import { client } from "../client";

export type { SanityImageSource };

const builder = createImageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
    return builder.image(source);
}
