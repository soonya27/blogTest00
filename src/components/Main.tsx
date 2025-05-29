import { getPosts } from "@/lib/api/post";
import React from "react";
import ArticlePosts from "./ArticlePosts";
import { Post } from "@/lib/types/type";
import { Grid } from "@mui/material";

export default async function Main() {
  const posts = await getPosts();

  return (
    <div className="min-h-screen bg-gray-100">
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, md: 3 }}>
        {posts.map((post: Post) => (
          <ArticlePosts key={post._id} post={post} />
        ))}
      </Grid>
    </div>
  );
}
