import { Posts } from "@/app/_components/posts";
import { getPostsByTag } from "@/lib/api";

export default async function Tag(props: Params) {
	const params = await props.params;
	const slug = decodeURI(params.slug);

	const posts = getPostsByTag(slug);

	if (posts.length === 0) {
		return (
			<div>
				<h2 className="mb-6 text-3xl font-bold text-center">
					指定されたタグを付与された記事は見つかりませんでした
				</h2>
			</div>
		);
	}

	return (
		<div>
			<h2 className="mb-6 text-3xl font-bold text-center">
				{slug} タグの記事一覧
			</h2>
			{<Posts start={0} end={32} tag={slug} />}
		</div>
	);
}

type Params = {
	params: Promise<{
		slug: string;
	}>;
};
