import { Video } from "@/types/video";
import fs from "fs";
import { genUuid } from "@/lib";
import moment from "moment";

export const getVideosFromFile = async (): Promise<Video[]> => {
  try {
    const dataFile = process.env.VIDEOS_DATA_FILE;
    if (!dataFile) {
      return [];
    }

    const data = fs.readFileSync(dataFile, "utf8");
    const jsonData = JSON.parse(data);

    let videos: Video[] = [];
    jsonData.map((v: any) => {
      videos.push({
        uuid: genUuid(),
        video_description: v["prompt"],
        video_url: v["videoLink"],
        cover_url: v["poster"],
        user_nickname: v["sourceName"],
        user_avatar_url: v["sourceLogo"],
        created_at: moment(v["createTime"], "YYYY-MM-DD HH:mm").toISOString(),
        post_url: v["sourceUrl"],
      });
    });

    return videos;
  } catch (err) {
    console.error("Error loading JSON file:", err);
    return [];
  }
};
