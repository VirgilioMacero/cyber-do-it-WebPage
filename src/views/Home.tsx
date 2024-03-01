import React from "react";
import Header from "../components/Header";
import Carrousel from "../components/Carrousel";
import HalfAndHalf from "../components/HalfAndHalf";
import Address from "../components/Address";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <Carrousel />
      <HalfAndHalf />
      <Address />
    </div>
  );
}
