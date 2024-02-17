import { Video } from "@/types/Video";
import Videos from "./_components/videos";

export default function () {
  const created_at = new Date().toISOString();
  const videos: Video[] = [
    {
      description:
        "A stylish woman walks down a Tokyo street filled with warm glowing neon and animated city signage. She wears a black leather jacket, a long red dress, and black boots, and carries a black purse. She wears sunglasses and red lipstick. She walks confidently and casually. The street is damp and reflective, creating a mirror effect of the colorful lights. Many pedestrians walk about.",
      cover_url:
        "https://i.vimeocdn.com/video/1799094276-64cc14bbbab00f4163e8a39475a2f2025a4b0164478b440d6075848a80ae56b0-d?mw=2200&mh=1237&q=70",
      video_url: "https://cdn.openai.com/sora/videos/tokyo-walk.mp4",
      created_at: created_at,
    },
    {
      description:
        "Several giant wooly mammoths approach treading through a snowy meadow, their long wooly fur lightly blows in the wind as they walk, snow covered trees and dramatic snow capped mountains in the distance, mid afternoon light with wispy clouds and a sun high in the distance creates a warm glow, the low camera view is stunning capturing the large furry mammal with beautiful photography, depth of field.",
      cover_url:
        "https://i.vimeocdn.com/video/1798774807-b42ae74f1a598441157d652a619d1695e5781352385bda7dc5ce0ca9762bbfa2-d?mw=1900&mh=1069&q=70",
      video_url: "https://cdn.openai.com/sora/videos/wooly-mammoth.mp4",
      created_at: created_at,
    },
  ];

  return (
    <div>
      <Videos videos={videos} />
    </div>
  );
}
