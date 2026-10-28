import { Button } from "./Button";
import { CheckIcon } from "./icons/CheckIcon";
import { CheckIconYellow } from "./icons/CheckIconYellow";
import { RightArrowLarge } from "./icons/RightArrowLarge";

type Plan = {
    name: string;
    price: string;
    description: string;
    features: Array<string>;
    highlighted: boolean;
}
type PlanCardProps = {
    plan: Plan
};

export function PlanCard({ plan }: PlanCardProps) {
  return (
    <div className={`flex flex-col gap-[25px] items-start p-[20px] md:px-[44px] rounded-[10px] ${plan.highlighted ? "bg-primary text-white md:py-[80px]" : "bg-white text-text border border-secondary-yellow md:py-[40px] md:my-[40px]"} w-[calc(100vw-32px)] md:w-[61vw] lg:w-auto font-light text-[16px] leading-[20px] tracking-[-0.02em]`}>
      <div className="flex flex-col gap-[25px]">
        <span className="font-semibold text-[24px] leading-[36px]">{plan.name}</span>
        <span className={`${plan.highlighted ? "text-secondary-yellow" : "text-text"} font-bold text-[36px] tracking-[-0.02em]`}>{plan.price}</span>
        <span>{plan.description}</span>
      </div>
      <ul className="flex flex-col gap-[28px]">
        {plan.features.map((feature) => (
          <li key={feature} className="flex gap-[19px]">
            {plan.highlighted && <div className="shrink-0"><CheckIconYellow /></div>}
            {!plan.highlighted && <div className="shrink-0"><CheckIcon /></div>}
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button color={plan.highlighted ? "primary" : "tertiary"} font="normal" paddingX="normal">Get Started</Button>
    </div>
  );
}