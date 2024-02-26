import Hero from "./_components/hero";
import { Metadata } from "next";
import Videos from "./_components/videos";
import { getDictionary } from "@/services/i18n";
import { getVideos } from "@/models/video";

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  return {
    alternates: {
      canonical: `${process.env.WEB_BASE_URI}/${params.lang}`,
    },
  };
}

export default async function ({ params }: { params: { lang: string } }) {
  const videos = await getVideos(1, 50);
  const dict = await getDictionary(params.lang);

  return (
    <div>
      <Hero dict={dict} />
      <Videos lang={params.lang} videos={videos} />
    </div>
  );
}
