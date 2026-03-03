import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  icon?: React.ReactNode;
  bgColor?: string;
  textColor?: string;
  borderColor?: string;
  fullWidth?: boolean;
  onClick?: () => void;
  disabled?: boolean;
};

export default function Button({
  children,
  icon,
  bgColor = "bg-primary",
  textColor = "text-white",
  borderColor = "border-transparent",
  fullWidth = false,
  onClick,
  disabled = false,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        flex items-center justify-center gap-2
        px-6 py-3 rounded-lg
        font-medium
        border ${borderColor}
        ${bgColor}
        ${textColor}
        ${fullWidth ? "w-full" : "w-auto"}
       transition hover:scale-105 hover:shadow-lg cursor-pointer
        disabled:opacity-60 disabled:cursor-not-allowed
      `}
    >
      {icon}
      {children}
    </button>
  );
}
