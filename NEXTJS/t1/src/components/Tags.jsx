"use client";
import { getTests } from "@/context/TestContext";
import { Tag, TagGroup } from "rsuite";

const Tags = () => {
  const { tests } = getTests();

  console.log(tests);

  return (
    // <TagGroup>
    <div>
      {tests.map((test) => (
        <div>
          <Tag closable className="m-4">
            {test}
          </Tag>
        </div>
      ))}
    </div>
    // </TagGroup>
  );
};

export default Tags;
