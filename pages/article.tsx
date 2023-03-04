import AllArticle from "@/components/Articles/AllArticle";
import Head from "next/head";


const article = () => {
  return (
    <div>
      <Head><title>Article</title></Head>
      <AllArticle/>
    </div>
  );
};

export default article;