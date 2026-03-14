"use client";
import { useState } from "react";
import { register } from "@/lib/api";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  async function handleRegister() {
    await register(email, password, name);
  }

  return (
    <div>
      <input
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <input
        placeholder="name"
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={handleRegister}>Register</button>
    </div>
  );
}