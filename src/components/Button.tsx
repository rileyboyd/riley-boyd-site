import React from "react";

type ButtonProps = {
  onClick: () => void;
  className?: string;
  children: React.ReactNode;
};
export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className,
}) => {
  return (
    <button className={`rb-btn ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};
