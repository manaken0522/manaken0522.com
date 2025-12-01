import Container from "@/app/_components/container";
import { getAllPosts } from "@/lib/api";
import Link from "next/link";
import { Posts } from "./_components/posts";

export default function Index() {
	const posts = getAllPosts();

	return (
		<main>
			<Container>
				<div>
					<div>
						<div className="text-2xl text-center m-16">
							manaken0522です
						</div>
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
