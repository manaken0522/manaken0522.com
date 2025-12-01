export type Post = {
	slug: string;
	title: string;
	date: string;
	excerpt: string;
	content: string;
	tags?: Array<string>;
	preview?: boolean;
};
