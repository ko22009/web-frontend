import React from "react";
import Grid from "@/components/layout/Grid";

interface Prop {
  name: string;
  children: JSX.Element[] | JSX.Element;
}

function CheckboxGroup(props: Prop) {
  const [value, setValue] = React.useState<Array<string>>([]);
  const handleChange = (val: string) => {
    const index = value.indexOf(val);
    if (index !== -1) {
      setValue(value.filter((elem) => elem !== val));
    } else {
      setValue([...value, val]);
    }
  };
  return (
    <Grid rowGap="0.4rem" style={{ marginBottom: "1rem" }}>
      {React.Children.map(props.children, (element) => {
        return React.cloneElement(element, {
          ...element.props,
          checked: value.includes(element.props.value),
          onChange: () => handleChange(element.props.value),
        });
      })}
    </Grid>
  );
}

export default CheckboxGroup;
