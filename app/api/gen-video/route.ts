import { respData, respErr } from "@/lib/resp";

import { getRandomVideos } from "@/models/video";

export async function POST(req: Request) {
  try {
    const { description } = await req.json();
    if (!description) {
      return respErr("invalid params");
    }

    // todo: call openai sora api to generate video

    const videos = await getRandomVideos(1, 1);
    if (videos.length === 0) {
      return respErr("gen video failed");
    }

    return respData(videos[0]);
  } catch (e) {
    console.log("gen video failed:", e);
    return respErr("gen video failed");
  }
}
