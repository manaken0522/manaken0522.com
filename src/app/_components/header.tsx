import Link from "next/link";

export default function Header() {
	return (
		<div className="flex justify-evenly items-center">
			<h2>
				<Link
					href="/"
					className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8 flex items-center hover:underline"
				>
					manaken0522のサイト
				</Link>
			</h2>
			<div className="justify-center">
				<Link className="text-xl md:text-3xl font-bold mx-2" href={"/"}>
					Home
				</Link>
				<Link
					className="text-xl md:text-3xl font-bold mx-2"
					href={"/posts/"}
				>
					Posts
				</Link>
			</div>
		</div>
	);
}
