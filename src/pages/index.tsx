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

      <div className="p-4 max-w-2xl">
        <h1 className="mb-2">Fernando Villalba</h1>

        <hr />

        <h2 className="text-2xl font-bold mt-5">Sura</h2>

        <p className="mt-2">
          Sura, a personal project addressing common challenges in
          online transactions such as scams and lack of product
          authenticity.
          <br />
          <br />
          In Sura, authenticity is key. All users are verified with
          official documents to ensure a secure experience. We
          implement rigorous controls to prevent scams and ensure
          successful transactions.
          <br />
          <br />
          The goal is simple: to build an online space where trust is
          the norm. Join Sura to be part of a community that values
          honesty and integrity, changing the way we interact online.
        </p>

        <div className="mt-5 gap-x-4 grid grid-cols-3">
          <a
            target="_blank"
            href="https://github.com/fervillalbag/kiwi"
            className="bg-[#111] grid place-items-center rounded-md text-white h-12 px-5"
            rel="noreferrer"
          >
            Repo API
          </a>
          <a
            target="_blank"
            href="https://github.com/fervillalbag/pineapple"
            className="bg-[#111] grid place-items-center rounded-md text-white h-12 px-5"
            rel="noreferrer"
          >
            Repo Web
          </a>
          <a
            target="_blank"
            href="https://sura.fervillalbag.com"
            className="bg-[#111] grid place-items-center rounded-md text-white h-12 px-5"
            rel="noreferrer"
          >
            Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
