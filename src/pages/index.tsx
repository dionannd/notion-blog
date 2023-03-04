/* eslint-disable @typescript-eslint/no-explicit-any */
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { IoArrowForward } from "react-icons/io5";

import { databaseId, HOMEPAGE_URL } from "@/lib/config";
import { getDatabase, getDb } from "@/lib/notion";

import Content from "@/components/Content";
import Layout from "@/components/Layout";
import MastHead from "@/components/MastHead";
import NoContent from "@/components/NoContent";
import { Text } from "@/components/Text";

import { IPages } from "@/types/pages";

interface Props {
  pages: IPages[];
}

const Home: NextPage<Props> = ({ pages }: Props) => {
  return (
    <Layout className={pages.length > 0 ? "h-full" : "h-screen"}>
      <MastHead />
      <Content>
        <section>
          <p className="mb-8 indent-4">
            I&apos;m a freelancer working as a front-end developer, I spend
            hours coding, and I&apos;m a forgetful person, so I wanted to create
            a blog to help me remember what I&apos;ve done or fix a bug.
            <a
              className="inline-flex items-center gap-1 indent-1 text-orange-500"
              href={HOMEPAGE_URL}
            >
              Read more about me <IoArrowForward className="inline" />
            </a>
          </p>
        </section>
        {pages.length > 0 ? (
          <section>
            <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {pages.map((post: IPages, idx: number) => (
                <li className="mb-5 text-center" key={idx}>
                  <Link href={`/blog/${post.id}`}>
                    <div className="relative w-full duration-300 hover:scale-105">
                      <Image
                        className="aspect-[2] rounded-xl border border-slate-300 object-cover dark:border-zinc-700"
                        src={
                          post.cover?.external?.url
                            ? (post.cover?.external?.url as string)
                            : "/images/default-fallback-image.webp"
                        }
                        width={720 * 2}
                        height={720}
                        alt="Thumbnail"
                      />
                    </div>

                    <div className="flex flex-col">
                      <div className="mt-3 mb-1 font-mplus text-xl font-bold">
                        <Text text={post.properties?.Name?.title} />
                      </div>

                      {post.properties?.Description && (
                        <Text
                          className="opacity-70"
                          text={post.properties.Description.rich_text}
                        />
                      )}
                    </div>
                  </Link>
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
  const database = await getDb(databaseId);
  const pages = await getDatabase(databaseId);

  return {
    props: {
      databases: database,
      pages: pages,
    },
    revalidate: 1,
  };
};

export default Home;
