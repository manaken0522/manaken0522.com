import { getAllPosts } from "@/lib/api";
import { PostPreview } from "./post-preview";

export function Posts({ start, end }: { start: number; end: number }) {
	const posts = getAllPosts();
	return (
		<div className="place-items-center">
			<div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
				{posts.slice(start, end).map((post) => (
					<PostPreview
						key={post.slug}
						title={post.title}
						date={post.date}
						slug={post.slug}
						excerpt={post.excerpt}
					/>
				))}
			</div>
		</div>
	);
}
