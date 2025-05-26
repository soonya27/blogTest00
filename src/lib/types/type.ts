import { TypedObject } from "sanity";

export type Post = {
  body: TypedObject[];
  title: string;
  categories?: { _id: string; slug: string; title: string }[];
  publishedAt: string;
  _id: string;
};
