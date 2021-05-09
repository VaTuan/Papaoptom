import React from "react";
import { useRouter } from "next/router";
function TestPage() {
  const router = useRouter();
  console.log("router", router);
  return (
    <div style={{ marginTop: "200px" }}>
      <h1>Hello</h1>
    </div>
  );
}

export default TestPage;
