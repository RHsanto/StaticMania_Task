import Link from "next/link";


const Navbar = () => {
  return (
    <div className="bg-primary text-white py-5">
      <div className="container mx-auto flex justify-between items-center">
      <h3>Finsweet</h3>
      <div className="flex font-bold justify-between list-none gap-20 items-center">
        <li><Link href='/'>Home</Link></li>
        <li><Link href='/about'>About</Link></li>
        <li><Link href='/'>Podcast</Link></li>
        <li><Link href='/'>Blog</Link></li>
        <li><Link href='/contact'>Contact</Link></li>
  
        <button className="bg-secondary rounded px-5 py-2 hover:bg-white hover:text-secondary ">Join Us</button>
      </div>
    </div>
    </div>
  );
};

export default Navbar;