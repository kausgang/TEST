import { Droppable } from "@/components/Droppable";
import Timeline from "@/components/Timeline";
import Image from "next/image";
import Example from "@/components/Example";

export default function Home() {
  return (
    <div className="p-4 flex items-center justify-center">
      <Timeline />
      <Example />
    </div>
  );
}
