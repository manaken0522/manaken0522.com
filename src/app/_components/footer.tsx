import Container from "@/app/_components/container";
import { SITE_NAME } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-white/5 border-t border-white/50">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            {SITE_NAME}
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a href={"/"} className="mx-3 font-bold hover:underline">
              Home
            </a>
            <a href={"/posts/"} className="mx-3 font-bold hover:underline">
              Posts
            </a>
          </div>
        </div>
        <div className="text-center p-4">
          アクセス分析にGoatCounterを使用しています。
          <br />© 2025 Dolphick
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
