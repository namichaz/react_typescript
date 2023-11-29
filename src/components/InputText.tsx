import { css } from "@emotion/css";
import { Input } from "@mui/material";
import { useState } from "react";

type text = {
  placeholder: string;
  labelname: string;
  id: string;
  value: string;
};

const styles = css({
  paddingLeft: "1000px",
  paddingTop: "100px",
  display: "flex",
});

export const InputText = (props: text) => {
  const [text, setText] = useState([""]);
  const handleOnchange = (e: any) => {
    setText(e.target.value);
    console.log(text);
  };

  return (
    <div className={styles}>
      <label>{props.labelname}</label>
      <Input
        id={props.id}
        size="medium"
        placeholder={props.placeholder}
        onChange={handleOnchange}
        value={props.value}
      />
    </div>
  );
};
