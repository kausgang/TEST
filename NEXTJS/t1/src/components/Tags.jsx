"use client";
import { getTests } from "@/context/TestContext";
import Link from "next/link";
// import { Tag, TagGroup } from "rsuite";
import Tag from "rsuite/Tag";
import TagGroup from "rsuite/TagGroup";
import "rsuite/Tag/styles/index.css";
import "rsuite/TagGroup/styles/index.css";

const Tags = () => {
  const { tests, removeTest } = getTests();

  // const handleClose = (test) => removeTest(test);

  const handleSubmit = () => alert(`this will start ${tests}, are you sure ?`);

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
      <div className="flex items-center justify-between">
        <Link href="exam">
          <button className="btn btn-primary" onClick={handleSubmit}>
            Review
          </button>
        </Link>
        <Link href="exam">
          <button className="btn btn-primary" onClick={handleSubmit}>
            Exam
          </button>
        </Link>
      </div>
    </>
  );
};

export default Tags;
