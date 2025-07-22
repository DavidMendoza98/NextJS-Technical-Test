"use client";

// The type was defined in the same component file given its exclusive use.
type Props = {
  size?: number;
  label?: string;
};

const Spinner = ({ size = 30, label }: Props) => {
  return (
    <div className="flex justify-center items-center gap-2 p-4 text-sky-500 dark:text-white">
      <div
        style={{ width: size, height: size }}
        className="animate-spin rounded-full border-4 border-sky-500 border-t-transparent dark:border-white dark:border-t-transparent"
      ></div>
      <span>{label}</span>
    </div>
  );
};

export default Spinner;
