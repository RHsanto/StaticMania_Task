/* eslint-disable @next/next/no-img-element */
import { Article } from "../AllContent/Content";
import Footer from "../common/Footer";
import Navbar from "../common/Navbar";
import Sponsor from "../Sponsors/Sponsor";


const AllArticle = () => {
  return (
    <div>
      <Navbar/>
      <div className="container mx-auto my-20">
        <div className="text-center p-10">
          <h2>All Articles</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi dolore natus et dignissimos tempora odit!</p>
        </div>
      <div className="grid lg:grid-cols-3 justify-center gap-5 ">
      {Article?.map(data => (
          <div key={data?.id} className="card mb-10 px-10 lg:px-0">
            <img className="w-full" src={data?.img} alt="img" />
            <div className="card-content ">
              <h3 className="pt-8 pb-4">{data?.title}</h3>
              <p>{data?.description}</p>
              <p className="text-primary mt-4 hover:text-sub-primary cursor-pointer font-semibold">
                {" "}
                Read Now
              </p>
            </div>
          </div>
        ))}
        </div>
      </div>
      <Sponsor/>
      <Footer/>
    </div>
  );
};

export default AllArticle;