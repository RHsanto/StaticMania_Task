/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { BsFillPlayFill } from "react-icons/bs";
import { FaMicrophone } from "react-icons/fa";
import { allEpisode } from "../../AllContent/Content";
const RecentEpisodes = () => {
  return (
    <div className="container mx-auto">
      <div className="mb-16 lg:flex text-center lg:text-start justify-between items-center lg:px-0 px-5">
        <div>
          <h2>Recent Episodes</h2>
          <p className="lg:w-96">
            Apparently we had reached a great height in the atmosphere, for the sky was a dead
            black.
          </p>
        </div>
        <div>
          <button className="mt-5 lg:mt-0 bg-primary
           text-off-white py-3 px-8 hover:bg-sub-primary">
            <Link href='/episode'>See All Episodes</Link>
          </button>
        </div>
      </div>
      {/* card items */}
      <div className="grid lg:grid-cols-3 justify-center gap-5">
        {allEpisode?.map(data => (
          <div key={data?.id} className="card mb-10 px-10 lg:px-0 relative">
            <img className="w-full " src={data?.img} alt="img" />
            <div className="text-white bg-primary w-10 h-10 flex justify-center items-center rounded-full absolute top-5 lg:right-5 right-16 cursor-pointer hover:bg-sub-primary">
              <FaMicrophone />
            </div>
            <div className="card-content ">
              <h3 className="pt-8 pb-4">
                Ep {data?.id}: {data?.title}
              </h3>
              <p>{data?.description}</p>
              <p className="flex items-center gap-5 mt-5 ">
                <p className="bg-primary cursor-pointer hover:bg-sub-primary text-white p-2 rounded-full">
                
                  <BsFillPlayFill />
                </p>
              <span className="text-primary cursor-pointer hover:text-sub-primary font-semibold"> Listen Now</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentEpisodes;
