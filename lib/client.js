// to hook sanity into the project

import { createClient } from "@sanity/client";

import imageUrlBuilder from "@sanity/image-url";

//import sanityClient from "@sanity/client"; is DEPRECATED

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2024-03-27",
  useCdn: true,
  token: process.env.NEXT_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
