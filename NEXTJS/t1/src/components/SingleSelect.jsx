"use client";
import React from "react";

import Radio from "rsuite/Radio";
import RadioGroup from "rsuite/RadioGroup";

// (Optional) Import component styles. If you are using Less, import the `index.less` file.
// import 'rsuite/Radio/styles/index.css';
// import 'rsuite/RadioGroup/styles/index.css';

const SingleSelect = ({ noOfChoices }) => {
  const [value, setValue] = React.useState("");

  const choices = [];
  for (let index = 1; index <= noOfChoices; index++) {
    choices.push(index);
  }

  return (
    <RadioGroup
      name="radio-group-controlled"
      value={value}
      onChange={(choice) => {
        setValue(choice);
        console.log(choice);
      }}
    >
      {choices.map((choice, index) => (
        <Radio key={index} value={choice}>
          {choice}
        </Radio>
      ))}
      {/* <Radio value="A">Radio A</Radio>
      <Radio value="B">Radio B</Radio>
      <Radio value="C">Radio C</Radio>
      <Radio value="D">Radio D</Radio> */}
    </RadioGroup>
  );
};

export default SingleSelect;
