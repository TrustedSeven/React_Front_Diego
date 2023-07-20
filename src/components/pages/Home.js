import React from "react";

import Header from "../layout/Header";
import Content from "../layout/Content";

export default function Home() {
  return (
    <div className="flex flex-row p-5 min-h-screen">
      <div className="bg-[#FF0000] ">aaaaaaaa00000000000000000</div>
      <div className="grow p-5">
        <div>
          <Header />
        </div>
        <div>
          <Content />
        </div>
      </div>
    </div>
  );
}
