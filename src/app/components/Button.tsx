import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  color: "primary" | "secondary";
  font: "bold" | "normal";
  paddingX: "small" | "normal";
};

export function Button({ children, color, font, paddingX }: ButtonProps) {
    const base = "flex justify-center items-center gap-[10px] rounded-[8px] py-[20px]";

    const colors = {
        primary: "bg-accent text-white",
        secondary: "bg-secondary-yellow text-primary"
    };

    const fonts = {
        bold: "font-[450] leading-[23px]",
        normal: "font-light leading-[30px]"
    };

    const paddingXs = {
        small: "px-[24px]",
        normal: "px-[40px]"
    };

    return (
        <button className={`${base} ${colors[color]} ${fonts[font]} ${paddingXs[paddingX]}`}>
            {children}
        </button>
    );
}