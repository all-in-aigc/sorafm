import { respData, respErr } from "@/lib/resp";

import { User } from "@/types/user";
import { genUuid } from "@/lib";
import { saveUser } from "@/services/user";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    if (!email) {
      return respErr("invalid params");
    }
    if (!email.includes("@")) {
      return respErr("invalid email");
    }

    const created_at = new Date().toISOString();
    const user_uuid = genUuid();

    const user: User = {
      email: email,
      nickname: "",
      avatar_url: "",
      created_at: created_at,
      uuid: user_uuid,
    };
    console.log("save user info", user);

    await saveUser(user);

    return respData(user);
  } catch (e) {
    console.log("save user failed", e);
    return respErr("save user failed");
  }
}
