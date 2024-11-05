"use client";
import { getTests } from "@/context/TestContext";
import Link from "next/link";
// import { Tag, TagGroup } from "rsuite";
import Tag from "rsuite/Tag";
import TagGroup from "rsuite/TagGroup";
import "rsuite/Tag/styles/index.css";
import "rsuite/TagGroup/styles/index.css";
import reviewTests from "@/utils/reviewTests";
import getExam from "@/utils/getExam";

const Tags = () => {
  const { tests, removeTest } = getTests();

  // const handleClose = (test) => removeTest(test);

  const handleExam = () => {
    // alert(`this will start ${tests}, are you sure ?`);

    getExam(tests);
  };

  const handleReview = () => reviewTests(tests);

  return (
    <>
      <div className="flex ">
        {/* selected tag panel */}
        <div className="min-w-72 text-2xl">
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

        {/* action buttons */}
        <div className="flex flex-col items-center space-y-2">
          <Link href="review">
            <button className="btn btn-primary w-24" onClick={handleReview}>
              Review
            </button>
          </Link>
          <Link href="exam">
            <button className="btn btn-primary w-24" onClick={handleExam}>
              Exam
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Tags;
