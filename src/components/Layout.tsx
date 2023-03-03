import clsxm from "@/lib/clsxm";
import { RootObject } from "@/lib/interface";
import React from "react";
import BaseHead from "./BaseHead";
import Footer from "./Footer";
import Header from "./Header";

interface Props {
  children: React.ReactNode;
  datas?: RootObject[];
  className?: string;
  title?: string;
}

const Layout = ({ children, datas, className, title }: Props) => {
  return (
    <div>
      <BaseHead title={title} />

      <main className="break-words bg-orange-50 leading-6 text-zinc-900 transition-colors duration-500 dark:bg-zinc-900 dark:text-zinc-300">
        <Header datas={datas} />
        <div className={clsxm("pt-[56px]", className)}>{children}</div>
        <Footer />
      </main>
    </div>
  );
};

export default Layout;
