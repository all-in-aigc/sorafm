import { neon } from "@neondatabase/serverless";

export function getNeonSql() {
  const connectionString = process.env.POSTGRES_URL
    ? process.env.POSTGRES_URL + "?sslmode=require"
    : "";

  console.log("db connectionString: ", connectionString);

  const sql = neon(connectionString);

  return sql;
}
