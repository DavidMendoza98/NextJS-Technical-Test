"use client";
import Spinner from "../../components/spinner";
import { useCities } from "@/hooks/useCities";
import CityItem from "./_components/city_item";

export default function Cities() {
  // Custom Hooks for the get API data
  const { cities, loading } = useCities();

  if (loading) return <Spinner label="Obteniendo datos" />;
  return (
    <main className="flex flex-col gap-2 items-center justify-start my-5">
      <div className="flex flex-col flex-nowrap md:flex-row md:flex-wrap gap-2 items-center justify-center h-fit">
        {cities.map((city, index) => (
          <div key={index}>
            <CityItem city={city} index={index} />
          </div>
        ))}
      </div>
    </main>
  );
}
