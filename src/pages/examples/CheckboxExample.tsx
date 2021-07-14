import React from "react";
import Checkbox from "@/components/Checkbox";
import CheckboxGroup from "@/components/CheckboxGroup";

function CheckboxExample() {
  return (
    <>
      <h4>Checkbox</h4>
      <CheckboxGroup name="name">
        <Checkbox label="Ivan" value="0" disabled />
        <Checkbox label="And" value="1" checked={true} />
        <Checkbox label="Resd" value="2" />
        <Checkbox label="Vfad" value="3" />
        <Checkbox label="Fasc" value="4" />
      </CheckboxGroup>
    </>
  );
}

export default CheckboxExample;
