import React from "react";
import Grid from "@/components/layout/Grid";

interface Prop {
  name: string;
  children: JSX.Element[] | JSX.Element;
}

function RadioGroup(props: Prop) {
  const [value, setValue] = React.useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return (
    <Grid rowGap="0.4rem" style={{ marginBottom: "1rem" }}>
      {React.Children.map(props.children, (element) =>
        React.cloneElement(element, {
          ...element.props,
          checked: value === element.props.value,
          onChange: (e: React.ChangeEvent<HTMLInputElement>) => handleChange(e),
        })
      )}
    </Grid>
  );
}

export default RadioGroup;
