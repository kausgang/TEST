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
  const printAccessToken = async () => {
    "use server";

    const { accessToken } = await getAccessToken();

    console.log("access token = ", accessToken);
  };

  const session = await getSession();

  const { user } = session || false;

  // let tests;

  // const fetchData = async () => {
  // setLoading(true);
  // try {

  let tests;
  if (session) {
    // get user clientInformation

    const accessToken = await getSalesforceToken();

    // const response = await fetch("http://localhost:3000/api/getSFData");
    // const response = await fetch(`/api/getSFData`);
    const response = await getSFTests(accessToken, user);

    console.log(response);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const result = await response.json();
    tests = transformData(result);

    // if (isMounted setData(transform(result));
    // }
    // catch (error) {
    //   console.error("Fetch error:", error);
    // } finally {
    //   // if (isMounted) setLoading(false); // Update loading state only if mounted
    // }
  }

  return (
    <div className="m-2 flex flex-col items-center justify-start space-y-4">
      {!user && (
        <div className="m-2 w-3/4">
          <Hero />
        </div>
      )}

      <div>
        <form action={printAccessToken}>
          <button className="btn btn-secondary" type="submit">
            Print AccessToken on Server Console
          </button>
        </form>
      </div>

      {user && <TestPicker initialData={tests} />}
    </div>
  );
}
