
import { Link } from 'react-scroll'; // install with: npm install react-scroll

function Navbar() {



  return (
    <header className="p-6 bg-gray-800 text-center shadow-md flex flex-col sm:flex-row justify-between items-center">
      <div>
        <h1 className="text-3xl text-gray-300 font-extrabold text-center font-serif tracking-wide">AL AFATH A</h1>
        <p className="text-gray-300 mt-1">Software Developer | Web Developer</p>
      </div>

      <nav className="flex gap-4 mt-4 sm:mt-0">
  {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
    <Link
      key={item}
      to={item}
      smooth={true}
      duration={500}
      className="text-gray-300 hover:text-blue-400 transition duration-200 cursor-pointer text-base sm:text-lg"
    >
      {item.charAt(0).toUpperCase() + item.slice(1)}
    </Link>
  ))}
</nav>



      
    </header>
  );
}

export default Navbar;
