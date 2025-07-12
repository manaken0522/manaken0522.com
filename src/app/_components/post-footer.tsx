import Link from "next/link";

type Props = {
  tags?: Array<string>;
};

export function PostFooter({ tags }: Props) {
  if (tags) {
    return (
      <div>
        <span className="text-2xl">Tags</span>
        <ul>
          {tags.map((tag) => (
            <li className="px-4 py-2 m-1 rounded-xl bg-white/8 inline-block">
              <Link href={`/tags/${tag}`}>{tag}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  } else {
    return <div></div>;
  }
}
