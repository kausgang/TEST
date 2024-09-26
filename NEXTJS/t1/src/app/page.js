// "use client";
import Image from "next/image";
// import RButton from "@/components/RButton";
// import Tags from "@/components/Tags";
// import { TestContextProvider } from "@/context/TestContext";
import Hero from "@/components/Hero";
import TestPicker from "@/components/TestPicker";

export default function Home() {
  return (
    <div className="m-2 flex flex-col items-center justify-center">
      <div className="w-screen">
        <Hero />
      </div>
      <div>
        <TestPicker />
      </div>
    </div>
  );
}
