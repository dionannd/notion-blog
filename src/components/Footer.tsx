import React from "react";

import { HOMEPAGE_URL } from "@/lib/config";

const Footer = () => {
  const today = new Date();

  return (
    <footer className="p-4 text-center text-zinc-500">
      &copy; {today.getFullYear()} <a href={HOMEPAGE_URL}>Dian Ananda</a>. All
      rights reserved.
    </footer>
  );
};

export default Footer;
