import Container from "@/app/_components/container";
import { getAllPosts } from "@/lib/api";
import Header from "../_components/header";
import { Posts } from "../_components/posts";

export default function PostList() {
  const posts = getAllPosts();

  return (
    <main>
      <Container>
        <Header />
        <h2 className="mb-6 text-5xl font-bold tracking-tighter leading-tight">
          Posts
        </h2>
        <Posts posts={posts}></Posts>
      </Container>
    </main>
  );
}
