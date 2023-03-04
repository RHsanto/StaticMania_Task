import AllEpisode from "@/components/Home/AllEpisodes/AllEpisode";
import Head from "next/head";


const episode = () => {
  return (
    <div>
      <Head><title>Episode</title></Head>
      <AllEpisode/>
    </div>
  );
};

export default episode;