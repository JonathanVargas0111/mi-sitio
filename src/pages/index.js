import React from "react";
import Header from "../components/header";
import Repo from "../components/repos";
import RepoCodigo from "../components/codigofacilito"
import Medium from "../components/medium";

export default function Home() {
  return (
    <div>
      <Header/>
      <Repo/>
      <RepoCodigo/>
      <Medium/>
    </div>
  );
    
}
