import Content from "@/components/Content";
import Layout from "@/components/Layout";
import MastHead from "@/components/MastHead";
import NoContent from "@/components/NoContent";
import { HOMEPAGE_URL } from "@/lib/config";
import { Properties } from "@/lib/interface";
import { getDatabase } from "@/lib/notion";
import type { NextPage } from "next";
import { IoArrowForward } from "react-icons/io5";

export const databaseId = process.env.NOTION_DATABASE_ID;

export const getStaticProps = async () => {
  const database = await getDatabase(databaseId as string);

  return {
    props: {
      datas: database,
    },
  };
};

interface Props {
  datas: Properties[];
}

const Home = ({ datas }: Props) => {
  return (
    <Layout datas={datas}>
      <MastHead />
      <Content>
        <section>
          <p className="mb-8 indent-4">
            I'm a freelancer working as a front-end developer, I spend hours
            coding, and I'm a forgetful person, so I wanted to create a blog to
            help me remember what I've done or fix a bug.
            <a
              className="inline-flex items-center gap-1 indent-1 text-orange-500"
              href={HOMEPAGE_URL}
            >
              Read more about me <IoArrowForward className="inline" />
            </a>
          </p>
        </section>
        {datas.length === 0 ? (
          <section>
            {datas.map((post: any, idx: number) => (
              <h1 key={idx}>Test</h1>
            ))}
          </section>
        ) : (
          <NoContent />
        )}
      </Content>
    </Layout>
  );
};

export default Home;
