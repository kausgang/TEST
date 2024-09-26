"use client";
import { getTests } from "@/context/TestContext";
import Link from "next/link";
import { Tag, TagGroup } from "rsuite";

const Tags = () => {
  const { tests, removeTest } = getTests();

  // const handleClose = (test) => removeTest(test);

  return (
    <>
      <div className="min-h-96 text-2xl">
        <TagGroup>
          {tests.map((test, index) => (
            <Tag
              key={index}
              // closable
              // onClose={() => handleClose(test)}
            >
              {test}
            </Tag>
          ))}
        </TagGroup>
      </div>
      <Link href="first">
        <button className="btn btn-primary" onClick={() => console.log(tests)}>
          Show Selected
        </button>
      </Link>
    </>
  );
};

export default Tags;
