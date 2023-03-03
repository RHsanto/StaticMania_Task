/* eslint-disable @next/next/no-img-element */

const Sponsor = () => {
  return (
    <div className="relative z-50 container mx-auto bg-primary text-center text-white p-20">
      <h2>Our Sponsors</h2>
      <div className="grid lg:grid-cols-5 grid-cols-2 pt-16 gap-10">
        <img src="/Logo.png" alt="logo1" />
        <img src="/Logo2.png" alt="logo2" />
        <img src="/Logo3.png" alt="logo3" />
        <img src="/Logo4.png" alt="logo4" />
        <img src="/Logo5.png" alt="logo5" />
      </div>
    </div>
  );
};

export default Sponsor;
