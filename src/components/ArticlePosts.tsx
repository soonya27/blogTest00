import { Post } from "@/lib/types/type";
import { Grid, ImageListItem } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ArticlePosts({ post }: { post: Post }) {
  console.log(post);
  return (
    <>
      {/* 카테고리 표시 */}
      {/* <div className="mt-4 flex flex-wrap gap-2">
        {post.categories &&
          post.categories.map((category) => (
            <Link href={`/category/${category._id}`} key={category.slug}>
              <span key={category.title} className="bg-blue-500 text-white px-3 py-1 rounded-md">
                {category.title}
              </span>
            </Link>
          ))}
      </div>
      <PortableText
        key={post.title}
        value={post.body}
        components={{
          types: {
            image: ({ value }) => <img src={value.imageUrl} alt="블로그 이미지" className="rounded-lg shadow-md" />,
          },
        }}
      />
      <small className="text-gray-500">{new Date(post.publishedAt).toLocaleDateString()}</small> */}
      {post.mainImage && (
        <Grid key={post._id} size={{ sm: 3, md: 1, xl: 3 }}>
          <img
            srcSet={`${post.mainImage?.asset.url}`} //
            src={`${post.mainImage?.asset.url}`}
            alt={post.title}
            loading="lazy"
          />
        </Grid>
      )}
    </>
  );
}
