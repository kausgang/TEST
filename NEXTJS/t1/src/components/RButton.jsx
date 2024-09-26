"use client";
import { Tree, CheckTreePicker, Stack, CheckTree } from "rsuite";
import FolderFillIcon from "@rsuite/icons/FolderFill";
import PageIcon from "@rsuite/icons/Page";
import { useState } from "react";
import { getTests } from "@/context/TestContext";

const data = [
  {
    label: "docs",
    value: "docs",
    children: [
      {
        label: "pages",
        value: "pages",
        children: [
          {
            label: "components",
            value: "pages-components",
            children: [
              {
                label: "tree",
                value: "pages-tree",
                children: [
                  {
                    label: "fragments",
                    value: "pages-fragments",
                    children: [
                      {
                        label: "async",
                        value: "pages-async",
                        children: [
                          {
                            label: "index.tsx",
                            value: "pages-index.tsx",
                          },
                          {
                            label: "styles.css",
                            value: "pages-styles.css",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    label: "packages",
    value: "packages",
    children: [
      {
        label: "rsuite",
        value: "packages-rsuite",
        children: [
          {
            label: "src",
            value: "packages-src",
            children: [
              {
                label: "components",
                value: "packages-components",
                children: [
                  {
                    label: "Tree",
                    value: "packages-Tree",
                    children: [
                      {
                        label: "index.tsx",
                        value: "packages-index.tsx",
                      },
                      {
                        label: "styles.css",
                        value: "packages-styles.css",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    label: "node_modules",
    value: "node_modules",
    children: [
      {
        label: "rsuite",
        value: "node_modules-rsuite",
        children: [
          {
            label: "src",
            value: "node_modules-src",
            children: [
              {
                label: "components",
                value: "node_modules-components",
                children: [
                  {
                    label: "Tree",
                    value: "node_modules-Tree",
                    children: [
                      {
                        label: "index.tsx",
                        value: "node_modules-index.tsx",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            label: "package.json",
            value: "node_modules-package.json",
          },
        ],
      },
    ],
  },
  {
    label: "README.md",
    value: "README.md",
    children: null,
  },
  {
    label: "LICENSE",
    value: "LICENSE",
    children: null,
  },
  {
    label: "package.json",
    value: "package.json",
    children: null,
  },
  {
    label: "tsconfig.json",
    value: "tsconfig.json",
    children: null,
  },
  {
    label: "webpack.config.js",
    value: "webpack.config.js",
    children: null,
  },
];

const RButton = () => {
  // const [treeData, setTreeData] = useState(data);

  // const [select, setSelect] = useState([]);
  const { addTest } = getTests();

  const handleSelect = (node, value, event) => {
    // setSelect(() => value);
    addTest(value);
  };

  return (
    // <Tree
    //   data={treeData}
    //   draggable
    //   defaultExpandAll
    //   onDrop={({ createUpdateDataFunction }, event) =>
    //     setTreeData(createUpdateDataFunction(treeData))
    //   }
    // />

    // <Tree
    //   searchable
    //   draggable
    //   onDragEnd={handleDrop}
    //   onDrop={({ createUpdateDataFunction }, event) => {
    //     setTreeData(createUpdateDataFunction(treeData));
    //     console.log(event);
    //   }}
    //   data={treeData}
    // />

    // <Stack spacing={10} direction="column" alignItems="flex-start">
    //   <CheckTreePicker defaultExpandAll data={data} style={{ width: 280 }} />
    //   {/* <CheckTreePicker
    //     defaultExpandAll
    //     data={data}
    //     searchable={false}
    //     style={{ width: 280 }}
    //     placeholder="Select without search"
    //   /> */}
    // </Stack>

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
