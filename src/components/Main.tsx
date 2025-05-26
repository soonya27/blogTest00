import { getPosts } from "@/lib/api/post";
import React from "react";
import ArticlePosts from "./ArticlePosts";

export default async function Main() {
  const posts = await getPosts();

  return (
    <div className="min-h-screen bg-gray-100">
      {/* 헤더 */}
      <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">My Blog</h1>
      </header>

      {/* 메인 콘텐츠 */}
      <main className="max-w-4xl mx-auto mt-8">
        {/* 블로그 이미지 */}
        <div className="relative w-full h-64 bg-cover bg-center rounded-lg shadow-lg" style={{}}>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h2 className="text-white text-3xl font-bold">Welcome to My Blog</h2>
          </div>
        </div>

        {/* 게시글 목록 */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <>
              <ArticlePosts key={post._id} post={post} />
            </>
          ))}
        </div>
      </main>
    </div>
  );
}
