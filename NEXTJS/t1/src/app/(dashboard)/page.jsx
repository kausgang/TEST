// "use client";
// "use server";

import Image from "next/image";
// import RButton from "@/components/RButton";
// import Tags from "@/components/Tags";
// import { TestContextProvider } from "@/context/TestContext";
import Hero from "@/components/Hero";
import TestPicker from "@/components/TestPicker";
import { getAccessToken, getSession } from "@auth0/nextjs-auth0";
import { transformData } from "@/utils/SF_Transform";
import getSFTests from "@/utils/getSFTests";
import getSalesforceToken from "@/utils/getSalesforceToken";

export default async function Home() {
  const session = await getSession();

  const { user } = session || false;

  let tests;
  if (session) {
    const accessToken = await getSalesforceToken();

    const response = await getSFTests(accessToken, user);

    console.log(response);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const result = await response.json();
    tests = transformData(result);
    console.log(tests);
  }

  return (
    <div className="m-2 flex flex-col items-center justify-start space-y-4">
      {!user && (
        <div className="m-2 w-3/4">
          <Hero />
        </div>
      )}

      {user && <TestPicker initialData={tests} />}
    </div>
  );
}
