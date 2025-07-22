"use client";
import MainImagePromotional from "../components/main-image-promo";
import Info from "../components/info";
export default function Home() {
  return (
    <main className="flex flex-col gap-2 items-center justify-start">
      <MainImagePromotional />
      <Info />
    </main>
  );
}
