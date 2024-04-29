import { sanityClient } from "@sanity/client";
import { ImageUrlBuilder } from "@sanity/image-url";


export const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2024-03-27",
  useCdn: true,
  token: process.env.NEXT_SANITY_TOKEN,
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);


