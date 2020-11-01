import React from "react";
import Header from "../components/header";
import Repo from "../components/repos";
import RepoCodigo from "../components/codigofacilito"
import Medium from "../components/medium";
import EdNav from "../components/education-nav";

export default function Home() {
  return (
    <div>
      <Header/>
      <EdNav/>
      <Repo/>
      <RepoCodigo/>
      <Medium/>

    </div>
  );
    
}
