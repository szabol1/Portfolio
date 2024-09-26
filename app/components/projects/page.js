import Image from "next/image";
import { DM_Serif_Display } from "next/font/google";
import NavBar from "../navbar/page";
import Footer from "../footer/page";
import "../projects/project.css";

const dm_serif_display = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-dm-serif-display",
});

export default function Projects() {
  return (
    <div className={dm_serif_display.className}>
      <div className="w-full h-full bg-slate-100 flex flex-wrap flex-col md:flex-row">
        {/* Left Section: Text with translucent background */}
        <div className="w-full md:w-1/2">
          <div className="flex flex-wrap flex-col pt-10 items-center text-blue-950 bg-blue-200/90 w-full h-full">
            <div className="text-center p-4">
            <div className = "text">
              <h1 className="text-4xl md:text-8xl leading-tight">
                Looking For a Full Stack Developer?
              </h1>
              <h2 className="text-3xl md:text-5xl mt-2">Check Out</h2>
              <h2 className="text-3xl md:text-5xl mt-2">My Projects!</h2>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section: Image Grid */}
        <div className="w-full md:w-1/2 bg-slate-100 ml-auto flex flex-wrap p-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mx-auto justify-center">
            {/* Image 1 with Link */}
            <a
              href="https://github.com/szabol1/Note-taking"
              target="_blank"
              className="p-2 rounded-lg"
            >
              <div className="transition duration-300 ease-in-out hover:shadow-lg shadow-md dark:hover:shadow-black/30">
                <Image
                  src="/images/notebook.png"
                  alt="Notebook Project"
                  width={800}
                  height={800}
                  className="object-cover bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-100 transition duration-300 ease-in-out hover:opacity-80"
                />
              </div>
            </a>

            {/* Image 2 with Link */}
            <a
              href="https://github.com/szabol1/Music-Recommender"
              target="_blank"
              className="p-2 rounded-lg"
            >
              <div className="transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30 shadow-md">
                <Image
                  src="/images/music logo.png"
                  alt="Music Recommender Project"
                  width={800}
                  height={800}
                  className="object-cover bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-100 transition duration-300 ease-in-out hover:opacity-80"
                />
              </div>
            </a>

            {/* Image 3 with Link */}
            <a
              href="https://laurens-recipes.netlify.app/"
              target="_blank"
              className="p-2 rounded-lg"
            >
              <div className="transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30 shadow-md">
                <Image
                  src="/images/recipes.png"
                  alt="Recipes Project"
                  width={800}
                  height={800}
                  className="object-cover bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-100 transition duration-300 ease-in-out hover:opacity-80"
                />
              </div>
            </a>

            {/* Image 4 with Link */}
            <a
              href="https://github.com/szabol1/Stock-Trading"
              target="_blank"
              className="p-2 rounded-lg"
            >
              <div className="transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30 shadow-md">
                <Image
                  src="/images/stock.png"
                  alt="Stock Trading Project"
                  width={800}
                  height={800}
                  className="object-cover bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-100 transition duration-300 ease-in-out hover:opacity-80"
                />
              </div>
            </a>
          </div>
        </div>
      </div>

      <hr className="border-t-1 border-gray-500" />

      {/* Footer */}
      <Footer />
    </div>
  );
}

