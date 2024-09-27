import MultiSelect from "@/components/MultiSelect";
import SingleSelect from "@/components/SingleSelect";
import TestProgress from "@/components/TestProgress";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center m-6">
      <TestProgress />
      <div>
        <img src="pic.jpg" className="h-96" />
      </div>
      <MultiSelect noOfChoices={4} />
      <SingleSelect noOfChoices={4} />
    </div>
  );
};

export default page;
