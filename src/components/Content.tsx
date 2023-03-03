import clsxm from "@/lib/clsxm";
import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Content = ({ children, className }: Props) => {
  return (
    <article className={clsxm("mx-auto max-w-3xl px-8", className)}>
      {children}
    </article>
  );
};

export default Content;
