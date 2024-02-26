import { findVideoByUuid, getRandomVideos } from "@/models/video";

import { Metadata } from "next";
import Videos from "../../_components/videos";
import { getDictionary } from "@/services/i18n";

export async function generateMetadata({
  params,
}: {
  params: { lang: string; uuid: string };
}): Promise<Metadata> {
  const dict = await getDictionary(params.lang);

  let description = "";

  if (params.uuid) {
    const video = await findVideoByUuid(params.uuid);
    if (video) {
      description = video.video_description;
    }
  }

  return {
    description: `${description} ${dict.brand.title} | Sora.FM`,
    alternates: {
      canonical: `${process.env.WEB_BASE_URI}/${params.lang}/video/${params.uuid}`,
    },
  };
}

export default async function ({
  params,
}: {
  params: { lang: string; uuid: string };
}) {
  const dict = await getDictionary(params.lang);
  const video = await findVideoByUuid(params.uuid);
  const videos = await getRandomVideos(1, 50);

  return (
    <div className="mx-auto mt-4 max-w-full sm:mt-4 sm:px-0 lg:px-0">
      <div className="relative isolate overflow-hidden bg-gray-900 px-2 py-12 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32">
        <h1 className="mx-auto max-w-4xl text-center text-3xl font-bold tracking-tight text-primary sm:text-6xl">
          {dict.showcase.title}
        </h1>
        <p className="mx-auto mt-2 px-4 max-w-xl text-center text-xl leading-8 text-gray-300">
          {dict.showcase.sub_title}
        </p>

        {video && (
          <div className="relative z-10 mt-8 bg-gray-900 pb-20 sm:mt-16 sm:pb-24 xl:pb-0">
            <div
              className="absolute inset-0 overflow-hidden"
              aria-hidden="true"
            >
              <div className="absolute left-[calc(50%-19rem)] top-[calc(50%-36rem)] transform-gpu blur-3xl">
                <div
                  className="aspect-[1097/1023] w-[68.5625rem] bg-gradient-to-r from-[#ff4694] to-[#776fff] opacity-25"
                  style={{
                    clipPath:
                      "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                  }}
                />
              </div>
            </div>
            <div className="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
              <div className="mt-0 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
                <div className="relative aspect-[2/1] h-full border border-black shadow-lg rounded-xl md:-mx-8 xl:mx-0 xl:aspect-auto flex justify-center">
                  <video
                    className="video w-full cursor-pointer rounded-md"
                    src={video.video_url}
                    poster={video.cover_url}
                    preload="auto"
                    muted
                    loop
                    controls
                    autoPlay
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
              <div className="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24">
                <figure className="relative isolate pt-6 sm:pt-12">
                  <svg
                    viewBox="0 0 162 128"
                    fill="none"
                    aria-hidden="true"
                    className="absolute left-0 top-0 -z-10 h-32 stroke-white/20"
                  >
                    <path
                      id="b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
                      d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
                    />
                    <use href="#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb" x={86} />
                  </svg>
                  <blockquote className="text-md font-semibold leading-8 text-white sm:text-xl sm:leading-9">
                    <p>{video.video_description}</p>
                  </blockquote>
                  <figcaption className="mt-8 text-base flex items-center">
                    <img
                      src={video.user_avatar_url}
                      alt={video.user_nickname}
                      className="w-8 h-8 rounded-full mr-2"
                    />
                    <div className="font-semibold text-white">
                      {video.user_nickname}
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="relative isolate overflow-hidden bg-gray-900 px-2 py-4 shadow-2xl sm:rounded-3xl sm:px-12 xl:py-12">
        <h2 className="mx-auto mt-2 max-w-xl text-center text-xl leading-8 text-gray-300">
          {dict.showcase.more_tip}
        </h2>

        <Videos lang={params.lang} videos={videos} />
      </div>
    </div>
  );
}
