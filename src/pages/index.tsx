import { getDatabase } from "@/lib/notion";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

export const databaseId = process.env.NOTION_DATABASE_ID;

export const getStaticProps = async () => {
  const database = await getDatabase(databaseId as string);

  return {
    props: {
      datas: database,
    },
  };
};

const Home: NextPage = ({ datas }: any) => {
  console.log(datas);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        {datas.map((post: any, idx: number) => (
          <h1>Test</h1>
        ))}
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  );
};

export default Home;
