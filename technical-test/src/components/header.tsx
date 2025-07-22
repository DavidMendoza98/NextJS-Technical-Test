"use client";
import React from "react";
import { ThemeToggle } from "./theme-toggle";
import { useAuth } from "@/context/auth";
import Link from "next/link";
import Image from "next/image";
import { CircleUserRound } from "lucide-react";

const Header = () => {
  // Context
  const { isAuthenticated, user } = useAuth();

  return (
    <section className="w-full px-10 md:px-20 mb-20">
      <header className="fixed top-0 z-50 w-10/12 md:w-11/12 mx-auto rounded-b-2xl bg-gradient-to-r from-sky-100 via-sky-200 to-sky-100 dark:from-neutral-100 dark:via-neutral-200 dark:to-neutral-100 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <Link href="/" passHref>
            <Image
              width={1920}
              height={1025}
              src="/conoce_honduras_3.webp"
              alt="Logo"
              className="h-10 w-auto"
              priority
            />
          </Link>

          <div className="unset flex items-center justify-center gap-2">
            <ThemeToggle />
            {isAuthenticated ? (
              <Link
                href="/account"
                className="flex items-center justify-center gap-1 bg-transparent text-neutral-800 font-semibold px-4 py-2 rounded-md shadow "
              >
                <CircleUserRound size={20} /> {user?.name}
              </Link>
            ) : (
              <Link
                href="/auth"
                className="inline-block bg-white text-sky-600 font-semibold px-4 py-2 rounded-md shadow hover:bg-gray-100 transition dark:bg-sky-600 dark:text-white dark:hover:bg-sky-700"
              >
                Inicia Sesión
              </Link>
            )}
          </div>
        </div>
      </header>
    </section>
  );
};

export default Header;
