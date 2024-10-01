import GhImage from "@/components/GhImage";
import MultiSelect from "@/components/MultiSelect";
import SingleSelect from "@/components/SingleSelect";
import TestProgress from "@/components/TestProgress";
import { revalidatePath } from "next/cache";
import React from "react";

let pic = "pic.jpg";

const getImage = async () => {
  "use server";
  console.log("hrhrh");

  const token = process.env.GITHUB_TOKEN; // Set this in your .env.local
  const repo = "kausgang/test-private"; // Replace with your username/repo
  const path = "image/pic.png"; // Replace with the path to your image

  const response = await fetch(
    `https://api.github.com/repos/${repo}/contents/${path}`,
    // `https://raw.githubusercontent.com/kausgang/test-private/main/image/pic.png`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        // Accept: "application/vnd.github.v3.raw",
      },
    }
  );

  if (!response.ok) {
    console.error("Failed to fetch image:", response.statusText);
    return { notFound: true };
  }

  const data = await response.json();

  console.log(data.download_url);

  pic = data.download_url;

  revalidatePath("/exam");
};

// github image url = https://api.github.com/repos/${repo}/contents/${path}
const page = () => {
  return (
    <div className="flex flex-col items-center justify-center m-6">
      <TestProgress />
      <div>
        {/* <img src="pic.jpg" className="h-96" /> */}
        <img src={pic} className="h-96" />
      </div>
      <form action={getImage}>
        <button type="submit" className="btn btn-primary">
          Next
        </button>
      </form>
      <MultiSelect noOfChoices={4} />
      <SingleSelect noOfChoices={4} />
    </div>
  );
};

export default page;
