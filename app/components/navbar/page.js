import { Gruppo } from "next/font/google";
import "../../globals.css";
import Image from "next/image";

const Gruppo_init = Gruppo({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-Gruppo',
});
export default function NavBar() {
  return (

  <div>
      <div className = {Gruppo_init.variable}  >
    <div>
    <h1 className = "bg-white py-3.5 text-5xl tracking-wide text-center Gruppo">LAUREN SZABO</h1>
    <h3 className = " bg-white border-b border-1 border-blue-950 pb-5 text-xl tracking-widest text-center Gruppo">Developing and Designing With Passion and Skill</h3>
   <main className=" bg-white px-1 flex justify-center ">
      <nav className = "pt-3 mb-4 w-11/12">
        <ul className = "flex justify-between">
          <li><a className = "hover:text-blue-600 duration-100 text-black" href = "/">Home</a></li>
          <li><a className = "hover:text-blue-600 duration-100 text-black" href = "/components/ContactPage">Contact</a></li>
          <li><a className = "hover:text-blue-600 duration-100 text-black" href = "/components/resume">Resume</a></li>
          <li><a className = "hover:text-blue-600 duration-100 text-black" href = "/components/projects">Projects</a></li>
          <li><a className = "hover:text-blue-600 duration-100 text-black" href = "/components/about">About</a></li>
          <li><a className = "hover:text-blue-600 duration-100 text-black" href = "laurenszaboart.weebly.com">Artwork</a></li>

        </ul>
      </nav>
  </main>  
</div>
</div>
</div>

  );
}

