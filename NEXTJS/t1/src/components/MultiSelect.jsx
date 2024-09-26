"use client";
import { Checkbox, CheckboxGroup } from "rsuite";

const MultiSelect = ({ noOfChoices }) => {
  const choices = [];
  for (let index = 1; index <= noOfChoices; index++) {
    choices.push(index);
  }
  return (
    <CheckboxGroup
      name="checkbox-group"
      onChange={(value) => {
        // setValue(value);
        console.log(value);
      }}
    >
      {choices.map((choice, index) => (
        <Checkbox key={index} value={choice}>
          {choice}
        </Checkbox>
      ))}
    </CheckboxGroup>
  );
};

export default MultiSelect;
