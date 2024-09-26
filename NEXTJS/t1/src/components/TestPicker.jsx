"use client";
import React from "react";
import RButton from "./RButton";
import Tags from "./Tags";
import { TestContextProvider } from "@/context/TestContext";

const TestPicker = () => {
  return (
    <TestContextProvider>
      <div className="flex items-start justify-center">
        <div className="w-96">
          <RButton />
        </div>
        <div>
          <Tags />
        </div>
      </div>
    </TestContextProvider>
  );
};

export default TestPicker;
