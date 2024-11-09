import React from "react";

type ButtonProps = {
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
};

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className,
  type = "button",
}) => {
  return (
    <button
      type={type}
      className={`${className} inline-block py-4.5 px-6.5 text-sm font-medium leading-tight text-center uppercase whitespace-nowrap align-middle cursor-pointer select-none transition-all duration-500 bg-color_dark_1 hover:bg-color_dark_4 text-white`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
