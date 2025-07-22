"use client";
import Link from "next/link";
import CallToActionButton from "./call-to-action-button";
const Info = () => {
  const places = [
    {
      image:
        "https://images.unsplash.com/photo-1599807427405-945924b4bf21?q=80&w=2232&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Cayos Cochinos, Honduras",
      description:
        "Cayos Cochinos, uno de los destinos más visitados de Honduras, ofrece aguas cristalinas y una rica vida marina en el Caribe.",
      author: "Foto por Zaca Photo (Unsplash)",
      imageLeft: true,
    },
    {
      image:
        "https://images.unsplash.com/photo-1591551964013-ccb7ad4be540?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Ruinas de Copán",
      description:
        "Las ruinas mayas de Copán son Patrimonio de la Humanidad, famosas por sus esculturas y jeroglíficos.",
      author: "Foto por Donal Caliz (Unsplash)",
      imageLeft: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1593585404954-6b5cf47a5735?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Cataratas de Pulhapanzak",
      description:
        "Ubicadas en el norte de Honduras, las Cataratas de Pulhapanzak ofrecen una experiencia inolvidable entre naturaleza, aventura y cultura. Puedes nadar, hacer canopy, explorar cuevas y disfrutar de un entorno impresionante.",
      author: "Foto por Alex McCarthy (Unsplash)",
      imageLeft: true,
    },
  ];
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
          {places.map((place, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row ${
                !place.imageLeft ? "md:flex-row-reverse" : ""
              } items-center gap-6`}
            >
              <img
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
