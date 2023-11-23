import { Input } from "@mui/material";
import { useState } from "react";

// eslint-disable-next-line react-hooks/rules-of-hooks
const [test, setText] = useState("");

type text = {
  placeholder: string;
};
const handleChange = (e: any) => {
  setText(e.target.value);
};

export const InputText = (props: text) => {
  return (
    <Input
      size="medium"
      placeholder={props.placeholder}
      onChange={handleChange}
    />
  );
};
