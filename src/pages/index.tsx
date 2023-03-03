import Content from "@/components/Content";
import Layout from "@/components/Layout";
import { getDatabase } from "@/lib/notion";
import type { NextPage } from "next";

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
    <Layout>
      <Content>
        <section>
          {datas.map((post: any, idx: number) => (
            <h1 key={idx}>Test</h1>
          ))}
        </section>
      </Content>
    </Layout>
  );
};

export default Home;
