"use client";
// import { Tree, CheckTreePicker, Stack, CheckTree } from "rsuite";
import CheckTree from "rsuite/CheckTree";
import FolderFillIcon from "@rsuite/icons/FolderFill";
import PageIcon from "@rsuite/icons/Page";
import { useState } from "react";
import { getTests } from "@/context/TestContext";
import "rsuite/CheckTree/styles/index.css";

// const data1 = [
//   {
//     label: "item1",
//     value: "item1",
//     children: [
//       {
//         label: "item2",
//         value: "item2",
//         children: [
//           {
//             label: "item3",
//             value: "item3",
//           },
//         ],
//       },
//     ],
//   },
// ];

// const data = [
//   {
//     label: "docs",
//     value: "docs",
//     children: [
//       {
//         label: "pages",
//         value: "pages",
//         children: [
//           {
//             label: "components",
//             value: "pages-components",
//             children: [
//               {
//                 label: "tree",
//                 value: "pages-tree",
//                 children: [
//                   {
//                     label: "fragments",
//                     value: "pages-fragments",
//                     children: [
//                       {
//                         label: "async",
//                         value: "pages-async",
//                         children: [
//                           {
//                             label: "index.tsx",
//                             value: "pages-index.tsx",
//                           },
//                           {
//                             label: "styles.css",
//                             value: "pages-styles.css",
//                           },
//                         ],
//                       },
//                     ],
//                   },
//                 ],
//               },
//             ],
//           },
//         ],
//       },
//     ],
//   },
//   {
//     label: "packages",
//     value: "packages",
//     children: [
//       {
//         label: "rsuite",
//         value: "packages-rsuite",
//         children: [
//           {
//             label: "src",
//             value: "packages-src",
//             children: [
//               {
//                 label: "components",
//                 value: "packages-components",
//                 children: [
//                   {
//                     label: "Tree",
//                     value: "packages-Tree",
//                     children: [
//                       {
//                         label: "index.tsx",
//                         value: "packages-index.tsx",
//                       },
//                       {
//                         label: "styles.css",
//                         value: "packages-styles.css",
//                       },
//                     ],
//                   },
//                 ],
//               },
//             ],
//           },
//         ],
//       },
//     ],
//   },
//   {
//     label: "node_modules",
//     value: "node_modules",
//     children: [
//       {
//         label: "rsuite",
//         value: "node_modules-rsuite",
//         children: [
//           {
//             label: "src",
//             value: "node_modules-src",
//             children: [
//               {
//                 label: "components",
//                 value: "node_modules-components",
//                 children: [
//                   {
//                     label: "Tree",
//                     value: "node_modules-Tree",
//                     children: [
//                       {
//                         label: "index.tsx",
//                         value: "node_modules-index.tsx",
//                       },
//                     ],
//                   },
//                 ],
//               },
//             ],
//           },
//           {
//             label: "package.json",
//             value: "node_modules-package.json",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     label: "README.md",
//     value: "README.md",
//     children: null,
//   },
//   {
//     label: "LICENSE",
//     value: "LICENSE",
//     children: null,
//   },
//   {
//     label: "package.json",
//     value: "package.json",
//     children: null,
//   },
//   {
//     label: "tsconfig.json",
//     value: "tsconfig.json",
//     children: null,
//   },
//   {
//     label: "webpack.config.js",
//     value: "webpack.config.js",
//     children: null,
//   },
// ];

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

// Example usage
// const path = "/item1/item2/item3/pic.png";
// const jsonObject = createJsonObject(path);
// console.log(JSON.stringify(jsonObject, null, 2));

// Example usage
// const path = "/item1/item2/item3/pic.png";
// const jsonObject = createJsonObject(path);
// console.log(JSON.stringify(jsonObject, null, 2));

// Example usage
// const path = "/item1/item2/item3/pic.png";
// const jsonObject = createJsonObject(path);
// console.log(JSON.stringify(jsonObject, null, 2));

// const data = [
//   {
//     label: "item1",
//     value: "item1",
//     children: [
//       {
//         label: "item2",
//         value: "item2",
//         children: [
//           {
//             label: "item3",
//             value: "item3",
//             children: null,
//           },
//         ],
//       },
//     ],
//   },
// ];

const RButton = () => {
  // const [treeData, setTreeData] = useState(data);

  // const [select, setSelect] = useState([]);
  const { addTest } = getTests();

  const handleSelect = (node, value, event) => {
    // setSelect(() => value);
    addTest(value);
  };

  const path = "/item1/item2/item3/pic.png";
  // const data = [createJsonObject(path)];

  const data = [
    {
      label: "AWS - Cloud Practitioner",
      value: "AWS - Cloud Practitioner",
      children: [
        {
          label: "Stephane",
          value: "AWS - Cloud Practitioner/Stephane",
          children: [
            {
              label: "Test1",
              value: "AWS - Cloud Practitioner/Stephane/Test1",
            },
            {
              label: "Test2",
              value: "AWS - Cloud Practitioner/Stephane/Test2",
            },
          ],
        },
        {
          label: "Neal",
          value: "AWS - Cloud Practitioner/Neal",
          children: [
            {
              label: "Test1",
              value: "AWS - Cloud Practitioner/Neal/Test1",
            },
            {
              label: "Test2",
              value: "AWS - Cloud Practitioner/Neal/Test2",
            },
          ],
        },
      ],
    },
  ];

  console.log(data);

  // const data = [];
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
        data={data}
      />
    </>
  );
};

export default RButton;
