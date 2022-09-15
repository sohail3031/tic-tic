import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "t484z6dp",
  dataset: "production",
  apiVersion: "2022-09-12",
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
