"use client";

import { BsBook, BsGithub, BsTwitterX } from "react-icons/bs";

import { FaProductHunt } from "react-icons/fa";
import { SiBuymeacoffee } from "react-icons/si";
import { useParams } from "next/navigation";

export default function () {
  const params = useParams();
  const lang = params.lang as string;

  return (
    <div className="mx-auto flex flex-row items-center">
      <a
        href="https://github.com/all-in-aigc/sorafm?utm_source=sora.fm"
        target="_blank"
        className="mx-3 flex max-w-[24px] flex-col items-center justify-center"
      >
        <BsGithub className="text-lg" />
      </a>
      <a
        href="https://twitter.com/idoubicc?utm_source=sora.fm"
        target="_blank"
        className="mx-3 flex max-w-[24px] flex-col items-center justify-center"
      >
        <BsTwitterX className="text-lg" />
      </a>
      <a
        href="https://www.producthunt.com/posts/sora-ai-video-generator?utm_source=sora.fm"
        target="_blank"
        className="mx-3 hidden md:flex max-w-[24px] flex-col items-center justify-center"
      >
        <FaProductHunt className="text-lg" />
      </a>
      <a
        href="https://www.buymeacoffee.com/idoubi?utm_source=sora.fm"
        target="_blank"
        className="mx-3 hidden md:flex max-w-[24px] flex-col items-center justify-center"
      >
        <SiBuymeacoffee className="text-lg" />
      </a>
      {lang.startsWith("zh") && (
        <a
          href="https://mp.weixin.qq.com/s/4duIpeZkmqlKPa4jrcUdIA?utm_source=sora.fm"
          target="_blank"
          className="mx-3 hidden md:flex max-w-[24px] flex-col items-center justify-center"
        >
          <BsBook className="text-lg" />
        </a>
      )}
    </div>
  );
}
