import Social from "../social";

export default function ({ lang, dict }: { lang: string; dict: any }) {
  return (
    <section>
      <div className="w-screen flex-col bg-black px-6 py-20 text-white lg:flex lg:px-10 xl:px-24">
        <div className="lg:flex lg:flex-row lg:justify-between">
          <div>
            <a href="https://sora.trys.ai" className="inline-block max-w-full">
              Sora.FM
            </a>
            <p className="font-inter mt-4 max-w-[350px] text-base font-light text-gray-500">
              {dict.brand.title}
            </p>
            <div className="mb-8 mt-6 flex flex-row">
              <Social />
            </div>
          </div>
          <div className="flex grow flex-row flex-wrap lg:mx-10 lg:flex-nowrap lg:justify-center">
            <div className="mb-5 mr-8 flex max-w-[200px] grow basis-[100px] flex-col space-y-5 lg:mx-10">
              <div className="font-inter font-medium">INTRODUCTION</div>
              <a
                href="https://openai.com/sora?utm_source=sora.fm"
                target="_blank"
                className="font-inter font-light text-gray-500"
              >
                What's Sora
              </a>
              <a
                href="https://openai.com/research/video-generation-models-as-world-simulators?utm_source=sora.fm"
                target="_blank"
                className="font-inter font-light text-gray-500"
              >
                Sora technical report
              </a>
              <a
                href="https://platform.openai.com/docs/api-reference?utm_source=sora.fm"
                target="_blank"
                className="font-inter font-light text-gray-500"
              >
                Sora API
              </a>
              <a
                href="https://www.tiktok.com/@openai?utm_source=sora.fm"
                target="_blank"
                className="font-inter font-light text-gray-500"
              >
                Sora Showcases
              </a>
              <a
                href="https://platform.openai.com/docs/guides/prompt-engineering?utm_source=sora.fm"
                target="_blank"
                className="font-inter font-light text-gray-500"
              >
                Sora Prompts
              </a>
            </div>
            <div className="mb-5 mr-8 flex max-w-[200px] grow basis-[100px] flex-col space-y-5 lg:mx-10">
              <div className="font-inter font-medium">FRIENDS</div>
              <a
                href="https://gpts.works?utm_source=sora.fm"
                target="_blank"
                className="font-inter font-light text-gray-500"
              >
                GPTs Works
              </a>
              <a
                href="https://gptalk.one?utm_source=sora.fm"
                target="_blank"
                className="font-inter font-light text-gray-500"
              >
                GPTalk
              </a>
              <a
                href="https://aiwallpaper.shop?utm_source=sora.fm"
                target="_blank"
                className="font-inter font-light text-gray-500"
              >
                AI Wallpaper
              </a>
              <a
                href="https://aicover.design?utm_source=sora.fm"
                target="_blank"
                className="font-inter font-light text-gray-500"
              >
                AI Cover
              </a>
              <a
                href="https://readknown.cn?utm_source=sora.fm"
                target="_blank"
                className="font-inter font-light text-gray-500"
              >
                ReadKnown
              </a>
            </div>
            <div className="mb-5 mr-8 flex max-w-[200px] grow basis-[100px] flex-col space-y-5 lg:mx-10">
              <div className="font-inter font-medium">CREDIT TO</div>
              <a
                href="https://sora.trys.ai"
                target="_blank"
                className="font-inter font-light text-gray-500"
              >
                Sora.FM
              </a>
              <a
                href="https://www.stablevideo.com?utm_source=sora.fm"
                target="_blank"
                className="font-inter font-light text-gray-500"
              >
                Stable Video
              </a>
              <a
                href="https://pika.art?utm_source=sora.fm"
                target="_blank"
                className="font-inter font-light text-gray-500"
              >
                Pika
              </a>
              <a
                href="https://runwayml.com/ai-tools/gen-2?utm_source=sora.fm"
                target="_blank"
                className="font-inter font-light text-gray-500"
              >
                Gen-2
              </a>
            </div>
            {lang.startsWith("zh") && (
              <div className="mt-10 flex flex-col lg:mt-0">
                <div className="mb-4 flex flex-col items-center">
                  <p className="font-inter font-medium text-black"></p>
                  <p className="font-inter ml-4 text-black">
                    <img
                      src={
                        "https://zknown-1251007641.cos.ap-guangzhou.myqcloud.com/images/20240105113843.png"
                      }
                      alt="qrcode"
                      width={"250"}
                      height={"400"}
                      className="rounded-md"
                    />
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="mx-auto my-12 w-full border border-gray-800 lg:my-20"></div>
        <div>
          <p className="font-inter lg: text-center text-sm text-gray-500">
            © Copyright 2024.{" "}
            <a
              href="https://sora.trys.ai"
              target="_blank"
              className="text-primary"
            >
              Sora.FM
            </a>{" "}
            All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
