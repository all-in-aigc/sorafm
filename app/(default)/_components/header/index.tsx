import { Nav } from "@/types/Nav";
import Social from "../social";

export default function () {
  const navigations: Nav[] = [];

  return (
    <header>
      <div className="h-auto w-screen">
        <nav className="font-inter mx-auto h-auto w-full max-w-7xl lg:relative lg:top-0">
          <div className="flex flex-row items-center px-6 py-8 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-8 xl:px-10">
            <a href="/" className="text-xl font-medium flex items-center">
              {/* <img
                src="/logo.png"
                className="w-10 h-10 rounded-full mr-3"
                alt="logo"
              /> */}
              <span className="font-bold text-primary text-2xl">Sora.FM</span>
            </a>

            <div className="hidden md:flex ml-16">
              {navigations.map((tab: Nav, idx: number) => (
                <a
                  key={idx}
                  href={tab.url}
                  className="text-md font-medium leading-6 text-gray-900"
                >
                  {tab.title}
                </a>
              ))}
            </div>

            <div className="flex-1"></div>

            <div className="flex flex-row items-center lg:flex lg:flex-row lg:space-x-3 lg:space-y-0">
              <div className=" md:block mr-4 text-white">
                <Social />
              </div>
            </div>
            <a href="#" className="absolute right-5 lg:hidden"></a>
          </div>
        </nav>
      </div>
    </header>
  );
}
