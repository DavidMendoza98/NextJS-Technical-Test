"use client";
import { City } from "@/types/city.interface";
import { useRouter } from "next/navigation";
import Image from "next/image";
import CallToActionButton from "@/components/call-to-action-button";
type props = {
  city: City;
  index: number;
};
const CityItem = ({ city, index }: props) => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/places/" + city.id);
  };
  return (
    <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow-lg w-full max-w-sm mx-auto relative pb-5">
      <div className="relative bg-orange-50 rounded-t-xl overflow-hidden mb-4 shadow-inner">
        <Image
          src={city.image_link}
          alt={city.name}
          width={800}
          height={400}
          className="w-full h-48 object-cover rounded-xl"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {/* Número de índice */}
        <div className="absolute bottom-0 left-0 bg-sky-500 font-bold px-2 py-1 rounded-tr-xl w-8 h-8 grid place-items-center font-sans text-medium text-white">
          {index + 1}
        </div>
      </div>
      <div className="mx-4 text-center text-sm font-semibold text-gray-600 dark:text-gray-300">
        <h2 className="text-xl font-bold text-sky-600 dark:text-sky-400">
          {city.name}
        </h2>
      </div>
      <div className="mx-4 flex justify-center gap-2 my-3">
        <span className="bg-sky-200 text-sky-800 text-xs px-3 py-1 rounded-full font-semibold">
          Altitud: {city.altitude} m
        </span>
        <span className="bg-pink-100 text-pink-700 text-xs px-3 py-1 rounded-full font-semibold">
          Lat: {city.latitude}
        </span>
        <span className="bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full font-semibold">
          Lon: {city.longitude}
        </span>
      </div>
      <p className=" mx-4 text-center text-xs text-gray-700 dark:text-gray-300 px-2 leading-relaxed mb-2">
        {city.description}
      </p>
      <CallToActionButton
        label="¿Qué puedo visitar aquí?"
        size="small"
        onClick={handleClick}
      />
    </div>
  );
};
export default CityItem;
