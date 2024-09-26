
import "./globals.css"; 
import Footer from "./components/footer/page";
import Image from "next/image";

export default function Home() {
  return (
    <div>
    <div className = "landing flex background">

     <div className="flex flex-col">
      <div className="text m-12 p-4 bg-white bg-opacity-70 flex flex-col">
        <div className="relative z-10 flex flex-col sm:flex-wrap">
        <h1 className = "lg:text-9xl m-8 mt-3">Hello!</h1>
        <h1 className = "lg:text-9xl m-8 mt-5">I'm Lauren, a</h1>
        <h1 className = "lg:text-8xl m-8 mb-4 mt-5">Full Stack Software Developer</h1>
        <div className="picture">
        <img src = "/images/icon.png"
        className = "lg:w-full"/>
        </div>
        </div>
      </div>


    </div>
    </div>
    <div className = "mb-52 mt-52 w-full h-screen p-20 ">
        <h1 className="text-center font-semibold text-6xl mb-20">What Can I Do For You?</h1>
        <div className=" pictures flex flex-row w-full justify-between mt-6">
            <img
            className = "img"

            src ="/images/teacher.png"
            />
             <img
            className = "img "

            src ="/images/artist.png"
            />
             <img
            className = "img"

            src ="/images/programmer.png"
            />
           </div>
           <div className="flex flex-col md:flex-row items-center justify-between w-full mt-7 lg:px-50 text-center">
          <h1 className="titles w-full md:w-1/3 lg:px-8">Leader</h1>
          <h1 className="titles w-full md:w-1/3">Designer</h1>
          <h1 className="titles w-full md:w-1/3">Developer</h1>
        </div>

        {/* Descriptions Section */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full mt-7 lg:px-10 text-center">
          <h1 className="lg:w-1/4 w-full md:w-1/3 mb-6 md:mb-0">
            Leadership: my experience as a teacher has given me both leadership
            experience and the ability to guide others towards understanding
            concepts.
          </h1>
          <h1 className="lg:w-1/4 w-full md:w-1/3 mb-6 md:mb-0">
            Design: my background in art and design gives me strong skills in
            front end development that can be utilized for mock ups as well as
            building UI from the ground up.
          </h1>
          <h1 className="lg:w-1/4 w-full md:w-1/3">
            Programming: after doing some self-teaching to prove myself for the
            program, I enrolled into a master's in computer science and dived
            deeper into advanced programming topics while fortifying my
            programming and logical thinking skills.
          </h1>
        </div>
      </div>
    <div className = "bottom-0 w-full lg:static pt-20">
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

/* <div className = "w-full h-screen p-20">
        <h1 className="text-center font-semibold text-6xl mb-20">What Can I Do For You?</h1>
        <div className="flex flex-row w-full justify-between mt-6">
            <Image 
            className = "rounded-full"
            height = {300} 
            width = {300}
            src ="/images/teacher.png"
            />
             <Image 
            className = "rounded-full "
            height = {300} 
            width = {300}
            src ="/images/teacher.png"
            />
             <Image 
            className = "rounded-full "
            height = {300} 
            width = {300}
            src ="/images/teacher.png"
            />
           </div> 
           <div className ="flex flex-row justify-between w-full mt-7 pl-12">
            <h1 className = "w-1/6">Leadership: my exerpeince as a  teacher has given me both leadership experience and the ability to guide others towards understanding concepts</h1>
            <h1 className = "w-1/6">Leadership: my exerpeince as a  teacher has given me both leadership experience and the ability to guide others towards understanding concepts</h1>
            <h1 className = "w-1/6">Leadership: my exerpeince as a  teacher has given me both leadership experience and the ability to guide others towards understanding concepts</h1>
            </div>
      </div>
      */