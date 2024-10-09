// import GhImage from "@/components/GhImage";
import ImageLoading from "@/components/ImageLoading";
import MultiSelect from "@/components/MultiSelect";
import SingleSelect from "@/components/SingleSelect";
import TestProgress from "@/components/TestProgress";
import GetGHImage from "@/utils/GetGHImage";
import { revalidatePath } from "next/cache";
import React from "react";

let pic = "";

const getImage = async () => {
  "use server";

  pic = await GetGHImage();

  revalidatePath("/exam");
};

// github image url = https://api.github.com/repos/${repo}/contents/${path}
const page = () => {
  return (
    <div className="flex flex-col items-center justify-center m-6 space-y-4">
      <TestProgress />
      <div>
        {/* <img src="pic.jpg" className="h-96" /> */}
        {pic === "" ? <ImageLoading /> : <img src={pic} className="h-96" />}
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
