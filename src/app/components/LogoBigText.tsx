import { LogoIconBig } from "./icons/LogoIconBig";

export function LogoBigText() {
    return (
        <div className="flex gap-[10px] items-center">
            <LogoIconBig />
            <span className="font-[650] text-[28px] md:text-[52px] lg:text-[28px]">whitepace</span>
        </div>
    );
}