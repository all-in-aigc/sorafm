export interface Video {
  user_uuid?: string;
  video_description: string;
  video_url: string;
  cover_url?: string;
  post_url?: string;
  user_nickname?: string;
  user_avatar_url?: string;
  created_at: string;
  uuid: string;
  status?: number;
}
