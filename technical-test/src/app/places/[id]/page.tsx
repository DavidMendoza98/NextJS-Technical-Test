"use client";
import Spinner from "@/components/spinner";
import { Place } from "@/types/place.interface";
import { useAuth } from "@/context/auth";
import { use, useEffect, useState } from "react";
import { City } from "@/types/city.interface";
import PlaceCard from "./_components/card";
import { toast } from "sonner";

// The type was defined in the same component file given its exclusive use.
interface Props {
  params: Promise<{ id: string }>;
}
const Places = ({ params }: Props) => {
  // Context
  const { isAuthenticated, token } = useAuth();

  // Params
  const { id } = use(params);
  // States
  const [places, setPlaces] = useState<Place[]>([]);
  const [city, setCity] = useState<City>();
  const [loading, setLoading] = useState(true);
  // Handles
  const fetchPlaces = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/places/city/get/${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const result = await response.json();
      if (result.length > 0) {
        const [_place] = result;
        setCity(_place.city);
      }
      setPlaces(result);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  const fetchLiking = async (id_user: number, id_place: number) => {
    try {
      if (!isAuthenticated) {
        toast.warning("Es necesario inicar sesión para realizar esa acción");
        return;
      }
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/places/like`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            id_user,
            id_place,
          }),
        }
      );
      const result = await response.json();
      if (!response.ok) {
        toast.error(result.message || "Ocurrió un error");
        return;
      }
      toast.success("Like!");
      fetchPlaces();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  const fetchRating = async (
    rating: number,
    id_user: number,
    id_place: number
  ) => {
    try {
      if (!isAuthenticated) {
        toast.warning("Es necesario inicar sesión para realizar esa acción");
        return;
      }
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/places/rating`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            rating,
            id_user,
            id_place,
          }),
        }
      );
      const result = await response.json();
      if (!response.ok) {
        toast.error(result.message || "Ocurrió un error");
        return;
      }
      toast.success("Rating!");
      fetchPlaces();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Effects
  useEffect(() => {
    fetchPlaces();
  }, []);

  if (loading || !places || places.length === 0)
    return <Spinner label="Cargando lugares" />;
  return (
    <>
      <h2 className="text-2xl font-bold text-sky-700 dark:text-white text-center">
        Los lugares más turísticos de {city?.name}
      </h2>
      <hr className="h-0.5 bg-neutral-100 w-1/2 mx-auto" />
      <div className="space-y-12 py-12 px-4 max-w-6xl mx-auto">
        {places.map((place, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-6`}
          >
            <PlaceCard
              place={place}
              onRating={fetchRating}
              onLiking={fetchLiking}
            />
          </div>
        ))}
      </div>
    </>
  );
};
export default Places;
