"use client";

import { useAuth } from "@/context/auth";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export const Protected = ({ children }: { children: React.ReactNode }) => {
  // Context
  const { isAuthenticated } = useAuth();

  // Router
  const router = useRouter();

  // Effects
  useEffect(() => {
    if (!isAuthenticated) {
      toast.error("Acceso no permitido");
      router.replace("/");
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) return null;

  return <>{children}</>;
};
