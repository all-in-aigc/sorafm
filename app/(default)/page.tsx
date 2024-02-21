import Hero from "./_components/hero";
import { Metadata } from "next";
import Videos from "./_components/videos";
import { getVideos } from "@/models/video";

export async function generateMetadata(): Promise<Metadata> {
  return {
    alternates: {
      canonical: `${process.env.WEB_BASE_URI}`,
    },
  };
}

export default async function () {
  const videos = await getVideos(1, 50);

  return (
    <div>
      <Hero />
      <Videos videos={videos} />
    </div>
  );
}
