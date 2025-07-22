import { useState } from "react";
import { Star } from "lucide-react";

type props = {
  value?: number;
  onChange?: (rating: number) => void;
  readOnly?: boolean;
  size?: number;
  className?: string;
};

const Rating = ({
  value = 0,
  onChange,
  readOnly = false,
  size = 24,
  className = "",
}: props) => {
  const [hoveredRating, setHoveredRating] = useState(0);
  const [selectedRating, setSelectedRating] = useState(value);

  const displayRating = readOnly ? value : hoveredRating || selectedRating;

  const handleStarClick = (rating: number) => {
    if (readOnly) return;
    setSelectedRating(rating);
    onChange?.(rating);
  };

  const handleStarHover = (rating: number) => {
    if (readOnly) return;
    setHoveredRating(rating);
  };

  const handleMouseLeave = () => {
    if (readOnly) return;
    setHoveredRating(0);
  };

  const renderStar = (index: number) => {
    const starValue = index + 1;
    const isFilled = displayRating >= starValue;
    const isHalfFilled =
      displayRating >= starValue - 0.5 && displayRating < starValue;

    return (
      <div
        key={index}
        className={`relative inline-block ${!readOnly ? "cursor-pointer" : ""}`}
        onClick={() => handleStarClick(starValue)}
        onMouseEnter={() => handleStarHover(starValue)}
      >
        {/* Estrella base (gris) */}
        <Star
          size={size}
          className="text-gray-300"
          fill="currentColor"
          strokeWidth={0}
        />

        {/* Estrella llena (amarilla) */}
        <div
          className="absolute top-0 left-0 overflow-hidden"
          style={{
            width: isFilled ? "100%" : isHalfFilled ? "50%" : "0%",
          }}
        >
          <Star
            size={size}
            className="text-yellow-400"
            fill="currentColor"
            strokeWidth={0}
          />
        </div>
      </div>
    );
  };

  return (
    <div
      className={`flex items-center ${className}`}
      onMouseLeave={handleMouseLeave}
    >
      {Array.from({ length: 5 }, (_, index) => renderStar(index))}
      {readOnly && (
        <span className="ml-2 text-sm text-gray-600">({value.toFixed(1)})</span>
      )}
    </div>
  );
};
export default Rating;
