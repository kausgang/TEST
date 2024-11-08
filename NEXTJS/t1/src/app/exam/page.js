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

let pic = "";
let github_url = [];

const getImage = async () => {
  "use server";

  pic = await GetGHImage(
    "AWS - Cloud Practitioner/Stephane/Test 1/image001.png"
  );

  console.log("picture=", pic);

  revalidatePath("/exam");
};

// github image url = https://api.github.com/repos/${repo}/contents/${path}
const page = async ({ searchParams }) => {
  // get the test names
  const tests = JSON.parse(searchParams.tests || "[]"); // Default to an empty array if null

  // call internal api to get data from salesforce
  const accessToken = await getSalesforceToken();
  const response = await axios({
    url: process.env.SF_GETEXAM_EP,
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    // data: { tests: JSON.stringify(data) },
    data: { tests },
  });

  // get token image url for github
  // response.data.forEach(async(element) => {
  //   github_url.push(await GetGHImage())
  // });
  // console.log(response.data.Github_URL__c);

  return (
    <div className="flex flex-col items-center justify-center m-6 space-y-4">
      <TestProgress />
      <div>
        {/* {pic === "" ? <ImageLoading /> : <img src={pic} className="h-96" />} */}
        {response.data.map(async (question) => {
          pic = await GetGHImage(question.Github_URL__c);
          console.log("pic", pic);

          return <img src={pic} className="h-96" />;

          // revalidatePath("/exam");

          // pic === "" ? <ImageLoading /> : <img src={pic} className="h-96" />;
          // pic === "" ? (
          //   <ImageLoading />
          // ) : (
          //   <img
          //     src="https://raw.githubusercontent.com/kausgang/test-private/main/AWS%20-%20Cloud%20Practitioner/Stephane/Test%201/image001.png?token=AIB77EJHPCCJCDEVEVEUERDHFVK7Y"
          //     className="h-96"
          //   />
          // );
        })}
      </div>
      <form action={getImage}>
        <button type="submit" className="btn btn-primary">
          Get Image
        </button>
      </form>
      <MultiSelect noOfChoices={4} />
      <SingleSelect noOfChoices={4} />
    </div>
  );
};

export default page;
