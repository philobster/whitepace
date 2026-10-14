import { Button } from "./components/Button";
import { HeroSectionGraphic } from "./components/icons/HeroSectionGraphic";
import { RightArrow } from "./components/icons/RightArrow";
import { Navbar } from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="relative flex flex-col lg:flex-row items-center gap-[100px] px-[16px] md:px-[20px] lg:px-[32px] 2xl:px-[220px] py-[80px] lg:py-[140px] xl:py-[100px] 2xl:py-[140px] md:pt-[140px] md:pb-[100px] bg-primary text-white text-center text-[18px] tracking-[-0.02em]">
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none -translate-y-[40px] md:-translate-y-[84px] lg:translate-y-[40px] 2xl:translate-y-[48px]">
          <HeroSectionGraphic />
        </div>
        <div className="relative flex flex-col lg:flex-row items-center gap-[100px] lg:gap-[8px] xl:gap-0">
          <div className="flex flex-col items-center lg:items-start gap-[60px]">
            <div className="flex flex-col items-center gap-[24px] lg:text-left">
              <span className="font-[650] text-[36px] md:text-[54px] lg:text-[64px] leading-[44px] md:leading-[64px] lg:leading-[80px] tracking-[-0.02em]">Get More Done with whitepace</span>
              <span className="font-light leading-[30px]">Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks</span>
            </div>
            <Button color="primary" font="normal">
              <span className="lg:hidden">Try TasKey Free</span>
              <span className="hidden lg:inline">Try Whitepace free</span>
              <RightArrow />
            </Button>
          </div>
          <div>
            <img className="bg-secondary-blue min-w-[286px] md:min-w-[551px] lg:min-w-[526px] xl:min-w-[685px] 2xl:min-w-[824px] min-h-[191px] md:min-h-[367px] lg:min-h-[350px] xl:min-h-[456px] 2xl:min-h-[549px]"></img>
          </div>
        </div>
      </div>
    </>
  );
}