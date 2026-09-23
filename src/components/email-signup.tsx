//signupform just for emails
//used on the coming-soon page
//integrated with resend

"use client";

import { useState } from "react";
import { subscribeEmail } from "@/lib/actions/subscribe"; //resend API call to add email to the coming soon segment

export default function EmailSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    const result = await subscribeEmail(email);
    setStatus(result.success ? "success" : "error");
    if (result.success) setEmail(""); //clear on success
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-row gap-3 flex-wrap">
        <input
          name="email"
          type="email"
          required
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === "loading"}
          className="px-4 py-3 border-2 border-(--charis-white) rounded-sm"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="button-style"
        >
          {status === "loading" ? "Submitting..." : "Submit"}
        </button>
      </div>

      {status === "success" && (
        <p className="text-sm md:text--md text-white mt-3">
          Thanks, you're on the list!
        </p>
      )}
      {status === "error" && (
        <p className="text-sm md:text--md text-white mt-3">
          Something went wrong, try again.
        </p>
      )}
    </form>
  );
}
