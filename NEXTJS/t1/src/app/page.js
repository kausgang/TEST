import { Droppable } from "@/components/Droppable";
import Timeline from "@/components/Timeline";
import Image from "next/image";
import Example from "@/components/Example";
import RButton from "@/components/RButton";

export default function Home() {
  return (
    <div className="p-4 flex items-center justify-center space-x-6">
      {/* <Timeline /> */}
      <div className="w-96">
        <RButton />
      </div>
      <Example />
    </div>
  );
}
