import React from "react";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      className={clsx(
        "relative overflow-hidden w-full py-2 text-sm sm:text-base rounded-lg bg-yellow-400 text-black font-bold hover:bg-yellow-300 transition cursor-pointer group",
        className
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent translate-x-[-100%] group-hover:animate-shine z-0 pointer-events-none" />
    </button>
  );
};

export default Button;
