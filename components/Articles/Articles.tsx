/* eslint-disable @next/next/no-img-element */
import { allArticle } from "../AllContent/Content";

const Articles = () => {
  return (
    <div className="container mx-auto my-32">
      <div className="grid lg:grid-cols-3 justify-center gap-5 ">
        <div className="bg-off-white overflow-hidden m-10 lg:m-0">
          <div className="art-con p-10 ">
            <h2>
              Read our <br />
              articles & news
            </h2>
            <p className="text-primary mt-4 hover:text-sub-primary cursor-pointer font-semibold">
              {" "}
              See more
            </p>
          </div>
          <div className="flex justify-between h-[320px] rotate-45 mt-20">
            <div className="w-[74px] h-[250px] bg-primary mt-20 "></div>
            <div className="w-[74px] h-[614px] bg-secondary -mt-40"></div>
            <div className="w-[74px] h-[420px] bg-primary -mr-4"></div>
          </div>
        </div>
        {allArticle?.map(data => (
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
  );
};

export default Articles;
