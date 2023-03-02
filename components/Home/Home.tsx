import Articles from "../Articles/Articles";
import Footer from "../common/Footer";
import Navbar from "../common/Navbar";
import Sponsor from "../Sponsors/Sponsor";
import Banner from "./Banner";
import Podcast from "./Podcast";



const HomePage = () => {
  return (
    <div>
     <Navbar/>
     <Banner/>
     <Podcast/>
     <Articles/>
     <Sponsor/>
     <Footer/>
    </div>
  );
};

export default HomePage;