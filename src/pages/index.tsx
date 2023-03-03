import Content from "@/components/Content";
import Layout from "@/components/Layout";
import MastHead from "@/components/MastHead";
import NoContent from "@/components/NoContent";
import { HOMEPAGE_URL } from "@/lib/config";
import { Properties, RootObject } from "@/lib/interface";
import { getDatabase } from "@/lib/notion";
import type { NextPage } from "next";
import { IoArrowForward } from "react-icons/io5";
import Image from "next/image";

export const databaseId = process.env.NOTION_DATABASE_ID;

interface Props {
  datas: any;
}

const Home: NextPage<Props> = ({ datas }: Props) => {
  return (
    <Layout datas={datas} className={datas.length > 0 ? "h-full" : "h-screen"}>
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
        {datas.length > 0 ? (
          <section>
            <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {datas.map((post: RootObject, idx: number) => (
                <li className="mb-5 text-center" key={idx}>
                  <a href={`/blog/`}>
                    <div className="relative w-full duration-300 hover:scale-105">
                      <Image
                        className="aspect-[2] rounded-xl border border-slate-300 dark:border-zinc-700"
                        src="/images/default-fallback-image.webp"
                        width={720 * 2}
                        height={720}
                        alt="Thumbnail"
                      />
                      <div className="z-100 absolute top-0 left-0 flex h-full w-full cursor-pointer items-center justify-center bg-black/40 opacity-0 transition-all duration-500 group-hover:opacity-100">
                        <p className="text-light font-bold">Read More</p>
                      </div>
                    </div>
                    <div className="mt-3 text-xl font-bold">title</div>
                    {post.properties.Description && (
                      <div className="opacity-70">description</div>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ) : (
          <NoContent />
        )}
      </Content>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const database = await getDatabase(databaseId as string);

  return {
    props: {
      datas: database,
    },
    revalidate: 1,
  };
};

export default Home;
