import { QueryResult, QueryResultRow } from "pg";

import { Video } from "@/types/video";
import { getDb } from "./db";

export async function insertVideo(video: Video) {
  const db = getDb();
  const res = await db.query(
    `INSERT INTO videos 
        (user_uuid, video_description, video_url, cover_url, post_url, user_nickname, user_avatar_url, created_at, uuid, status) 
        VALUES 
        ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
    `,
    [
      video.user_uuid,
      video.video_description,
      video.video_url,
      video.cover_url,
      video.post_url,
      video.user_nickname,
      video.user_avatar_url,
      video.created_at,
      video.uuid,
      video.status,
    ]
  );

  return res;
}

export async function getVideosCount(): Promise<number> {
  const db = getDb();
  const res = await db.query(`SELECT count(1) as count FROM videos`);
  if (res.rowCount === 0) {
    return 0;
  }

  const { rows } = res;
  const row = rows[0];

  return row.count;
}

export async function getUserVideosCount(user_uuid: string): Promise<number> {
  const db = getDb();
  const res = await db.query(
    `SELECT count(1) as count FROM videos WHERE user_uuid = $1`,
    [user_uuid]
  );
  if (res.rowCount === 0) {
    return 0;
  }

  const { rows } = res;
  const row = rows[0];

  return row.count;
}

export async function findVideoByUuid(
  uuid: string
): Promise<Video | undefined> {
  const db = getDb();
  const res = await db.query(
    `select w.*, u.uuid as user_uuid, u.email as user_email, u.nickname as user_name, u.avatar_url as user_avatar from videos as w left join users as u on w.user_uuid = u.uuid::VARCHAR where w.uuid = $1 and w.status = 1`,
    [uuid]
  );
  if (res.rowCount === 0) {
    return;
  }

  const video = formatVideo(res.rows[0]);

  return video;
}

export async function getRandomVideos(
  page: number,
  limit: number
): Promise<Video[]> {
  try {
    if (page <= 0) {
      page = 1;
    }
    if (limit <= 0) {
      limit = 50;
    }
    const offset = (page - 1) * limit;
  
    const db = getDb();
    const res = await db.query(
      `select w.*, u.uuid as user_uuid, u.email as user_email, u.nickname as user_name, u.avatar_url as user_avatar from videos as w left join users as u on w.user_uuid = u.uuid::VARCHAR where w.status = 1 order by random() limit $1 offset $2`,
      [limit, offset]
    );
  
    if (res.rowCount === 0) {
      return [];
    }
  
    const videos = getVideosFromSqlResult(res);
  
    return videos;      
  } catch (error) {
    console.log("get random videos error", error);
    return [];
  }
}

export async function getLatestVideos(
  page: number,
  limit: number
): Promise<Video[]> {
  try {
    if (page < 1) {
      page = 1;
    }
    if (limit <= 0) {
      limit = 50;
    }
    const offset = (page - 1) * limit;
  
    const db = getDb();
    const res = await db.query(
      `select w.*, u.uuid as user_uuid, u.email as user_email, u.nickname as user_name, u.avatar_url as user_avatar from videos as w left join users as u on w.user_uuid = u.uuid::VARCHAR where w.status = 1 order by w.created_at desc limit $1 offset $2`,
      [limit, offset]
    );
    if (res.rowCount === 0) {
      return [];
    }
  
    const videos = getVideosFromSqlResult(res);
  
    return videos;  
  } catch (error) {
    console.log("get latest videos error", error);
    return [];
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

  const db = getDb();
  const res = await db.query(
    `select w.*, u.uuid as user_uuid, u.email as user_email, u.nickname as user_name, u.avatar_url as user_avatar from videos as w left join users as u on w.user_uuid = u.uuid::VARCHAR where is_recommended = true and w.status = 1 order by w.created_at desc limit $1 offset $2`,
    [limit, offset]
  );
  if (res.rowCount === 0) {
    return [];
  }

  const videos = getVideosFromSqlResult(res);

  return videos;
}

export function getVideosFromSqlResult(
  res: QueryResult<QueryResultRow>
): Video[] {
  if (!res.rowCount || res.rowCount === 0) {
    return [];
  }

  const videos: Video[] = [];
  const { rows } = res;
  rows.forEach((row) => {
    const video = formatVideo(row);
    if (video) {
      videos.push(video);
    }
  });

  return videos;
}

export function formatVideo(row: QueryResultRow): Video | undefined {
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
