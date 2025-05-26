import ArticlePosts from "@/components/ArticlePosts";
import { getPostsByCategory } from "@/lib/api/post";

export default async function CategoryPage({ params: { id } }) {
  // const [posts, setPosts] = useState([]);
  console.log(id);
  const posts = await getPostsByCategory(id);
  console.log(posts);

  return (
    <div>
      {posts.map((post) => (
        <>
          <ArticlePosts key={post._id} post={post} />
        </>
      ))}
    </div>
  );
}
