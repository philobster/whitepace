import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  color: "primary" | "secondary";
};

export function Button({ children, color }: ButtonProps) {
    const base = "flex justify-center items-center gap-[10px] rounded-[8px] px-[22px] py-[18px] min-w-[124px] font-[450]";

    const colors = {
        primary: "bg-accent",
        secondary: "bg-secondary-yellow text-primary"
    };

    return (
        <button className={`${base} ${colors[color]}`}>
            {children}
        </button>
    );
}