import React from "react";
import Link from "next/link";

const Index = () => (
  <section>
    <h1>Home Page - Next.js</h1>
    <Link href="/about">
      <button>About this is Project</button>
      {/* <a>This is Project Home</a> */}
    </Link>
  </section>
);

export default Index;
