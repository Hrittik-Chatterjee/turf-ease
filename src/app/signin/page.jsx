// app/signin/page.jsx
"use client";

import { doCredentialLogin } from "@/app/actions";

import { useState } from "react";
import { useRouter } from "next/navigation";
import SocialLogin from "../components/SocialLogin";

export default function SignIn() {
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);

      const response = await doCredentialLogin(formData);

      if (!!response.error) {
        console.error(response.error);
        setError(response.error.message);
      } else {
        router.push("/success");
      }
    } catch (e) {
      console.error(e);
      setError("Check your Credentials");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl mb-6">Sign In</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-1">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border rounded p-2"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded"
        >
          Sign In
        </button>
      </form>
      <SocialLogin />
    </div>
  );
}
