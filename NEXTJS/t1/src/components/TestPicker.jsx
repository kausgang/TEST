"use client";
import React from "react";
import RButton from "./RButton";
import Tags from "./Tags";
import { getTests, TestContextProvider } from "@/context/TestContext";

const TestPicker = () => {
  const { tests } = getTests();

  return (
    <TestContextProvider>
      <div className="flex items-start justify-start">
        <div className="w-96">
          <RButton />
        </div>
        <div className="p-6 w-96">
          Selected Tests
          <Tags />
        </div>
      </div>
    </TestContextProvider>
  );
};

export default TestPicker;
