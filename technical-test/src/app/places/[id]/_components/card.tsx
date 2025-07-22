"use client";

import { Place } from "@/types/place.interface";
import { useAuth } from "@/context/auth";
import { toast } from "sonner";
import Image from "next/image";
import Rating from "@/components/rating";
import { Heart } from "lucide-react";

// The type was defined in the same component file given its exclusive use.
type props = {
  place: Place;
  onRating: (rating: number, id_user: number, id_place: number) => void;
  onLiking: (id_user: number, id_place: number) => void;
};

const PlaceCard = ({ place, onRating, onLiking }: props) => {
  // Context
  const { isAuthenticated, user } = useAuth();

  // Calculated variables
  let rating = 0;
  let like = false;
  if (isAuthenticated) {
    const [rating_item] = place.ratings.filter(
      (rating) => rating.id_user === user?.id
    );
    like = place.likes.some((like) => like.id_user === user?.id);
    if (rating_item) rating = rating_item.rating || 0;
  }
  // Handles
  const handleOnRating = (rating: number) => {
    if (!isAuthenticated || !user) {
      toast.warning("Es necesario inicar sesión para realizar esa acción");
      return;
    }
    onRating(rating, user.id, place.id);
  };
  const handleOnLinking = () => {
    if (!isAuthenticated || !user) {
      toast.warning("Es necesario inicar sesión para realizar esa acción");
      return;
    }
    onLiking(user.id, place.id);
  };

  return (
    <>
      <Image
        width={800}
        height={400}
        src={place.image_url}
        alt={place.name}
        className="w-full md:w-1/2 h-64 object-cover rounded-xl shadow-md"
      />
      <div className="md:w-1/2">
        <h3 className="text-2xl font-bold text-sky-700 dark:text-white flex justify-between items-center">
          <span>{place.name}</span>
          <button className="m-1 text-neutral-600 " onClick={handleOnLinking}>
            {like ? (
              <Heart size={28} fill="#FA0501" stroke="" />
            ) : (
              <Heart size={28} />
            )}
          </button>
        </h3>
        <p className="mt-2 text-gray-700 dark:text-white">
          {place.description}
        </p>
        <div className="mt-4 text-sm text-gray-500 dark:text-neutral-100 italic">
          <Rating
            value={rating}
            onChange={handleOnRating}
            readOnly={!isAuthenticated}
          />
        </div>
      </div>
    </>
  );
};
export default PlaceCard;
