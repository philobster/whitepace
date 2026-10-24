import { Button } from "./components/Button";
import { HeroSectionGraphic } from "./components/icons/HeroSectionGraphic";
import { HighlighterStrokeLarge } from "./components/icons/HighlighterStrokeLarge";
import { HighlighterStrokeMedium } from "./components/icons/HighlighterStrokeMedium";
import { RightArrow } from "./components/icons/RightArrow";
import { RightArrowLarge } from "./components/icons/RightArrowLarge";
import { WorkManagementGraphic } from "./components/icons/WorkManagementSectionGraphic";
import { WorkTogetherImage } from "./components/icons/WorkTogetherImage";
import { Navbar } from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />


      <div className="relative flex flex-col lg:flex-row items-center gap-[100px] px-[16px] md:px-[20px] lg:px-[32px] 2xl:px-[220px] py-[80px] lg:py-[140px] xl:py-[100px] 2xl:py-[140px] md:pt-[140px] md:pb-[100px] bg-primary text-white text-center text-[18px] tracking-[-0.02em] overflow-hidden">
        
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none -translate-y-[40px] md:-translate-y-[84px] lg:translate-y-[40px] 2xl:translate-y-[48px]">
          <HeroSectionGraphic />
        </div>

        <div className="relative flex flex-col lg:flex-row items-center gap-[100px] lg:gap-[8px] xl:gap-0">
          <div className="flex flex-col items-center lg:items-start gap-[60px]">
            <div className="flex flex-col items-center gap-[24px] lg:text-left">
              <span className="font-[650] text-[36px] md:text-[54px] lg:text-[64px] leading-[44px] md:leading-[64px] lg:leading-[80px] tracking-[-0.02em]">Get More Done with whitepace</span>
              <span className="font-light leading-[30px]">Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks</span>
            </div>
            <Button color="primary" font="normal" paddingX="small">
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


      <div className="relative flex flex-col gap-[100px] px-[16px] md:px-[20px] lg:px-[32px] 2xl:px-[220px] py-[80px] md:py-[100px] lg:py-[140px] text-[18px] text-text tracking-[-0.02em] overflow-hidden">
        <div className="absolute inset-0 flex pointer-events-none translate-y-[40px] md:translate-y-[32px] lg:translate-y-[66px] xl:translate-y-[2px] 2xl:translate-y-[262px]">
          <WorkManagementGraphic />
        </div>
        <div className="absolute inset-0 flex justify-center lg:justify-start pointer-events-none translate-x-[16px] md:translate-x-[108px] lg:translate-x-[16px] xl:translate-x-[30px] 2xl:translate-x-[220px] translate-y-[148px] md:translate-y-[140px] lg:translate-y-[276px] xl:translate-y-[306px] 2xl:translate-y-[354px]">
          <HighlighterStrokeLarge />
        </div>

        <div className="relative flex flex-col lg:flex-row gap-[60px] lg:gap-[100px] xl:gap-0 2xl:gap-[60px] justify-center lg:justify-between items-center">
          <div className="flex flex-col gap-[60px] items-center lg:items-start">
            <div className="flex flex-col gap-[24px] text-center lg:text-left">
              <span className="font-bold text-[36px] md:text-[54px] lg:text-[64px] xl:text-[72px] leading-[44px] md:leading-[64px] lg:leading-[80px] xl:leading-[88px] tracking-[-0.02em]">Project Management</span>
              <span className="font-normal leading-[30px]">Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.</span>
            </div>
            <Button color="primary" font="normal" paddingX="normal">Get Started <RightArrowLarge /></Button>
          </div>
          <div>
            <img className="bg-secondary-blue min-w-[286px] md:min-w-[561px] lg:min-w-[527px] xl:min-w-[719px] 2xl:min-w-[748px] min-h-[177px] md:min-h-[349px] lg:min-h-[328px] xl:min-h-[448px] 2xl:min-h-[547px]"></img>
          </div>
        </div>

        <div className="absolute inset-0 flex justify-center items-center pointer-events-none translate-x-[64px] md:translate-x-[80px] lg:translate-x-[348px] xl:translate-x-[428px] 2xl:translate-x-[440px] translate-y-[88px] md:translate-y-[66px] lg:translate-y-[176px] xl:translate-y-[188px] 2xl:translate-y-[248px]">
          <HighlighterStrokeMedium />
        </div>

        <div className="relative flex flex-col lg:flex-row-reverse gap-[60px] md:gap-[100px] lg:gap-[36px] xl:gap-[160px] 2xl:gap-[100px] justify-center lg:justify-between items-center">
          <div className="flex flex-col gap-[60px] items-center lg:items-start">
            <div className="flex flex-col gap-[24px] text-center lg:text-left">
              <span className="font-bold text-[36px] md:text-[54px] lg:text-[64px] xl:text-[72px] leading-[44px] md:leading-[64px] lg:leading-[80px] xl:leading-[88px] tracking-[-0.02em]">Work together</span>
              <span className="font-normal leading-[30px]">With whitepace, share your notes with your colleagues and collaborate on them. You can also publish a note to the internet and share the URL with others.</span>
            </div>
            <Button color="primary" font="normal" paddingX="normal">Try it now <RightArrowLarge /></Button>
          </div>
          <div>
            <WorkTogetherImage />
          </div>
        </div>
      </div>


      <div className="relative flex flex-col lg:flex-row gap-[60px] lg:gap-[98px] px-[16px] md:px-[32px] 2xl:px-[220px] py-[80px] md:py-[100px] lg:py-[140px] items-center bg-primary text-white text-[18px] tracking-[-0.02em] overflow-hidden">

        <div className="absolute inset-0 flex pointer-events-none translate-x-[84px] md:translate-x-[360px] lg:translate-x-[250px] xl:translate-x-[272px] 2xl:translate-x-[476px] translate-y-[154px] md:translate-y-[142px] lg:translate-y-[208px] xl:translate-y-[292px] 2xl:translate-y-[290px]">
          <HighlighterStrokeMedium />
        </div>

        <div className="relative flex flex-col gap-[60px] items-center lg:items-start">
          <div className="flex flex-col gap-[24px] text-center lg:text-left">
              <span className="font-bold text-[36px] md:text-[54px] lg:text-[64px] xl:text-[72px] leading-[44px] md:leading-[64px] lg:leading-[80px] xl:leading-[88px] tracking-[-0.02em]">Use as Extension</span>
              <span className="font-normal leading-[30px]">Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.</span>
          </div>
          <Button color="primary" font="normal" paddingX="normal">Let's Go <RightArrowLarge /></Button>
        </div>
        <div>
          <img className="bg-secondary-blue min-w-[284px] md:min-w-[557px] lg:min-w-[459px] xl:min-w-[686px] min-h-[198px] md:min-h-[388px] lg:min-h-[320px] xl:min-h-[479px]" />
        </div>
      </div>


      <div className="relative flex flex-col lg:flex-row gap-[60px] 2xl:gap-[98px] px-[16px] md:px-[20px] lg:px-[32px] 2xl:px-[220px] py-[100px] md:py-[140px] items-center text-text text-[18px] tracking-[-0.02em] overflow-hidden">

        <div>
          <img className="bg-secondary-blue min-w-[288px] md:min-w-[534px] xl:min-w-[670px] 2xl:min-w-[714px] min-h-[214px] md:min-h-[397px] xl:min-h-[499px] 2xl:min-h-[532px]" />
        </div>

        <div className="xl:hidden absolute inset-0 flex md:items-center lg:items-start pointer-events-none translate-x-[134px] md:translate-x-[540px] lg:translate-x-[636px] translate-y-[450px] md:translate-y-[148px] lg:translate-y-[278px]">
          <HighlighterStrokeMedium />
        </div>
        <div className="hidden xl:block absolute inset-0 flex pointer-events-none xl:translate-x-[752px] 2xl:translate-x-[1000px] xl:translate-y-[324px] 2xl:translate-y-[340px]">
          <HighlighterStrokeLarge />
        </div>

        <div className="relative flex flex-col gap-[60px] items-center lg:items-start">
          <div className="flex flex-col gap-[24px] text-center lg:text-left">
              <span className="font-bold text-[36px] md:text-[54px] lg:text-[64px] xl:text-[72px] leading-[44px] md:leading-[64px] lg:leading-[80px] xl:leading-[88px] tracking-[-0.02em]">Customise it to your needs</span>
              <span className="font-normal leading-[30px]">Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.</span>
          </div>
          <Button color="primary" font="normal" paddingX="normal">Let's Go <RightArrowLarge /></Button>
        </div>
      </div>
    </>
  );
}