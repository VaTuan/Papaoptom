import React from "react";
import { useRouter } from "next/router";

function ShoesFilterLevel02Page() {
  const router = useRouter();

  //   console.log("====================================");
  //   console.log("router: ", router);
  //   console.log("====================================");
  return (
    <div style={{ marginTop: "300px" }}>
      <h1>Filter level 02</h1>
    </div>
  );
}

export default ShoesFilterLevel02Page;

export function getServerSideProps({ query }) {
  console.log("====================================");
  console.log("query : ", query);
  console.log("====================================");
  // if query object was received, return it as a router prop:
  //   if (query.candidateId) {
  //     return { props: { router: { query } } };
  //   }
  //   // obtain candidateId elsewhere, redirect or fallback to some default value:
  //   /* ... */
  return { props: { router: { query: { candidateId: 8432 } } } };
}
