import { getAllPosts } from "@/lib/api";
import Link from "next/link";
import Header from "../_components/header";

export default function Tags() {
	const posts = getAllPosts();
	const tags = posts.map((post) => post.tags).flat();

	return (
		<div>
			<h2 className="mb-6 text-5xl font-bold text-center">Tags</h2>
			<ul className="place-self-center">
				{[...new Set(tags)].map((tag) => (
					<li className="px-4 py-2 m-1 rounded-xl bg-white/8 inline-block">
						<Link href={`/tags/${tag}`}>
							{tag}
							<div className="rounded-full bg-white/16 w-6 h-6 inline-block text-center ml-2">
								{tags.filter((_tag) => _tag === tag).length}
							</div>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
