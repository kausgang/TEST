import GhImage from "@/components/GhImage";
import MultiSelect from "@/components/MultiSelect";
import SingleSelect from "@/components/SingleSelect";
import TestProgress from "@/components/TestProgress";
import React from "react";

// github image url = https://api.github.com/repos/${repo}/contents/${path}
const page = () => {
  return (
    <div className="flex flex-col items-center justify-center m-6">
      <TestProgress />
      <div>
        {/* <img src="pic.jpg" className="h-96" /> */}
        <GhImage
          imageUrl={
            "https://api.github.com/repos/kausgang/test-private/contents/image/pic.png"
            // imageUrl
          }
        />
      </div>
      <MultiSelect noOfChoices={4} />
      <SingleSelect noOfChoices={4} />
    </div>
  );
};

export default page;
