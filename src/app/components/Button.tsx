import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  color: "primary" | "secondary";
  font: "bold" | "normal";
};

export function Button({ children, color, font }: ButtonProps) {
    const base = "flex justify-center items-center gap-[10px] rounded-[8px] px-[40px] lg:px-[24px] py-[18px] min-w-[120px]";

    const colors = {
        primary: "bg-accent",
        secondary: "bg-secondary-yellow text-primary"
    };

    const fonts = {
        bold: "font-[450] leading-[23px]",
        normal: "font-light leading-[30px]"
    };

    return (
        <button className={`${base} ${colors[color]} ${fonts[font]}`}>
            {children}
        </button>
    );
}