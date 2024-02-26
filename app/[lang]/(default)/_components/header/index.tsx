import Langswitch from "../langswitch";
import { Nav } from "@/types/nav";
import Social from "../social";

export default function ({ lang, dict }: { lang: string; dict: any }) {
  const navigations: Nav[] = [];

  return (
    <header>
      <div className="h-auto w-screen">
        <nav className="font-inter mx-auto h-auto w-full max-w-7xl lg:relative lg:top-0">
          <div className="flex flex-row items-center px-6 py-8 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-8 xl:px-10">
            <a
              href={`/${lang}/`}
              className="text-xl font-medium flex items-center"
            >
              <span className="font-bold text-primary text-2xl">
                {dict.brand.name}
              </span>
            </a>

            <div className="hidden md:flex ml-16">
              {navigations.map((tab: Nav, idx: number) => (
                <a
                  key={idx}
                  href={tab.url}
                  target={tab.target || "_self"}
                  className="text-md font-medium leading-6 text-slate-300 mr-6"
                >
                  {tab.title}
                </a>
              ))}
            </div>

            <div className="flex-1"></div>

            <div className="flex flex-row items-center lg:flex lg:flex-row lg:space-x-3 lg:space-y-0">
              <div className="md:block mr-4 text-white">
                <Social />
              </div>
              <div>
                <Langswitch />
              </div>
            </div>
            <a href="#" className="absolute right-5 lg:hidden"></a>
          </div>
        </nav>
      </div>
    </header>
  );
}
