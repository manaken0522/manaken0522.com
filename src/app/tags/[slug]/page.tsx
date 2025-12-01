import Container from "@/app/_components/container";
import Header from "@/app/_components/header";
import { Posts } from "@/app/_components/posts";
import { getPostsByTag } from "@/lib/api";

export default async function Tag(props: Params) {
	const params = await props.params;
	const slug = decodeURI(params.slug);

	const posts = getPostsByTag(slug);

	if (posts.length === 0) {
		return (
			<main>
				<Container>
					<Header />
					<h2 className="mb-6 text-5xl md:text-5xl font-bold tracking-tighter leading-tight">
						指定されたタグを付与された記事は見つかりませんでした
					</h2>
				</Container>
			</main>
		);
	}

	return (
		<main>
			<Container>
				<Header />
				<h2 className="mb-6 text-5xl md:text-5xl font-bold tracking-tighter leading-tight">
					{slug} タグの記事一覧
				</h2>
				{<Posts posts={posts} />}
			</Container>
		</main>
	);
}

type Params = {
	params: Promise<{
		slug: string;
	}>;
};
