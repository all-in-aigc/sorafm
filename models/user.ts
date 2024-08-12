import { User } from "@/types/user";
import { getSupabaseClient } from "@/models/db";

export async function insertUser(user: User) {
  const createdAt: string = new Date().toISOString();

  const cli = getSupabaseClient();

  const { data, error } = await cli
    .from("users")
    .insert({
      email: user.email,
      nickname: user.nickname,
      avatar_url: user.avatar_url,
      created_at: createdAt,
      uuid: user.uuid,
    })
    .select();

  if (error) {
    throw error;
  }

  return data[0];
}

export async function findUserByEmail(
  email: string
): Promise<User | undefined> {
  const cli = getSupabaseClient();

  const { data, error } = await cli
    .from("users")
    .select("email, nickname, avatar_url, created_at, uuid")
    .eq("email", email)
    .single();

  if (error) {
    if (error.code === "PGRST116") {
      return undefined;
    }

    throw error;
  }

  if (!data) {
    return undefined;
  }

  return formatUser(data);
}

export async function findUserByUuid(uuid: string): Promise<User | undefined> {
  const cli = getSupabaseClient();

  const { data, error } = await cli
    .from("users")
    .select("email, nickname, avatar_url, created_at, uuid")
    .eq("uuid", uuid)
    .single();

  if (error) {
    if (error.code === "PGRST116") {
      return undefined;
    }

    throw error;
  }

  if (!data) {
    return undefined;
  }
}

export function formatUser(row: any): User {
  const user: User = {
    email: row.email,
    nickname: row.nickname,
    avatar_url: row.avatar_url,
    created_at: row.created_at,
    uuid: row.uuid,
  };

  return user;
}
