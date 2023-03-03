import Image from "next/image";
import React from "react";

const MastHead = () => {
  return (
    <section className="relative mb-6 flex h-80 items-center justify-center">
      <div className="absolute h-full w-full overflow-hidden">
        <Image
          src="/images/banner.jpg"
          className="absolute inset-0 min-h-full min-w-full object-cover opacity-30"
          alt="Banner Image"
          width={2000}
          height={1000}
        />
      </div>
      <div className="z-10 px-8 text-center shadow-black drop-shadow-lg">
        <div className="mb-4 text-sm uppercase">Welcome to</div>
        <div className="font-mplus text-4xl font-medium">
          My personal <span className="text-orange-500">blog</span>
        </div>
      </div>
    </section>
  );
};

export default MastHead;
