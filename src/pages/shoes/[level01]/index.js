import React from "react";
import { useRouter } from "next/router";

function ShoesFilterPage() {
  const router = useRouter();

  console.log("====================================");
  console.log("router : ", router);
  console.log("====================================");

  return (
    <div style={{ marginTop: "300px" }}>
      <h1>Filter page</h1>
    </div>
  );
}

export default ShoesFilterPage;
