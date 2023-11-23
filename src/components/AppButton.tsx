/** @jsxImportSource @emotion/react */
import { Button } from "@mui/material";

export const AppButton = (props: any) => {
  return (
    <Button variant={"contained"} onClick={props.onClick}>
      {props.text}
    </Button>
  );
};
