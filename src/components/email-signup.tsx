//signupform just for emails
//used on the coming-soon page
//integrated with resend

"use client";

import { useState } from "react";

export default function EmailSignup() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail(""); // clear the input field after submission
    console.log(email);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 flex-wrap">
      <input
        name="email"
        type="email"
        required
        placeholder="your@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="px-4 py-3 border-2 border-(--charis-white) rounded-sm"
      />
      <button
        type="submit"
        className="px-5 py-3 border-2 border-(--charis-white) rounded-sm cursor-pointer hover:bg-(--charis-accent-green) hover:text-(--charis-green-2) hover:scale-105 transition-[transform,background-color] ease-in-out duration-300"
      >
        Submit
      </button>
    </form>
  );
}
