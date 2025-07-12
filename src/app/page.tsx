import Container from "@/app/_components/container";
import { getAllPosts } from "@/lib/api";
import { SITE_NAME } from "@/lib/constants";
import Link from "next/link";
import { Posts } from "./_components/posts";

export default function Index() {
  const posts = getAllPosts();

  return (
    <main>
      <Container>
        <div>
          <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
              {SITE_NAME}
            </h1>
            <Link className="text-4xl font-bold" href={"/blog/"}>
              Blog
            </Link>
          </section>
          <div>
            <div className="text-3xl text-center m-16">Dolphickです</div>
          </div>
        </div>
        <h2 className="mb-6 text-5xl font-bold tracking-tighter leading-tight">
          Posts
        </h2>
        <Posts posts={posts}></Posts>
        <Link
          className="mb-6 text-4xl font-bold tracking-tighter leading-tight"
          href={"/blog"}
        ></Link>
      </Container>
    </main>
  );
}
