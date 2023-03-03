/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import aboutImg from "../../images/4760250.jpg";
const About = () => {
  return (
    <div className="container mx-auto">
      <div className="lg:m-32 m-10 lg:flex justify-between gap-10 items-center">
        <div>
          <h1>About Finsweet Podcast</h1>
          <p className="py-5 ">
            Finsweet Podcast is a podcast series produced by the Finsweet agency, featuring
            interviews with experts in the web design and development industry. Hosted by Finsweet's
            founder Alex Carpenter, the podcast covers a wide range of topics related to web design,
            including trends, techniques, and best practices.
          </p>

          <button className="bg-primary text-white py-3 px-8">Subscribe Now!</button>
        </div>
        <div className="mt-20 lg:mt-0">
          <Image src={aboutImg} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default About;
