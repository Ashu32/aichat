import { TextField } from "@mui/material";
import React from "react";

type Props = {
  name: string;
  type: string;
  label: string;
};
const CustomizedInput = (props: Props) => {
  return (
    <TextField
      margin="normal"
      InputLabelProps={{ style: { color: "white" } }}
      name={props.name}
      label={props.label}
      type={props.type}
      inputProps={{
        style: {
          width: "400px",
          fontSize: 20,
          borderRadius: 10,
          color: "white",
        },
      }}
    ></TextField>
  );
};

export default CustomizedInput;
