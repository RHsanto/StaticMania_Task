import image1 from "../../images/add1.png";
import image2 from "../../images/add2.png";
import image3 from "../../images/add3.png";
import image4 from "../../images/add4.png";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="bg-black text-white  -mt-24">
        <div className="container mx-auto py-52">
          <div className="lg:flex lg:justify-between pl-10 ">
            <div className="w-[374px]">
              <h1>Finsweet</h1>
              <p className="py-5">
                Finsweet is a web design and development agency that specializes in creating custom,
                interactive websites using a variety of cutting-edge technologies.{" "}
              </p>
              <div className="flex gap-10">
                <h3>
                  <Link target="_blank" href="https://www.facebook.com/thatsfinsweet">
                    <FaFacebookF />
                  </Link>
                </h3>
                <h3>
                  <Link target="_blank" href="https://www.linkedin.com/company/finsweet/">
                    <FaLinkedinIn />
                  </Link>
                </h3>
                <h3>
                  <Link target="_blank" href="https://www.instagram.com/thatsfinsweet">
                    <FaInstagram />
                  </Link>
                </h3>
              </div>
            </div>

            <div className="mt-10 lg:mt-0">
              <h4 className="mb-8">Pages</h4>
              <p className="pb-4">
                <Link href='/'>Home</Link>
              </p>
              <p className="pb-4">Podcast</p>
              <p className="pb-4">Host</p>
              <p>Blog</p>
            </div>
            <div className="mt-10 lg:mt-0">
              <h4 className="mb-8">Reach Us</h4>
              <p className="pb-4">
                <Link href='/contact'>Contact</Link> </p>
              <p><Link href='/about'>About</Link></p>
            </div>
            <div className="mt-10 lg:mt-0">
              <h4 className="mb-8">Subscribe</h4>
              <>
                <Image className="pb-10" src={image1} alt="img" />
                <Image className="pb-10" src={image2} alt="img" />
                <Image className="pb-10" src={image3} alt="img" />
                <Image src={image4} alt="img" />
              </>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary text-center text-white font-bold">
        <p className="py-5">© Copyright RHsanto 2023</p>
      </div>
    </>
  );
};

export default Footer;
