import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode, variant: string
}

export default function Button({ children, variant, ...props }: ButtonProps) {
  let classNames = "w-32 sm:w-40 py-2 sm:py-3 rounded-3xl hover:bg-blue-500 transition duration-300 z-10";

  if (variant === "primary") {
    classNames += " bg-primary text-white";
  }
  return (
    <button className={classNames} {...props}>
      {children}
    </button >
  );
}
