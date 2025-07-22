type Props = {
  label: string;
  size?: "small" | "medium" | "large";
  onClick?: () => void;
};

const CallToActionButton = ({ label, size = "medium", onClick }: Props) => {
  const sizeClasses = {
    small: {
      container: "text-sm px-4 py-2",
      icon: "p-1.5",
      iconSize: "h-4 w-4",
    },
    medium: {
      container: "text-lg px-6 py-3",
      icon: "p-2",
      iconSize: "h-5 w-5",
    },
    large: {
      container: "text-xl px-8 py-4",
      icon: "p-2.5",
      iconSize: "h-6 w-6",
    },
  };

  const currentSize = sizeClasses[size];

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
