import Image from "next/image";
import { DM_Serif_Display  } from "next/font/google";
import NavBar from "../navbar/page";
import Footer from "../footer/page"
import "../projects/project.css"
const dm_serif_display = DM_Serif_Display({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-dm-serif-display'
})
export default function Projects(){
    return(
        <div className = {dm_serif_display.className}>
        <div className = "w-full h-full bg-slate-100 flex flex-wrap">
             <div className = "w-1/2">
                <div className="flex flex-wrap flex-col pt-20 items-center text-blue-950 bg-blue-200 w-full h-full">
                <div className="text">
                <h1 className="text-8xl">Looking For a Full Stack Developer?</h1>
                <h2 className="text-5xl">Check Out</h2>
                <h2 className="text-5xl">My Projects!</h2>
                </div>
                </div>
             </div>

             

            <div className = "bg-slate-100 w-1/2 ml-auto flex flex-wrap p-2">
            <div className=" mx-auto flex justify-center">
            
            {/* Image 1 with Link */}
            <a href="https://github.com/szabol1/Note-taking" target="_blank" className="p-2 rounded-lg ">
            <div className = "transition duration-300 ease-in-out hover:shadow-lg shadow-md dark:hover:shadow-black/30">
            <Image src="/images/notebook.png" alt="Image 1" width={800} height={800} className = "object-cover bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-100 transition duration-300 ease-in-out hover:opacity-80" />
         
            </div>
            </a>

            {/* Image 2 with Link */}
            <a href="https://github.com/szabol1/Mustic-Recommender" target="_blank" className="p-2 rounded-lg min-w-0">
           
            <div className = "transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30 shadow-md">
            <Image src="/images/music logo.png" alt="Image 2" width={800} height={800} className = " object-cover bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-100 transition duration-300 ease-in-out hover:opacity-80"/>
           
            
            </div>
            </a>
            </div>

            <div className=" mx-auto bg-slate-100 flex justify-center ">
            
            {/* Image 1 with Link */}
            <a href="https://example.com/page1" target="_blank" className=" rounded-lg p-2 ">
            <div className = "transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30 shadow-md">
            <Image src="/images/recipes.png" alt="Image 1" width={800} height={800} className = "object-cover bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-100 transition duration-300 ease-in-out hover:opacity-80" />
           
         
            </div>
            </a>

            {/* Image 2 with Link */}
            <a href="https://example.com/page2" target="_blank" className="p-2 rounded-lg min-w-0">
           
            <div className = "transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30 shadow-md">
            <Image src="/images/stock.png" alt="Image 2" width={800} height={800} className = " object-cover bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-100 transition duration-300 ease-in-out hover:opacity-80"/>
           
      
            </div>
            </a>
            </div>
            </div>
          

           </div>
           <hr className = " border-t-1 border-gray-500"></hr>
           <Footer/>
        </div>
    );
};

