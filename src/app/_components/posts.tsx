import { getAllPosts, getPostsByTag } from "@/lib/api";
import { PostPreview } from "./post-preview";

export function Posts({
	start,
	end,
	tag,
}: {
	start: number;
	end: number;
	tag?: string;
}) {
	let posts;
	if (tag === undefined) {
		posts = getAllPosts();
	} else {
		posts = getPostsByTag(tag);
	}

	return (
		<div className="place-items-center">
			<div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
				{posts.slice(start, end).map((post) => (
					<PostPreview post={post} />
				))}
			</div>
		</div>
	);
}
