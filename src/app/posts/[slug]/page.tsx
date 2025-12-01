import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import markdownStyles from "@/app/_components/markdown-styles.module.css";
import DateFormatter from "@/app/_components/date-formatter";
import Link from "next/link";

export default async function Post(props: Params) {
	const params = await props.params;
	const post = getPostBySlug(params.slug);

	if (!post) {
		return notFound();
	}

	const content = await markdownToHtml(post.content || "");

	let tags = <div></div>;
	if (post.tags) {
		tags = (
			<span className="place-items-center">
				<span className="place-items-centertext-2xl">Tags</span>
				<ul>
					{post.tags.map((tag) => (
						<li className="px-4 py-2 m-1 rounded-xl bg-white/8 inline-block">
							<Link href={`/tags/${tag}`}>{tag}</Link>
						</li>
					))}
				</ul>
			</span>
		);
	}

	return (
		<article className="mb-32">
			<div>
				<h1 className="text-center text-3xl font-bold tracking-tighter leading-tight md:leading-none mb-12">
					{post.title}
				</h1>
				<div className="mb-8 md:mb-16 sm:mx-0"></div>
				<div className="max-w-2xl mx-auto">
					<div className="mb-6 text-lg">
						<DateFormatter dateString={post.date} />
					</div>
				</div>
			</div>
			<div className="max-w-4xl mx-auto">
				<div
					className={markdownStyles["markdown"]}
					dangerouslySetInnerHTML={{ __html: content }}
				/>
			</div>
			<span className="w-full">{tags}</span>
		</article>
	);
}

type Params = {
	params: Promise<{
		slug: string;
	}>;
};

export async function generateMetadata(props: Params): Promise<Metadata> {
	const params = await props.params;
	const post = getPostBySlug(params.slug);

	if (!post) {
		return notFound();
	}

	const title = `${post.title} | manaken0522のサイト`;

	return {
		title,
		openGraph: {
			title,
		},
	};
}

export async function generateStaticParams() {
	const posts = getAllPosts();

	return posts.map((post) => ({
		slug: post.slug,
	}));
}
