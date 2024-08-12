import { User } from "@/types/user";
import { getNeonSql } from "@/models/db";

export async function insertUser(user: User) {
  const createdAt: string = new Date().toISOString();

  const sql = await getNeonSql();

  const res = await sql`INSERT INTO users 
      (email, nickname, avatar_url, created_at, uuid) 
      VALUES 
      (${user.email}, ${user.nickname}, ${user.avatar_url}, ${createdAt}, ${user.uuid})
  `;

  return res;
}

export async function findUserByEmail(
  email: string
): Promise<User | undefined> {
  const sql = getNeonSql();
  const res = await sql`SELECT * FROM users WHERE email = ${email} LIMIT 1`;

  if (res.length === 0) {
    return undefined;
  }

  const row = res[0];
  const user: User = {
    email: row.email,
    nickname: row.nickname,
    avatar_url: row.avatar_url,
    created_at: row.created_at,
    uuid: row.uuid,
  };

  return user;
}

export async function findUserByUuid(uuid: string): Promise<User | undefined> {
  const sql = getNeonSql();
  const res = await sql`SELECT * FROM users WHERE uuid = ${uuid} LIMIT 1`;

  if (res.length === 0) {
    return undefined;
  }

  const row = res[0];
  const user: User = {
    email: row.email,
    nickname: row.nickname,
    avatar_url: row.avatar_url,
    created_at: row.created_at,
    uuid: row.uuid,
  };

  return user;
}
