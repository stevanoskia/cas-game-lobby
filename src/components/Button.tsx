import React from "react";
import clsx from "clsx";
import { Heart } from "lucide-react";
import { ButtonProps } from "@/types/ButtonType";

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  onClick,
  variant = "default",
  icon,
  active,
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) onClick(e);
  };

  if (variant === "icon" && icon === "heart") {
    return (
      <button
        className={clsx(
          "p-1 rounded-full transition hover:scale-110",
          active ? "text-red-500" : "text-black dark:text-white",
          className
        )}
        onClick={handleClick}
        {...props}
      >
        <Heart fill={active ? "red" : "none"} className="w-5 h-5" />
      </button>
    );
  }

  return (
    <button
      className={clsx(
        "relative overflow-hidden w-full py-2 text-sm sm:text-base rounded-lg font-bold transition cursor-pointer group",
        "bg-yellow-400 text-black hover:bg-yellow-300",
        "dark:bg-yellow-300 dark:text-zinc-900 dark:hover:bg-yellow-200",
        className
      )}
      onClick={handleClick}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent translate-x-[-100%] group-hover:animate-shine z-0 pointer-events-none" />
    </button>
  );
};

export default Button;
