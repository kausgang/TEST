"use client";
import React from "react";
import RButton from "./RButton";
import Tags from "./Tags";
import { TestContextProvider } from "@/context/TestContext";

const TestPicker = () => {
  // const { tests } = getTests();

  return (
    <TestContextProvider>
      <div className="flex items-start justify-start">
        <div className="w-96">
          <RButton />
        </div>
        <div className="p-6 w-96 flex flex-col space-y-4">
          <p className="text-3xl">Selected Tests</p>
          <Tags />
        </div>
      </div>
    </TestContextProvider>
  );
};

export default TestPicker;
