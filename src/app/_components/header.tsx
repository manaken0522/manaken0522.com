import { SITE_NAME } from "@/lib/constants";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h2>
        <Link
          href="/"
          className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8 flex items-center hover:underline"
        >
          {SITE_NAME}
        </Link>
      </h2>
      <Link className="text-xl md:text-3xl font-bold" href={"/posts/"}>
        Posts
      </Link>
    </div>
  );
};

export default Header;
