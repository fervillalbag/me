import type { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Fernando Villalba</title>
        <meta name="description" content="fervillalbag" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="p-4">
        <h1>Fernando Villalba</h1>

        <div className="mt-4">
          <Image
            src="/profile.jpeg"
            alt=""
            width={140}
            height={140}
          />
        </div>

        <div className="text-sm text-slate-400 mt-4">
          uwu &copy; 2021
        </div>
      </div>
    </div>
  );
};

export default Home;
