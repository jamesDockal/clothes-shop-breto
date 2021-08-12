import React from "react";
import Collection from "../../components/collection";
import Featured from "../../components/featured";
import Header from "../../components/header";
import Contact from "../../components/contact";

export default function Home() {
  return (
    <>
      <Header />
      <Featured />
      <Collection />
      <Contact />
    </>
  );
}
