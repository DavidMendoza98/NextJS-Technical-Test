"use client";
import { useState } from "react";
import { authScreenMode } from "@/types/auth_screen_mode.interface";
import AuthToggle from "./_components/toggle";
import LoginForm from "./_components/login";
import RegisterForm from "./_components/register";
export default function Page() {
  const [mode, setMode] = useState<authScreenMode>("login");
  const handleModeToggle = (mode: authScreenMode) => {
    setMode(mode);
  };
  return (
    <>
      <AuthToggle mode={mode} onChange={handleModeToggle} />
      {mode === "login" ? <LoginForm /> : <RegisterForm />}
    </>
  );
}
