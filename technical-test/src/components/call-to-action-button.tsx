"use client";
import { SIZECLASSES } from "@/constants/call_to_action_button_sizes";
// The type was defined in the same component file given its exclusive use.
type Props = {
  label: string;
  size?: "small" | "medium" | "large";
  onClick?: () => void;
};

const CallToActionButton = ({ label, size = "medium", onClick }: Props) => {
  // Calculated variables
  const currentSize = SIZECLASSES[size];

  // Handles
  const handleClick = () => {
    onClick?.();
  };

  return (
    <div
      onClick={handleClick}
      className={`w-fit mx-auto bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-full shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 flex items-center gap-3 cursor-pointer ${currentSize.container}`}
    >
      <div className={`bg-white text-sky-500 rounded-full ${currentSize.icon}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={currentSize.iconSize}
          viewBox="0 0 24 24"
        >
          <path fill="currentColor" d="M4 15V9h8V4.16L19.84 12L12 19.84V15z" />
        </svg>
      </div>
      <span className="text-center">{label}</span>
    </div>
  );
};

export default CallToActionButton;
