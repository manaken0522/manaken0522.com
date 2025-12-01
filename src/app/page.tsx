import Link from "next/link";
import { Posts } from "./_components/posts";

export default function Index() {
	return (
		<div>
			<div className="text-center">
				<div className="text-2xl m-16">manaken0522です</div>
			</div>
			<div>
				<h2 className="text-center mb-8 text-4xl font-bold">Posts</h2>
				<Posts start={0} end={4}></Posts>
			</div>
		</div>
	);
}
