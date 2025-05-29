import ArticlePosts from "@/components/ArticlePosts";
import { getPostsByCategory } from "@/lib/api/post";
import { Post } from "@/lib/types/type";

export default async function CategoryPage({ params }: { params: Promise<{ id: string }> }) {
  const posts = await getPostsByCategory((await params).id);
  console.log(posts);
  return (
    <div>
      {posts.map((post: Post) => (
        <ArticlePosts key={post._id} post={post} />
      ))}
    </div>
  );
}
