import { getAllPosts } from "@/lib/api";
import Header from "../_components/header";
import { Posts } from "../_components/posts";

export default function PostList() {
	const posts = getAllPosts();

	return (
		<main>
			<h2 className="text-center mb-6 text-5xl font-bold">Posts</h2>
			<div className="text-center m-4">やったことを書きます</div>
			<Posts start={0} end={32}></Posts>
		</main>
	);
}
