import Link from "next/link";
import DateFormatter from "./date-formatter";
import { Post } from "@/interfaces/post";

export function PostPreview({ post }: { post: Post }) {
	return (
		<div>
			<h3 className="text-3xl mb-3 leading-snug">
				<Link href={`/posts/${post.slug}`} className="hover:underline">
					{post.title}
				</Link>
			</h3>
			<div className="text-lg mb-4">
				<DateFormatter dateString={post.date} />
			</div>
			<p className="text-lg leading-relaxed mb-4">{post.excerpt}</p>
		</div>
	);
}
