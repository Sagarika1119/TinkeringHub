
// import Image from "next/image";
// import { CarouselSpacing } from "@/components/carsule";
// import { CardTwo } from "@/components/card";
// import HeroSection from "@/components/description";


// export default function Home() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-center p-24">
//       <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
//         {/* Other content here */}
//       </div>
      

//       {/* <div className="relative flex place-items-center justify-center">
//         <Image
//           className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
//           src="/next.svg"
//           alt="Next.js Logo"
//           width={180}
//           height={37}
//           priority
//         />
//       </div> */}
//       <p>What does Tinkering Hub do?</p>
//       <div className="w-full max-w-5xl mt-12 flex justify-center">
//         <CarouselSpacing />
//         <CardTwo/>
//       </div>
//       <HeroSection/>
//     </main>
//     <main className="flex min-h-screen flex-col items-center p-8 justify-between bg-primary_color1"> {/* Dark yellow background */}
//     <div className="w-full max-w-screen-lg bg-primary_color2  rounded-lg shadow-lg"> {/* Light yellow inner box */}
//       <ExampleNavbarThree />
//       <HeroOne />
//       <CarouselSize />
//       <ActivitiesPage />
//     </div>
//   </main>

//   );
// }
// import Image from "next/image";
// import { ExampleNavbarThree } from "@/Components/Navigation";
// import { HeroOne } from "@/Components/Hero";
// import { CarouselSize } from "@/Components/Caurasoal";
// import ActivitiesPage from '../components/ActivitiesPage';
import { CarouselSpacing } from "@/components/carsule";
import { CardTwo } from "@/components/card";
import HeroSection from "@/components/description";
import GallerySection from "@/components/gallery";
import Hackathon from "@/components/hackathon";
import NavAndContentSection from "@/components/navContent";
import Tracks from "@/components/tracks";
import { Faq } from "@/components/faq";
import OurTeams from "@/components/teams";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 justify-between bg-primary_color1"> {/* Dark yellow background */}
      <div className="w-full max-w-screen-lg bg-primary_color2  rounded-lg shadow-lg"> {/* Light yellow inner box */}
        <CarouselSpacing/>
        <CardTwo/>
        <HeroSection/>
        <NavAndContentSection/>
        <GallerySection/>
        <Hackathon/>
        <Tracks/>
        <OurTeams/>
        <Faq/>
      </div>
    </main>
  );
}
