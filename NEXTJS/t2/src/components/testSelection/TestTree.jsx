"use client";
// import { Tree, CheckTreePicker, Stack, CheckTree } from "rsuite";
import CheckTree from "rsuite/CheckTree";
// import FolderFillIcon from "@rsuite/icons/FolderFill";
// import PageIcon from "@rsuite/icons/Page";
import { useState, useEffect } from "react";
import { getTests } from "@/context/TestContext";
import "rsuite/CheckTree/styles/index.css";
import { transformData } from "@/utils/SF_Transform";

function createJsonObject(pathString) {
  // Step 1: Remove leading slash and split
  const items = pathString.trim().substring(1).split("/");

  // Initialize the root object
  let root = {
    label: items[0], // Set label and value for the root directly
    value: items[0],
    children: [], // Initialize children as an empty array
  };

  let current = root;

  // Step 2: Iterate over items starting from the second item
  for (let i = 1; i < items.length - 1; i++) {
    const item = items[i];

    // Create the new object for the current item
    const newNode = {
      label: item,
      value: item,
      children: [], // Ensure children is initialized as an array
    };

    // Step 3: Push newNode to current's children
    current.children.push(newNode);
    current = newNode; // Move down the tree for nesting
  }

  return root;
}

const TestTree = ({ tests }) => {
  const [data, setData] = useState(tests);

  // console.log(tests);

  const { addTest } = getTests();

  const handleSelect = (node, value, event) => {
    // setSelect(() => value);
    addTest(value);
  };

  return (
    <>
      <CheckTree
        defaultExpandAll
        cascade={false}
        // defaultValue={[2, 38]}
        showIndentLine
        searchable
        uncheckableItemValues={["docs"]}
        onSelect={handleSelect}
        data={tests}
      />
    </>
  );
};

export default TestTree;
