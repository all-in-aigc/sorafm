import { Video } from "@/types/video";
import { getSupabaseClient } from "./db";

export async function insertVideo(video: Video) {
  const cli = getSupabaseClient();

  const { data, error } = await cli
    .from("videos")
    .insert({
      user_uuid: video.user_uuid,
      video_description: video.video_description,
      video_url: video.video_url,
      cover_url: video.cover_url,
      post_url: video.post_url,
      user_nickname: video.user_nickname,
      user_avatar_url: video.user_avatar_url,
      created_at: video.created_at,
      uuid: video.uuid,
      status: video.status,
    })
    .select();

  if (error) {
    throw error;
  }

  return data[0];
}

export async function getVideosCount(): Promise<number> {
  const cli = getSupabaseClient();

  const { count, error } = await cli
    .from("videos")
    .select("*", { count: "exact", head: true });

  if (error) {
    throw error;
  }

  return count ?? 0;
}

export async function getUserVideosCount(user_uuid: string): Promise<number> {
  const cli = getSupabaseClient();

  const { count, error } = await cli
    .from("videos")
    .select("*", { count: "exact", head: true })
    .eq("user_uuid", user_uuid);

  if (error) {
    throw error;
  }

  return count ?? 0;
}

export async function findVideoByUuid(
  uuid: string
): Promise<Video | undefined> {
  const cli = getSupabaseClient();

  const { data, error } = await cli
    .from("videos")
    .select("*")
    .eq("uuid", uuid)
    .eq("status", 1)
    .single();

  if (error) {
    throw error;
  }

  if (!data) {
    return undefined;
  }

  const video = formatVideo(data);

  return video;
}

export async function getRandomVideos(
  page: number,
  limit: number
): Promise<Video[]> {
  if (page < 1) {
    page = 1;
  }
  if (limit <= 0) {
    limit = 50;
  }
  const offset = (page - 1) * limit;

  try {
    const cli = getSupabaseClient();

    const { data, error } = await cli
      .from("videos")
      .select("*")
      .eq("status", 1)
      // .order("random()")
      .range(offset, offset + limit - 1);

    if (error) {
      throw error;
    }

    if (!data || data.length === 0) {
      return [];
    }

    const videos = getVideosFromSqlResult(data);

    return videos;
  } catch (error) {
    console.error("Error fetching videos:", error);
    throw error;
  }
}

export async function getLatestVideos(
  page: number,
  limit: number
): Promise<Video[]> {
  if (page < 1) {
    page = 1;
  }
  if (limit <= 0) {
    limit = 50;
  }
  const offset = (page - 1) * limit;

  try {
    const cli = getSupabaseClient();

    const { data, error } = await cli
      .from("videos")
      .select("*")
      .eq("status", 1)
      .order("created_at", { ascending: false })
      .range(offset, offset + limit - 1);

    if (error) {
      throw error;
    }

    if (!data || data.length === 0) {
      return [];
    }

    const videos = getVideosFromSqlResult(data);

    return videos;
  } catch (error) {
    console.error("Error fetching videos:", error);
    throw error;
  }
}

export async function getRecommendedVideos(
  page: number,
  limit: number
): Promise<Video[]> {
  if (page < 1) {
    page = 1;
  }
  if (limit <= 0) {
    limit = 50;
  }
  const offset = (page - 1) * limit;

  try {
    const cli = getSupabaseClient();

    const { data, error } = await cli
      .from("videos")
      .select("*")
      .eq("is_recommended", true)
      .eq("status", 1)
      .order("created_at", { ascending: false })
      .range(offset, offset + limit - 1);

    if (error) {
      throw error;
    }

    if (!data || data.length === 0) {
      return [];
    }

    const videos = getVideosFromSqlResult(data);

    return videos;
  } catch (error) {
    console.error("Error fetching videos:", error);
    throw error;
  }
}

export function getVideosFromSqlResult(res: any[]): Video[] {
  if (!res || res.length === 0) {
    return [];
  }

  const videos: Video[] = [];
  res.forEach((row) => {
    const video = formatVideo(row);
    if (video) {
      videos.push(video);
    }
  });

  return videos;
}

export function formatVideo(row: any): Video | undefined {
  let video: Video = {
    user_uuid: row.user_uuid,
    video_description: row.video_description,
    video_url: row.video_url,
    cover_url: row.cover_url,
    post_url: row.post_url,
    user_nickname: row.user_nickname,
    user_avatar_url: row.user_avatar_url,
    created_at: row.created_at,
    uuid: row.uuid,
    status: row.status,
  };

  return video;
}
