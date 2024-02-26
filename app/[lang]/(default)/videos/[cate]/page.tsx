import {
  getLatestVideos,
  getRandomVideos,
  getRecommendedVideos,
} from "@/models/video";

import Hero from "../../_components/hero";
import { Metadata } from "next";
import Tab from "../../_components/tab";
import { Video } from "@/types/video";
import Videos from "../../_components/videos";
import { getDictionary } from "@/services/i18n";

export async function generateMetadata({
  params,
}: {
  params: { lang: string; cate: string };
}): Promise<Metadata> {
  return {
    alternates: {
      canonical: `${process.env.WEB_BASE_URI}/${params.lang}/videos/${params.cate}`,
    },
  };
}

export default async function ({
  params,
}: {
  params: { lang: string; cate: string };
}) {
  const cate = params.cate;
  const page = 1;
  const limit = 50;
  const dict = await getDictionary(params.lang);

  let videos: Video[] = [];
  if (cate === "featured") {
    videos = await getRecommendedVideos(page, limit);
  } else if (cate === "random") {
    videos = await getRandomVideos(page, limit);
  } else {
    videos = await getLatestVideos(page, limit);
  }

  return (
    <div>
      <Hero dict={dict} />
      <Tab lang={params.lang} dict={dict} cate={params.cate} />
      <Videos lang={params.lang} videos={videos} />
    </div>
  );
}
