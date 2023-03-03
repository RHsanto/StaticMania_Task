import Image from "next/image";
import Footer from "../common/Footer";
import Navbar from "../common/Navbar";
import Sponsor from "../Sponsors/Sponsor";
import contact from "../../images/contact.png";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto gap-20 grid grid-cols-2 lg:mt-20 lg:mb-40 my-10">
        {/* contact form */}
        <div>
          <h2>Lets talk !</h2>
          <div className="my-10">
            <input className="border-secondary border-2 p-5 w-full outline-none rounded"
              type="text"
              placeholder="Your Name"
            />{" "}
          </div>
          <div className="mb-10">
            <input className="border-secondary border-2 p-5 w-full outline-none rounded"
              type="email"
              placeholder="Your Email"
            />
          </div>
          <div>
            <textarea className="border-secondary border-2 p-5 w-full outline-none rounded"
              placeholder="Write Your Message..."
            />
          </div>

          <button type="submit" className="mt-10 bg-secondary px-10 py-4 border-2 rounded text-white font-bold hover:text-secondary hover:bg-white hover:border-secondary hover:border-2">Submit</button>
        </div>
        <Image src={contact} alt="" />
      </div>
      <Sponsor />
      <Footer />
    </div>
  );
};

export default Contact;
