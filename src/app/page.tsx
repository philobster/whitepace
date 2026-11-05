import { Button } from "./components/Button";
import { AndroidLogo } from "./components/icons/AndroidLogo";
import { AppleLogo } from "./components/icons/AppleLogo";
import { AppleLogoWhite } from "./components/icons/AppleLogoWhite";
import { AppsGraphic } from "./components/icons/AppsGraphic";
import { AppsSectionGraphic } from "./components/icons/AppsSectionGraphic";
import { FacebookIcon } from "./components/icons/FacebookIcon";
import { GoogleLogo } from "./components/icons/GoogleLogo";
import { HeroSectionGraphic } from "./components/icons/HeroSectionGraphic";
import { HighlighterStrokeBlue } from "./components/icons/HighlighterStrokeBlue";
import { HighlighterStrokeLarge } from "./components/icons/HighlighterStrokeLarge";
import { HighlighterStrokeMedium } from "./components/icons/HighlighterStrokeMedium";
import { HighlighterStrokeSmall } from "./components/icons/HighlighterStrokeSmall";
import { LanguageArrow } from "./components/icons/LanguageArrow";
import { LanguageIcon } from "./components/icons/LanguageIcon";
import { LinkedinIcon } from "./components/icons/LinkedinIcon";
import { MicrosoftLogo } from "./components/icons/MicrosoftLogo";
import { RightArrow } from "./components/icons/RightArrow";
import { RightArrowLarge } from "./components/icons/RightArrowLarge";
import { SlackLogo } from "./components/icons/SlackLogo";
import { TwitterIcon } from "./components/icons/TwitterIcon";
import { WindowsLogo } from "./components/icons/WindowsLogo";
import { WorkManagementGraphic } from "./components/icons/WorkManagementSectionGraphic";
import { WorkTogetherImage } from "./components/icons/WorkTogetherImage";
import { YourDataGraphic } from "./components/icons/YourDataGraphic";
import { YourWorkGraphic } from "./components/icons/YourWorkGraphic";
import { LogoBigText } from "./components/LogoBigText";
import { Navbar } from "./components/Navbar";
import { PlanCard } from "./components/PlanCard";
import { QuoteCard } from "./components/QuoteCard";

export default function Home() {

  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "Capture ideas and find them quickly",
      features: ["Sync unlimited devices", "10 GB monthly uploads", "200 MB max. note size", "Customize Home dashboard and access extra widgets", "Connect primary Google Calendar account", "Add due dates, reminders, and notifications to your tasks"],
      highlighted: false,
    },
    {
      name: "Personal",
      price: "$11.99",
      description: "Keep home and family on track",
      features: ["Sync unlimited devices", "10 GB monthly uploads", "200 MB max. note size", "Customize Home dashboard and access extra widgets", "Connect primary Google Calendar account", "Add due dates, reminders, and notifications to your tasks"],
      highlighted: true,
    },
    {
      name: "Organization",
      price: "$49.99",
      description: "Capture ideas and find them quickly",
      features: ["Sync unlimited devices", "10 GB monthly uploads", "200 MB max. note size", "Customize Home dashboard and access extra widgets", "Connect primary Google Calendar account", "Add due dates, reminders, and notifications to your tasks"],
      highlighted: false,
    },
  ];

  const quotes = [
    {
      name: "Oberon Shaw",
      title: "MCH",
      jobTitle: "Head of Talent Acquisition",
      location: "North America",
      quote: "Taskkey is designed as a collaboration tool for businesses that is a full project management solution.",
      picture: "https://i.pravatar.cc/150?img=1",
      highlighted: true,
      id: "1",
    },
    {
      name: "Oberon Shaw",
      title: "MCH",
      jobTitle: "Head of Talent Acquisition",
      location: "North America",
      quote: "Taskkey is designed as a collaboration tool for businesses that is a full project management solution.",
      picture: "https://i.pravatar.cc/150?img=1",
      highlighted: false,
      id: "2",
    },
    {
      name: "Oberon Shaw",
      title: "MCH",
      jobTitle: "Head of Talent Acquisition",
      location: "North America",
      quote: "Taskkey is designed as a collaboration tool for businesses that is a full project management solution.",
      picture: "https://i.pravatar.cc/150?img=1",
      highlighted: false,
      id: "3",
    },
  ];

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

        <div className="relative">
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

      
      <div className="relative flex flex-col gap-[60px] justify-center items-center px-[16px] md:px-[20px] lg:px-[32px] 2xl:px-[220px] py-[80px] md:py-[140px] text-text text-[18px] tracking-[-0.02em] overflow-hidden">

        <div className="md:hidden absolute inset-0 flex pointer-events-none translate-x-[110px] translate-y-[148px]">
          <HighlighterStrokeSmall />
        </div>
        <div className="hidden md:block absolute inset-0 flex lg:items-start pointer-events-none translate-x-[380px] lg:translate-x-[556px] xl:translate-x-[708px] 2xl:translate-x-[938px] translate-y-[184px] lg:translate-y-[194px] xl:translate-y-[200px]">
          <HighlighterStrokeMedium />
        </div>

        <div className="relative flex flex-col gap-[24px] items-center text-center">
          <span className="font-bold text-[36px] md:text-[54px] lg:text-[64px] xl:text-[72px] leading-[44px] md:leading-[64px] lg:leading-[80px] xl:leading-[88px] tracking-[-0.02em]">Choose Your Plan</span>
          <span className="font-normal leading-[30px]">Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Evernote has the right plan for you.</span>
        </div>

        <div className="relative flex gap-[32px] lg:justify-center overflow-x-auto snap-x snap-mandatory scroll-smooth w-[calc(100%+32px)] md:w-[calc(100%+40px)] lg:w-full -mx-[16px] md:mx-0 px-[16px] md:px-[144px] lg:px-0">
          {plans.map((plan) => (
            <div key={plan.name} className="snap-center shrink-0 lg:shrink">
              <PlanCard plan={plan} />
            </div>
          ))}
        </div>

        <div className="md:hidden relative flex justify-center gap-[12px]">
          <div className="w-[12px] h-[12px] rounded-full bg-accent" />
          <div className="w-[12px] h-[12px] rounded-full bg-primary" />
          <div className="w-[12px] h-[12px] rounded-full bg-accent" />
        </div>
      </div>


      <div className="relative flex flex-col lg:flex-row px-[16px] md:px-[20px] lg:px-[32px] xl:px-[188px] 2xl:px-[426px] md:pr-[144px] lg:pr-[470px] pt-[100px] pb-[140px] md:py-[140px] bg-primary text-white text-[18px] tracking-[-0.02em] overflow-hidden">

        <div className="absolute inset-0 flex pointer-events-none -translate-y-[8px] lg:translate-y-[8px] xl:-translate-y-[180px] 2xl:-translate-y-[180px]">
          <YourWorkGraphic />
        </div>
        <div className="absolute inset-0 flex pointer-events-none translate-x-[16px] md:translate-x-[12px] lg:translate-x-[410px] xl:translate-x-[980px] 2xl:translate-x-[1216px] translate-y-[214px] md:translate-y-[240px] lg:translate-y-[268px] xl:translate-y-[202px] 2xl:translate-y-[200px]">
          <HighlighterStrokeBlue />
        </div>

        <div className="relative flex flex-col gap-[60px] items-start xl:items-center">
          <div className="flex flex-col gap-[24px] text-left xl:text-center">
              <span className="font-bold text-[36px] md:text-[54px] lg:text-[64px] xl:text-[72px] leading-[44px] md:leading-[64px] lg:leading-[80px] xl:leading-[88px] tracking-[-0.02em]">Your work, everywhere you are</span>
              <span className="font-normal leading-[30px] lg:text-center">Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!</span>
          </div>
          <Button color="primary" font="normal" paddingX="normal">Try Taskey <RightArrowLarge /></Button>
        </div>
      </div>


      <div className="relative flex flex-col lg:flex-row-reverse gap-[60px] lg:gap-0 px-[16px] md:px-[20px] lg:px-[32px] lg:pr-0 xl:pr-[32px] 2xl:px-[220px] py-[80px] md:py-[140px] items-center text-text text-[18px] tracking-[-0.02em] overflow-hidden">

        <div className="relative">
          <YourDataGraphic />
        </div>

        <div className="absolute inset-0 flex md:items-center lg:items-start pointer-events-none translate-x-[134px] md:translate-x-[348px] lg:translate-x-[220px] xl:translate-x-[240px] 2xl:translate-x-[440px] translate-y-[384px] md:translate-y-[90px] lg:translate-y-[196px] xl:translate-y-[230px]">
          <HighlighterStrokeMedium />
        </div>

        <div className="relative flex flex-col gap-[60px] items-center lg:items-start">
          <div className="flex flex-col gap-[24px] text-center lg:text-left">
              <span className="font-bold text-[36px] md:text-[54px] lg:text-[64px] xl:text-[72px] leading-[44px] md:leading-[64px] lg:leading-[80px] xl:leading-[88px] tracking-[-0.02em]">100% your data</span>
              <span className="font-normal leading-[30px]">The app is open source and your notes are saved to an open format, so you'll always have access to them. Uses End-To-End Encryption (E2EE) to secure your notes and ensure no-one but yourself can access them.</span>
          </div>
          <Button color="primary" font="normal" paddingX="normal">Read more <RightArrowLarge /></Button>
        </div>
      </div>


      <div className="relative flex flex-col gap-[100px] px-[16px] md:px-[20px] lg:px-[32px] 2xl:px-[220px] py-[80px] md:py-[140px] items-center text-text text-[18px] tracking-[-0.02em] overflow-hidden">

        <div className="absolute inset-0 flex lg:items-start pointer-events-none translate-x-[120px] md:translate-x-[324px] lg:translate-x-[480px] xl:translate-x-[630px] 2xl:translate-x-[864px] translate-y-[108px] md:translate-y-[180px] lg:translate-y-[196px] xl:translate-y-[200px]">
          <HighlighterStrokeMedium />
        </div>

        <div className="relative">
          <span className="font-bold text-[36px] md:text-[54px] lg:text-[64px] xl:text-[72px] leading-[44px] md:leading-[64px] lg:leading-[80px] xl:leading-[88px] tracking-[-0.02em]">Our sponsors</span>
        </div>

        <div className="relative flex flex-col lg:flex-row gap-[100px] items-center lg:justify-between w-full">
          <AppleLogo />
          <MicrosoftLogo />
          <SlackLogo />
          <GoogleLogo />
        </div>
      </div>


      <div className="relative flex flex-col lg:flex-row gap-[100px] px-[16px] md:px-[20px] lg:px-[32px] 2xl:px-[220px] py-[80px] md:py-[140px] items-center bg-primary text-white text-[18px] tracking-[-0.02em] overflow-hidden">

        <div className="absolute inset-0 flex pointer-events-none -translate-y-[40px] md:translate-y-0">
          <AppsSectionGraphic />
        </div>

        <div className="relative">
          <AppsGraphic />
        </div>

        <div className="relative flex flex-col gap-[60px] items-center lg:items-start">
          <div className="flex flex-col gap-[24px] text-center lg:text-left">
              <span className="font-bold text-[36px] md:text-[54px] lg:text-[64px] xl:text-[72px] leading-[44px] md:leading-[64px] lg:leading-[80px] xl:leading-[88px] tracking-[-0.02em]">Work with Your Favorite Apps Using whitepace</span>
              <span className="font-normal leading-[30px]">Whitepace teams up with your favorite software. Integrate with over 1000+ apps with Zapier to have all the tools you need for your project success.</span>
          </div>
          <Button color="primary" font="normal" paddingX="normal">Read more <RightArrowLarge /></Button>
        </div>
      </div>


      <div className="relative flex flex-col gap-[60px] justify-center items-center px-[16px] md:px-[20px] lg:px-[32px] 2xl:px-[220px] py-[100px] md:py-[140px] text-text text-[18px] tracking-[-0.02em] overflow-hidden">

        <div className="absolute inset-0 flex pointer-events-none translate-x-[60px] md:translate-x-[360px] lg:translate-x-[430px] xl:translate-x-[570px] 2xl:translate-x-[900px] translate-y-[164px] md:translate-y-[176px] lg:translate-y-[186px] xl:translate-y-[192px]">
          <HighlighterStrokeLarge />
        </div>

        <div className="relative flex flex-col gap-[24px] items-center text-center px-[24px]">
          <span className="font-bold text-[36px] md:text-[54px] lg:text-[64px] xl:text-[72px] leading-[44px] md:leading-[64px] lg:leading-[80px] xl:leading-[88px] tracking-[-0.02em]">What Our Clients Say</span>
        </div>

        <div className="relative flex gap-[32px] lg:justify-center overflow-x-auto snap-x snap-mandatory scroll-smooth w-[calc(100%+32px)] md:w-[calc(100%+40px)] lg:w-full -mx-[16px] md:mx-0 px-[16px] md:px-[200px] lg:px-0 py-[32px]">
          {quotes.map((quote) => (
            <div key={quote.id} className="snap-center shrink-0 lg:shrink">
              <QuoteCard quote={quote} />
            </div>
          ))}
        </div>

        <div className="relative flex justify-center gap-[12px]">
          <div className="w-[12px] h-[12px] rounded-full bg-accent" />
          <div className="w-[12px] h-[12px] rounded-full bg-primary" />
          <div className="w-[12px] h-[12px] rounded-full bg-accent" />
        </div>
      </div>


      <div className="flex flex-col gap-[200px] items-start lg:items-center px-[16px] md:px-[20px] lg:px-[272px] xl:px-[416px] 2xl:px-[756px] pt-[100px] md:pt-[140px] pb-[32px] bg-primary text-white text-[18px] md:text-[24px] leading-[30px] md:leading-[32px] tracking-[-0.02em]">
        <div className="flex flex-col gap-[40px] items-start lg:items-center">

          <div className="flex flex-col gap-[24px] text-left lg:text-center">
            <span className="font-bold text-[40px] md:text-[54px] lg:text-[72px] leading-[52px] md:leading-[62px] lg:leading-[88px] tracking-0">Try Whitepace today</span>
            <span>Get started for free. <br />Add your whole team as your needs grow.</span>
          </div>

          <Button color="primary" font="normal" paddingX="normal">Try Taskey free <RightArrowLarge /></Button>
          <span>On a big team? Contact sales</span>

          <div className="flex gap-[40px] justify-start items-center">
            <AppleLogoWhite />
            <WindowsLogo />
            <AndroidLogo />
          </div>
        </div>
      </div>


      <div className="flex flex-col gap-[200px] items-center md:items-start lg:items-center px-[16px] md:px-[32px] 2xl:px-[220px] pt-[140px] md:pt-[80px] lg:pt-[140px] pb-[32px] bg-primary text-white text-[18px] leading-[30px] tracking-[-0.02em]">
        <div className="flex flex-col gap-[80px] md:gap-[100px] lg:gap-[68px] items-center md:items-start xl:w-full">
          <div className="flex flex-col lg:flex-row gap-[80px] md:gap-[100px] lg:gap-[45px] xl:gap-[100px] 2xl:gap-[190px] items-center md:items-start lg:justify-between xl:justify-start w-full">

            <div className="flex flex-col gap-[24px] lg:gap-[15px] items-center md:items-start text-center md:text-left">
              <LogoBigText />
              <span className="lg:hidden">whitepace was created for the new ways we live and work. <br />We make a better workspace around the world.</span>
              <span className="hidden lg:block">whitepace was created for <br />the new ways we live and <br />work. We make a better <br />worspace around the world.</span>
            </div>

            <div className="flex flex-col gap-[15px] items-center md:items-start text-center md:text-left">
              <span className="font-bold">Product</span>
              <span className="text-secondary-yellow">Overview</span>
              <span>Pricing</span>
              <span>Customer stories</span>
            </div>

            <div className="flex flex-col gap-[16px] items-center md:items-start text-center md:text-left">
              <span className="font-bold">Resources</span>
              <span>Blog</span>
              <span>Guides & tutorials</span>
              <span>Help center</span>
            </div>

            <div className="flex flex-col gap-[16px] items-center md:items-start text-center md:text-left">
              <span className="font-bold">Company</span>
              <span>About us</span>
              <span>Careers</span>
              <span>Media kit</span>
            </div>

            <div className="flex flex-col gap-[23px] items-center md:items-start text-center md:text-left px-[44px] md:px-0 md:pr-[480px] lg:pr-0">
              <span className="font-bold text-[28px] leading-[36px] tracking-[-0.02em]">Try It Today</span>
              <span className="lg:hidden">Get started for free. <br />Add your whole team as your needs grow.</span>
              <span className="hidden lg:block">Get started for free. Add your <br />whole team as your needs grow.</span>
              <Button color="primary" font="normal" paddingX="normal">Start today <RightArrowLarge /></Button>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-[20px] lg:gap-auto items-center md:items-start lg:items-center lg:justify-between w-full lg:border-t lg:border-line lg:pt-[32px]">
            <div className="flex flex-col md:flex-row gap-[20px] md:gap-0 lg:gap-[60px] items-center md:justify-between lg:justify-start pb-[20px] lg:pb-0 border-b border-line lg:border-none w-full text-[16px] leading-[20px] tracking-[-0.02em]">

              <div className="flex gap-[6px] items-center">
                <LanguageIcon />
                <span>English</span>
                <div className="p-[4px]">
                  <LanguageArrow />
                </div>
              </div>

              <span>Terms & privacy</span>
              <span>Security</span>
              <span>Status</span>
              <span>©2021 Whitepace LLC.</span>
            </div>

            <div className="flex gap-[32px] justify-center items-center">
              <FacebookIcon />
              <TwitterIcon />
              <LinkedinIcon />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}