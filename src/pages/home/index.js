import React from "react";
import Collection from "../../components/collection";
import Featured from "../../components/featured";
import Header from "../../components/header";

export default function Home() {
  return (
    <>
      <Header />
      <Featured />
      <Collection />
    </>
  );
}
