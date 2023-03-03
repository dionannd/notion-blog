import { Properties, Tags } from "@/lib/interface";
import React from "react";
import BaseHead from "./BaseHead";
import Footer from "./Footer";
import Header from "./Header";

interface Props {
  children: React.ReactNode;
  datas?: Properties[];
}

const Layout = ({ children, datas }: Props) => {
  return (
    <div>
      <BaseHead />

      <main className="break-words bg-orange-50 leading-6 text-zinc-900 transition-colors duration-500 dark:bg-zinc-900 dark:text-zinc-300">
        <Header datas={datas} />
        <div className="h-screen pt-[56px]">{children}</div>
        <Footer />
      </main>
    </div>
  );
};

export default Layout;
