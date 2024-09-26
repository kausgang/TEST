// "use client";
import Image from "next/image";
// import RButton from "@/components/RButton";
// import Tags from "@/components/Tags";
// import { TestContextProvider } from "@/context/TestContext";
import Hero from "@/components/Hero";
import TestPicker from "@/components/TestPicker";

export default function Home() {
  return (
    <div className="m-2 flex flex-col items-center justify-start space-y-4">
      <div className="m-2 w-3/4">
        <Hero />
      </div>
      <div>
        <TestPicker />
      </div>
    </div>
  );
}
