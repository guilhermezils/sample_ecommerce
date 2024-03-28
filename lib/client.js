import { SanityClient } from "@sanity/client";
import { ImageUrlBuilder } from "next-sanity-image";
import { imageConfigDefault } from "next/dist/shared/lib/image-config";

export const client = sanityClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: '2024-03-27',
    useCdn: true,
    token: process.env.SANITY_API_TOKEN,
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);


