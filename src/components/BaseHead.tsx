import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

const defaultMeta = {
  title: "My personal blog | Dian Ananda",
  siteName: "Dian Ananda",
  description: "This is my personal blog to make my work easier!",
  url: "https://blog-dion.vercel.app/",
  type: "website",
  robots: "follow, index",
  image: "https://blog-dion.vercel.app/images/banner.jpg",
};

interface Props {
  title?: string;
}

const BaseHead = ({ title }: Props) => {
  const router = useRouter();
  const meta = {
    ...defaultMeta,
  };

  const siteTitle = title ? `${title} | ${meta.siteName}` : meta.title;
  const siteDesc = meta.description;
  const siteImage = meta.image;
  const siteUrl = `${meta.url}${router.asPath}`;

  return (
    <Head>
      {/* Global Metadata */}
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <meta name="robots" content="max-image-preview:large" />

      {/* Primary Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="title" content={siteTitle} />
      <meta name="description" content={siteDesc} />
      <link rel="canonical" href={siteUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDesc} />
      <meta property="og:image" content={siteImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={siteUrl} />
      <meta property="twitter:title" content={siteTitle} />
      <meta property="twitter:description" content={siteDesc} />
      <meta property="twitter:image" content={siteImage} />
    </Head>
  );
};

export default BaseHead;
