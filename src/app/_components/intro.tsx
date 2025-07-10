import { SITE_NAME } from "@/lib/constants";

export function Intro() {
  return (
    <div>
      <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
          {SITE_NAME}
        </h1>
        <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
          Dolphickのサイトです
        </h4>
      </section>
      <div>
        <div className="text-3xl text-center m-16">Dolphickです</div>
      </div>
    </div>
  );
}
