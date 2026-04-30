"use client";

import { useState } from "react";
import { Translations } from "@/app/i18n/translations";

type Props = {
  dark?: boolean;
  t: Translations['emailForm'];
};

export default function EmailForm({ dark = false, t }: Props) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <p className={`font-medium text-lg ${dark ? "text-white" : "text-primary"}`}>
        {t.success}
      </p>
    );
  }

  return (
    <div className="w-full max-w-md mx-auto lg:mx-0">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t.placeholder}
          required
          className={`flex-1 px-4 py-3 rounded-lg border text-primaryText placeholder:text-mutedText focus:outline-none focus:ring-2 focus:ring-primary ${
            dark ? "bg-white/90 border-transparent" : "bg-white border-borderLight"
          }`}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className={`px-6 py-3 rounded-lg font-medium transition disabled:opacity-60 whitespace-nowrap cursor-pointer ${
            dark
              ? "bg-white text-primary hover:bg-primaryLight"
              : "bg-primary text-white hover:bg-hoverGreen"
          }`}
        >
          {status === "loading" ? t.loading : t.button}
        </button>
      </form>
      {status === "error" && (
        <p className={`text-sm mt-2 ${dark ? "text-white/80" : "text-red-500"}`}>
          {t.error}
        </p>
      )}
    </div>
  );
}
