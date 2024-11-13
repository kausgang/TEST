// import GhImage from "@/components/GhImage";
import ImageLoading from "@/components/ImageLoading";
import MultiSelect from "@/components/MultiSelect";
import SingleSelect from "@/components/SingleSelect";
import TestProgress from "@/components/TestProgress";
import GetGHImage from "@/utils/GetGHImage";
import { revalidatePath } from "next/cache";
import React from "react";
import axios from "axios";
import getSalesforceToken from "@/utils/getSalesforceToken";
import ImageClientComponent from "@/components/ImageClientComponent";

let pic = "";

// const getImage = async () => {
//   "use server";

//   // pic = await GetGHImage(
//   //   "AWS - Cloud Practitioner/Stephane/Test 1/image001.png"
//   // );

//   // console.log("picture=", pic);

//   revalidatePath("/exam");
// };

const getImgUrl = async (tests, accessToken) => {
  let github_url = [];

  // get short github url from SF
  const response = await fetch(process.env.SF_GETEXAM_EP, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ tests }),
  });

  const data = await response.json();

  for (const element of data) {
    pic = await GetGHImage(element.Github_URL__c);
    github_url.push(pic);
  }

  console.log(github_url);

  return github_url;
};

const page = async ({ searchParams }) => {
  // get the test names
  const tests = JSON.parse(searchParams.tests || "[]"); // Default to an empty array if null

  // call internal api to get data from salesforce
  const accessToken = await getSalesforceToken();

  const github_url = await getImgUrl(tests, accessToken);

  return (
    <div className="flex flex-col items-center justify-center m-6 space-y-4">
      <TestProgress />
      <div>
        {github_url.map((element, index) => {
          return pic === "" ? (
            <ImageLoading />
          ) : pic.notFound ? (
            <p>No Image</p>
          ) : (
            // <img src={element} />
            <ImageClientComponent key={index} url={element} />
          );
        })}
      </div>
    </div>
  );
};

export default page;
