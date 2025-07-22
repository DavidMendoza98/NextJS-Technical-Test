"use client";
import Link from "next/link";
import Image from "next/image";
import CallToActionButton from "./call-to-action-button";
import { PLACES } from "@/constants/home_places";

const Info = () => {
  return (
    <>
      <section className=" py-16 px-4 text-center">
        <h1 className="text-3xl font-bold text-sky-600 dark:text-white mb-4">
          ¿Por qué conocer Honduras?
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-700 dark:text-white">
          Desde playas paradisíacas hasta tesoros mayas escondidos entre la
          selva, Honduras es un país lleno de magia, historia y aventura. Con
          arrecifes de coral espectaculares, ruinas milenarias y la calidez
          única de su gente, Honduras te espera para vivir experiencias
          inolvidables.
        </p>
        <div className="space-y-12 py-12 px-4 max-w-6xl mx-auto">
          {PLACES.map((place, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row ${
                !place.imageLeft ? "md:flex-row-reverse" : ""
              } items-center gap-6`}
            >
              <Image
                width={800}
                height={400}
                src={place.image}
                alt={place.title}
                className="w-full md:w-1/2 h-64 object-cover rounded-xl shadow-md"
              />
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold text-sky-700 dark:text-white">
                  {place.title}
                </h3>
                <p className="mt-2 text-gray-700 dark:text-white">
                  {place.description}
                </p>
                <p className="mt-4 text-sm text-gray-500 dark:text-neutral-100 italic">
                  {place.author}
                </p>
              </div>
            </div>
          ))}
        </div>
        <p className="max-w-2xl mx-auto text-lg text-gray-700 dark:text-white">
          Y mucho, mucho más...
        </p>
      </section>
      <Link href="/cities" passHref className="-translate-y-12 mb-10">
        <CallToActionButton label="Conoce todo lo que Honduras puede ofrecer" />
      </Link>
    </>
  );
};
export default Info;
