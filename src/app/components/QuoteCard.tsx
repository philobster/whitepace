import { Button } from "./Button";
import { CheckIcon } from "./icons/CheckIcon";
import { CheckIconYellow } from "./icons/CheckIconYellow";
import { QuoteIcon } from "./icons/QuoteIcon";
import { QuoteIconWhite } from "./icons/QuoteIconWhite";
import { RightArrowLarge } from "./icons/RightArrowLarge";

type Quote = {
    name: string;
    title: string;
    jobTitle: string;
    location: string;
    quote: string;
    picture: string;
    highlighted: boolean;
    id: string;
}
type QuoteCardProps = {
    quote: Quote
};

export function QuoteCard({ quote }: QuoteCardProps) {
  return (
    <div className={`flex flex-col gap-[40px] xl:gap-[60px] items-start p-[20px] lg:px-[24px] 2xl:px-[40px] lg:py-[60px] rounded-[10px] ${quote.highlighted ? "bg-white text-text shadow-[0px_4px_50px_rgba(0,0,0,0.1)]" : "bg-accent text-white"} w-[calc(100vw-32px)] md:w-[44vw] lg:w-auto font-normal text-[18px] lg:text-[16px] leading-[30px] lg:leading-[20px] tracking-[-0.02em]`}>
        <div className={`flex flex-col gap-[32px] items-start pb-[40px] border-b ${quote.highlighted ? "border-text" : "border-white"}`}>
            <div>
                {quote.highlighted && <div className="shrink-0"><QuoteIcon /></div>}
                {!quote.highlighted && <div className="shrink-0"><QuoteIconWhite /></div>}
            </div>
            <span className="text-[18px] leading-[30px] tracking-[-0.02em] text-left">{quote.quote}</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-[24px] xl:gap-[42px] items-start">
            <div className="rounded-full w-[65px] lg:w-[95px] h-[65px] lg:h-[95px] overflow-hidden shrink-0">
                <img src={quote.picture} alt={quote.name} className="w-full h-full min-w-full min-h-full object-cover" />
            </div>
            <div className="flex flex-col gap-[15px] items-start">
                <span className={`lg:text-[24px] lg:leading-[36px] lg:tracking-0 font-bold ${quote.highlighted ? "text-text" : "text-primary"}`}>{quote.name}, {quote.title}</span>
                <span>{quote.jobTitle}, {quote.location}</span>
            </div>
        </div>
    </div>
  );
}