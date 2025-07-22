"use client";

import { useAuth } from "@/context/auth";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export const Protected = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      toast.error("Acceso no permitido");
      router.replace("/");
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) return null;

  return <>{children}</>;
};
