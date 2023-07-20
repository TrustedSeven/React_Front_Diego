import React from "react";

import Header from "../layout/Header";

export default function Home() {
  return (
    <div className="flex flex-row p-5 min-h-screen">
      <div className="bg-[#FF0000] ">aaaaaaaa00000000000000000</div>
      <div>
        <div>
          <Header />
        </div>
        <div>
          <div>Hello</div>
          <div className="flex flex-row">
            <div>Empresa</div>
            <div>Personal</div>
            <div>Vehiculos</div>
            <div>Maquinaria</div>
          </div>
        </div>
      </div>
    </div>
  );
}
