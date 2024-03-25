
export default function Footer(){

    return(
      <div className="bg-white text-black p-12 mt-auto">
      <div>
        <p>&copy; 2024 Lauren Szabo. All rights reserved.</p>
      </div>
      <div className="mt-4">
        <ul className="flex space-x-4">
          <li><a href="#home" className="hover:text-gray-300">Home</a></li>
          <li><a href="#portfolio" className="hover:text-gray-300">Portfolio</a></li>
          <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
        </ul>
      </div>
    </div>

    );

};