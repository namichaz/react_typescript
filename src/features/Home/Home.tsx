/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Header } from "components/Header";
import { AppButton } from "components/AppButton";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const buttonStyles = css({
    fontSize: "20px",
    height: "40px",
    width: "200px",
    transform: "translate(600%,700%)",
  });

  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <div css={buttonStyles}>
        <AppButton
          onClick={() => {
            navigate("/inputform");
          }}
          text={"登録画面に移動する"}
        />
      </div>
    </div>
  );
};
