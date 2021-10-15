import React from 'react';
import Seo from "../../seo";

export default function AboutUsPage({counter}) {
  return (
    <>
      <Seo title={'About Us'}/>
      <h1>About us</h1>
      {counter}
    </>
  );
}
