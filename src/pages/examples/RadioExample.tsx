import React from "react";
import Radio from "@/components/Radio";
import RadioGroup from "@/components/RadioGroup";

function RadioExample() {
  return (
    <>
      <h4>Radio</h4>
      <RadioGroup name="name">
        <Radio label="John" value="0" />
        <Radio label="Albert" value="1" />
      </RadioGroup>
      <RadioGroup name="lastname">
        <Radio label="John" value="0" />
        <Radio label="Albert" value="1" disabled />
      </RadioGroup>
    </>
  );
}

export default RadioExample;
