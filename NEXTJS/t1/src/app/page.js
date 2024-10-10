// "use client";
import Image from "next/image";
// import RButton from "@/components/RButton";
// import Tags from "@/components/Tags";
// import { TestContextProvider } from "@/context/TestContext";
import Hero from "@/components/Hero";
import TestPicker from "@/components/TestPicker";
import { getAccessToken, getSession } from "@auth0/nextjs-auth0";

export default async function Home() {
  const printAccessToken = async () => {
    "use server";

    const { accessToken } = await getAccessToken();

    console.log("access token = ", accessToken);
  };

  const session = await getSession();

  const { user } = session || false;

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

      {user && <TestPicker />}
    </div>
  );
}
