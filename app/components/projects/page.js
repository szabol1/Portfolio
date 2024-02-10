import Image from "next/image";
import NavBar from "../navbar/page";
import Footer from "../footer/page"
export default function Projects(){
    return(
        <div className = "h-screen w-screen bg-slate-100 pt-16">
            <div className = "bg-slate-100">
            <div className="container mx-auto bg-slate-100 flex justify-center ">
            
            {/* Image 1 with Link */}
           
            <a href="https://example.com/page1" target="_blank" className=" mx-12">
            <div className = "transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30">
            <Image src="/images/notebook.png" alt="Image 1" width={400} height={300} className = "rounded-lg object-cover overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-100 transition duration-300 ease-in-out hover:opacity-80" />
           
            <div className="p-4  bg-white">
                <p className="text-lg font-semibold">Image 1</p>
                <p className="text-sm text-gray-500">Click to view</p>
            </div>
            </div>
           
            <h1 className = "text-8xl mt-8 text-center">Out</h1>
          
            </a>
         

            {/* Image 2 with Link */}
            <a href="https://example.com/page2" target="_blank" className=" mt-18 pt-3 rounded-lg mx-12 min-w-0">
           
            <h1 className = "drop-shadow-xl -my-3 text-8xl text-center z-auto">Check</h1>
            <div className = "transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30">
            <Image src="/images/music logo.png" alt="Image 2" width={400} height={300} className = "rounded-lg object-cover mt-14 min-w-0 bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-100 transition duration-300 ease-in-out hover:opacity-80"/>
            
            <div className="p-4 bg-white">
                <p className="text-lg font-semibold bg-white">Image 2</p>
                <p className="text-sm text-gray-500">Click to view</p>
            </div>
            </div>
            </a>

            {/* Image 3 with Link */}
            <a href="https://example.com/page3" target="_blank" className=" rounded-lg mx-12">
            <div className = "transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30">
            <Image src="/images/recipes.png" alt="Image 3" width={400} height={300} className = "object-cover bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-100 transition duration-300 ease-in-out hover:opacity-80"/>
           
            <div className="p-4 bg-white">
                <p className="text-lg font-semibold">Image 3</p>
                <p className="text-sm text-gray-500">Click to view</p>
            </div>
            </div>
            <h1 className = "drop-shadow-xl text-7xl mt-8 text-center">My Work</h1>
            </a>
            </div>
            
            <div className="container mx-auto bg-slate-100 flex justify-center py-16 ">
            
            {/* Image 1 with Link */}
            <a href="https://example.com/page1" target="_blank" className=" rounded-lg mx-12 ">
            <div className = "transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30">
            <Image src="/images/notebook.png" alt="Image 1" width={400} height={300} className = "object-cover bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-100 transition duration-300 ease-in-out hover:opacity-80" />
           
            <div className="p-4 bg-white">
                <p className="text-lg font-semibold">Image 1</p>
                <p className="text-sm text-gray-500">Click to view</p>
            </div>
            </div>
            </a>

            {/* Image 2 with Link */}
            <a href="https://example.com/page2" target="_blank" className=" mt-18 pt-3 rounded-lg mx-12 min-w-0">
           
            <div className = "transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30">
            <Image src="/images/music logo.png" alt="Image 2" width={400} height={300} className = " object-cover mt-14 min-w-0 bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-100 transition duration-300 ease-in-out hover:opacity-80"/>
           
            <div className="p-4 bg-white">
                <p className="text-lg font-semibold bg-white">Image 2</p>
                <p className="text-sm text-gray-500">Click to view</p>
            </div>
            </div>
            </a>

            {/* Image 3 with Link */}
            <a href="https://example.com/page3" target="_blank" className=" rounded-lg mx-12">
            <div className = "transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30">
            <Image src="/images/recipes.png" alt="Image 3" width={400} height={300} className = "object-cover bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-100 transition duration-300 ease-in-out hover:opacity-80"/>
          
            <div className="p-4 bg-white">
                <p className="text-lg font-semibold">Image 3</p>
                <p className="text-sm text-gray-500">Click to view</p>
            </div>
            </div>
           
            </a>
            </div>
            </div>
            <hr className = " border-t-1 border-gray-500"></hr>
            <Footer />
        </div>
    );
};

