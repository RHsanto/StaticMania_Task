import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-primary text-white py-5">
      <div className="container mx-auto lg:flex justify-between items-center">
        <h3 className="px-5 lg:px-0">
          {" "}
          <Link href="/">Finsweet</Link>
        </h3>
        <div className="hidden lg:flex font-bold justify-between list-none gap-20 items-center">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/episode">Episode</Link>
          </li>
          <li>
            <Link href="/article">Article</Link>
          </li>

          <button className=" bg-secondary rounded px-5 py-2 hover:bg-white hover:text-secondary ">
            <Link href="/contact">Join Us</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
