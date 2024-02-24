import Social from "../social";

export default function () {
  return (
    <section>
      <div className="w-screen flex-col bg-black px-6 py-20 text-white lg:flex lg:px-10 xl:px-24">
        <div className="lg:flex lg:flex-row lg:justify-between">
          <div>
            <a href="https://sora.fm" className="inline-block max-w-full">
              Sora.FM
            </a>
            <p className="font-inter mt-4 max-w-[350px] text-base font-light text-gray-500">
              Sora AI Video Showcases
            </p>
            <div className="mb-8 mt-6 flex flex-row">
              <Social />
            </div>
          </div>
          <div className="flex grow flex-row flex-wrap lg:mx-10 lg:flex-nowrap lg:justify-center">
            <div className="mb-5 mr-8 flex max-w-[200px] grow basis-[100px] flex-col space-y-5 lg:mx-10">
              <div className="font-inter font-medium">INTRODUCTION</div>
              <a
                href="https://openai.com/sora"
                target="_blank"
                className="font-inter font-light text-gray-500"
              >
                What's Sora
              </a>
              <a
                href="https://platform.openai.com/docs/api-reference"
                target="_blank"
                className="font-inter font-light text-gray-500"
              >
                Sora API
              </a>
              <a
                href="https://www.tiktok.com/@openai"
                target="_blank"
                className="font-inter font-light text-gray-500"
              >
                Sora Showcases
              </a>
              <a
                href="https://platform.openai.com/docs/guides/prompt-engineering"
                target="_blank"
                className="font-inter font-light text-gray-500"
              >
                Sora Prompts
              </a>
            </div>
            <div className="mb-5 mr-8 flex max-w-[200px] grow basis-[100px] flex-col space-y-5 lg:mx-10">
              <div className="font-inter font-medium">FRIENDS</div>
              <a
                href="https://gpts.works"
                target="_blank"
                className="font-inter font-light text-gray-500"
              >
                GPTs Works
              </a>
              <a
                href="https://gptalk.one"
                target="_blank"
                className="font-inter font-light text-gray-500"
              >
                GPTalk
              </a>
              <a
                href="https://aiwallpaper.shop"
                target="_blank"
                className="font-inter font-light text-gray-500"
              >
                AI Wallpaper
              </a>
              <a
                href="https://aicover.design"
                target="_blank"
                className="font-inter font-light text-gray-500"
              >
                AI Cover
              </a>
            </div>
            <div className="mb-5 mr-8 flex max-w-[200px] grow basis-[100px] flex-col space-y-5 lg:mx-10">
              <div className="font-inter font-medium">CREDIT TO</div>
              <a
                href="https://sora.fm"
                target="_blank"
                className="font-inter font-light text-gray-500"
              >
                Sora.FM
              </a>
            </div>
          </div>
        </div>
        <div className="mx-auto my-12 w-full border border-gray-800 lg:my-20"></div>
        <div>
          <p className="font-inter lg: text-center text-sm text-gray-500">
            © Copyright 2024.{" "}
            <a href="https://sora.fm" target="_blank" className="text-primary">
              Sora.FM
            </a>{" "}
            All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
