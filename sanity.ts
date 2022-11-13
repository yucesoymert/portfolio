import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";

export const config = {
    dataset: process.env.SANITY_DATASET || "production",
    projectId: process.env.SANITY_PROJECT_ID!,
    apiVersion: "2022-11-13",
    useCdn: false,
    /* process.env.NODE_ENV === "production" */
}

//set up client for fetching data in the getProps page functions
export const sanityClient = createClient(config);


export const urlFor = ( source: any ) => createImageUrlBuilder(config).image(source);
 