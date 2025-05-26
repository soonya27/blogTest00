import { sanityClient } from "../../../sanity.client";

const articlesQuery = `title,
      mainImage{
        asset->{url}
      },
      categories[]->{
        title, 
        description,
        _id,
      },
      publishedAt,
      body[]{
        ...,
        _type == "image" => {
          "imageUrl": asset->url
        }
      }`;
export async function getPosts() {
  return sanityClient.fetch(`
    *[_type == "post"]{
      ${articlesQuery}
    }
  `);
}

export async function getPostsByCategory(categoryId: string) {
  return sanityClient.fetch(
    `
    *[_type == "post" &&$categoryId in categories[]._ref]{
      ${articlesQuery}
    }
  `,
    { categoryId }
  );
}
