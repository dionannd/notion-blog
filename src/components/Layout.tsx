import React from "react";
import BaseHead from "./BaseHead";
import Footer from "./Footer";
import Header from "./Header";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      <BaseHead />

      <main className="break-words bg-orange-50 leading-6 text-zinc-900 transition-colors duration-500 dark:bg-zinc-900 dark:text-zinc-300">
        <Header />
        <div className="h-screen pt-[56px]">{children}</div>
        <Footer />
      </main>
    </div>
  );
};

export default Layout;
