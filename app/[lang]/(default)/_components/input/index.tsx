"use client";

import { KeyboardEvent, useState } from "react";
import { useParams, useRouter } from "next/navigation";

import { toast } from "sonner";

export default function ({ dict }: { dict: any }) {
  const params = useParams();

  const router = useRouter();
  const [email, setEmail] = useState("");

  const handleSubmit = async () => {
    if (!email) {
      toast.error("please enter your email");
      return;
    }

    try {
      const params = {
        email: email,
      };
      const resp = await fetch("/api/save-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(params),
      });
      const { code, message, data } = await resp.json();
      if (code !== 0) {
        toast.error(message);
        return;
      }
      if (data) {
        toast.success("subscribe ok");
        setEmail("");
      }
    } catch (e) {
      toast.error("subscribe failed");
      console.log("subscribe failed", e);
    }
  };

  const handleInputKeydown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter" && !e.shiftKey) {
      if (e.keyCode !== 229) {
        e.preventDefault();
        handleSubmit();
      }
    }
  };

  return (
    <div className="mx-auto mt-6 flex max-w-md gap-x-4">
      <input
        type="email"
        required
        className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
        placeholder={dict.subscribe.placeholder}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onKeyDown={handleInputKeydown}
      />
      <button
        type="button"
        className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        onClick={handleSubmit}
      >
        {dict.subscribe.button}
      </button>
    </div>
  );
}
