import Image from "next/image";
import ep1 from "../../../images/ep-1.png";
import ep2 from "../../../images/ep-2.png";
import ep3 from "../../../images/ep-3.png";
import { BsFillPlayFill } from "react-icons/bs";
const RecentEpisodes = () => {
  return (
    <div className="container mx-auto">
      <div className="mb-16 lg:flex justify-between items-center px-5">
        <div>
          <h2>Recent Episodes</h2>
          <p className="w-96">
            Apparently we had reached a great height in the atmosphere, for the sky was a dead
            black.
          </p>
        </div>
        <div>
          <button className="mt-5 lg:mt-0 bg-primary text-off-white py-3 px-8">
            See All Episodes
          </button>
        </div>
      </div>
      {/* card items */}
      <div className="grid lg:grid-cols-3  pl-9 lg:pl-0">
        <div className="card">
          <Image src={ep1} alt="img" />
          <div className="card-content w-[414px]">
            <h3 className="pt-8 pb-4">Ep 1: How to build a world-class business brand</h3>
            <p>Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.</p>
            <p className="flex items-center gap-5 mt-5">
              <p className="bg-primary cursor-pointer hover:bg-sub-primary text-[#ffff] p-2 rounded-full">
                {" "}
                <BsFillPlayFill />
              </p>
              Listen Now
            </p>
          </div>
        </div>
        <div className="card">
          <Image src={ep2} alt="img" />
          <div className="card-content w-[414px]">
            <h3 className="pt-8 pb-4">Ep 1: How to build a world-class business brand</h3>
            <p>Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.</p>
            <p className="flex items-center gap-5 mt-5">
              <p className="bg-primary cursor-pointer hover:bg-sub-primary text-[#ffff] p-2 rounded-full">
                {" "}
                <BsFillPlayFill />
              </p>
              Listen Now
            </p>
          </div>
        </div>
        <div className="card">
          <Image src={ep3} alt="img" />
          <div className="card-content w-[414px]">
            <h3 className="pt-8 pb-4">Ep 1: How to build a world-class business brand</h3>
            <p>Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.</p>
            <p className="flex items-center gap-5 mt-5">
              <p className="bg-primary cursor-pointer hover:bg-sub-primary text-[#ffff] p-2 rounded-full">
                {" "}
                <BsFillPlayFill />
              </p>
              Listen Now
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentEpisodes;
