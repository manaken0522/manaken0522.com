import DateFormatter from "./date-formatter";
import { PostTitle } from "@/app/_components/post-title";

type Props = {
	title: string;
	date: string;
};

export function PostHeader({ title, date }: Props) {
	return (
		<div>
			<PostTitle>{title}</PostTitle>
			<div className="mb-8 md:mb-16 sm:mx-0"></div>
			<div className="max-w-2xl mx-auto">
				<div className="mb-6 text-lg">
					<DateFormatter dateString={date} />
				</div>
			</div>
		</div>
	);
}
