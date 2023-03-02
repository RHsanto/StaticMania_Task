const Banner = () => {
  return (
    <div className="container mx-auto">
      <div className="block  lg:flex lg:justify-between mx-10 lg:mx-[208px] my-[100px] items-center lg:gap-28">
        {/* banner content */}
        <div className="lg:px-12">
          <h1 className="leading-[52px] ">Become The Hero Of Your Own Story</h1>
          <p className=" py-5">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
            invidunt ut labore et dolore magna aliquyam erat.
          </p>
          {/* email input */}
          <div className="flex">
            <input
              className="py-2 px-8 outline-none bg-off-white"
              placeholder="Enter Your Email Id"
              type="text"
            />
            <button className="bg-primary py-2 px-8 text-off-white hover:bg-sub-primary">Subscribe</button>
          </div>
        </div>

        <div className="mt-10 lg:mt-0 flex justify-around gap-12 items-center">
          <div className="w-[32px] h-[99px] bg-primary"></div>
          <div className="w-[32px] h-[256px] bg-secondary"></div>
          <div className="w-[32px] h-[178px] bg-primary"></div>
          <div className="w-[32px] h-[99px] bg-secondary"></div>
          <div className="w-[32px] h-[256px] bg-primary"></div>
          <div className="w-[32px] h-[178px] bg-secondary"></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
