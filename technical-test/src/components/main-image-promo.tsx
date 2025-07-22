"use client";

import Image from "next/image";
import Link from "next/link";
import CallToActionButton from "./call-to-action-button";
const MainImagePromotional = () => {
  return (
    <>
      <section className="relative w-full h-fit">
        <div
          className="relative h-[60vh] w-full bg-cover bg-center -translate-y-20 after:absolute after:bottom-0 after:left-0 after:w-full after:h-32 after:bg-gradient-to-b after:from-transparent after:to-white dark:after:to-gray-900"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1581697003127-559f6359486d?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        >
          <div className="absolute bottom-6 w-full flex justify-center -translate-y-10">
            <div className="h-64 w-auto relative">
              <Image
                src="/conoce_honduras_2.webp"
                alt="Logo"
                width={14337}
                height={7658}
                className="h-48 md:h-64 w-auto object-contain drop-shadow-xl"
                priority
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 w-full">
          <Link href="/cities" passHref>
            <CallToActionButton label="Conoce sus ciudades" />
          </Link>
        </div>
      </section>
    </>
  );
};
export default MainImagePromotional;
