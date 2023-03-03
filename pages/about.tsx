import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import About from "@/components/Home/About";
import Sponsor from "@/components/Sponsors/Sponsor";
import Head from "next/head";


const about = () => {
  return (
    <div>
      <Head>
        <title>About</title>
      </Head>
      <Navbar/>
      <About/>
      <Sponsor/>
      <Footer/>
    </div>
  );
};

export default about;