import { LogoIcon } from "./icons/LogoIcon";

export function Logo() {
    return (
        <div className="flex gap-[10px] items-center">
            <LogoIcon />
            <span className="font-[650] text-[20px] md:text-[28px]">whitepace</span>
        </div>
    );
}