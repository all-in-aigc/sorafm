import { respData, respErr } from "@/lib/resp";

import { getVideosFromFile } from "@/services/video";
import { insertVideo } from "@/models/video";

export async function POST(req: Request) {
  try {
    const allVideos = await getVideosFromFile();
    const allVideosCount = allVideos.length;

    console.log(`all videos count: ${allVideosCount}`);

    let existCount = 0;
    let newCount = 0;
    let failedCount = 0;
    for (let i = 0; i < allVideosCount; i++) {
      const video = allVideos[i];
      if (!video.uuid || !video.video_url) {
        continue;
      }

      video.user_uuid = process.env.ADMIN_USER_UUID;

      if (video.user_nickname === "OpenAI") {
        // console.log("video exist: ", video.uuid, video.video_url);
        // existCount += 1;
        // continue;
      }

      try {
        // console.log("video", video);
        await insertVideo(video);
        newCount += 1;
        console.log(
          "insert new video: ",
          video.uuid,
          video.video_url,
          i,
          allVideosCount - i
        );
      } catch (e) {
        failedCount += 1;
        console.log("insert video failed: ", video.uuid, video.video_url, i, e);
      }
    }

    return respData({
      all_count: allVideosCount,
      exist_count: existCount,
      new_count: newCount,
      failed_count: failedCount,
    });
  } catch (e) {
    console.log("update videos failed", e);
    return respErr("update videos failed");
  }
}
