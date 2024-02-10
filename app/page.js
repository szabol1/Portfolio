import { Gruppo } from "next/font/google";
import "./globals.css"; 
import Footer from "./components/footer/page";
import Image from "next/image";

export default function Home() {
  return (
    <div className = "h-screen w-sceeen">
        <Image className = "-z-10 inset-0"
        src = "/images/background.jpg"
        alt= "background"
        fill= {true}
        objectFit="cover"
        />
     <div className="min-h-screen flex flex-col ">
      <div className="mx-16 mt-12 p-4 bg-white bg-opacity-70 flex flex-col min-w-0">
        <div className="relative z-10">
        <h1 className = "text-9xl m-8 mt-3">Hello!</h1>
        <h1 className = "text-9xl m-8">I'm Lauren, a</h1>
        <h1 className = "text-8xl m-8 mb-4 mt-5">Web Designer and Developer</h1>
        </div>
        <div className="absolute right-0 bottom-0 -mr-5 z-0">
        <Image src = "/images/icon.png" height = {800} width = {650} className = "min-w-0"/>
      </div>
      </div>
      <Footer />
    </div>
    
    </div>
  );
};

/*<div className="text-center justify-center inline-block flex">
<div className = "mx-auto">
<h1 className="text-9xl">Designing</h1>
<h1 className = "text-left text-4xl">and Developing</h1>
</div>
</div>
<div className="box mx-32 flex justify-start">
   
    <Image src="/images/green+waves.jpg" width={100} height={100} alt="Image 1" />
  </div>
</div>

*/