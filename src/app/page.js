"use client"
import Image from "next/image";
import bg from "../../public/background/home-background.png";
import dem from "../../public/background/dem.png";
import den from "../../public/background/den.jpg";
import sao from "../../public/background/sao.jpg";
import anime from "../../public/background/anime.jpg";
import Navigation from "@/components/navigation";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
  {/* Background Image */}
  
  <Image
    sizes="100vw"
    src={den}
    className="absolute top-0 left-0 -z-10 w-full h-full object-cover opacity-100 overflow-y-scroll"
    alt="Background"
  />

  

  {/* Centered Anime Image */}
  <div className="absolute w-full h-full flex items-center justify-center overflow-y-scroll">
  <Navigation />
    <Image
      src={anime}
      alt="Anime Image"
      className=" rounded-full overflow-hidden w-[15vw] h-[15vw] sm:w-[20vw] sm:h-[20vw] md:w-[25vw] md:h-[25vw] border-4 border-white"
    />
  </div>
  
  
</main>

  );
}
