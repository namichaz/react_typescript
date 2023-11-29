/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import { Header } from "components/Header";
import { InputText } from "components/InputText";
import { AppButton } from "components/AppButton";
import { css } from "@emotion/react";
import AlertDialog from "components/AlertDialog";
import Select from "components/Select";
import { InputType } from "enums/Type";

export const InputForm = () => {
  const buttonStyles = css({
    fontSize: "20px",
    height: "40px",
    width: "200px",
    transform: "translate(527%,700%)",
  });

  const [data, setData] = useState<InputType>({
    gender: "",
    name: "",
    age: "",
    hobby: "",
  });

  const fetchData = async () => {
    try {
      console.log("API取得開始");
      // JSONPlaceholderのAPIエンドポイント
      const response = await fetch("http://localhost:3001/users/1");
      const result = await response.json();
      console.log("result:", result);

      if (result !== undefined) {
        setData({
          gender: result.gender,
          name: result.name,
          age: result.age,
          hobby: result.hobby,
        });
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
    console.log("data2:", data);
  }, []); // マウント時に一度だけデータを取得

  const handleOnclick = () => {
    // クリック時の処理
  };

  return (
    <div>
      <Header />
      {data ? (
        <>
          {/* ユーザーデータの配列をマップして処理 */}
          <div>
            <InputText
              id={`NAME`}
              placeholder="名前を入力してね"
              labelname="名前："
              value={data.name}
            />
            <InputText
              id={`AGE`}
              placeholder="年齢を入力してね"
              labelname="年齢："
              value={String(data.age)}
            />
            <InputText
              id={`GENDER`}
              placeholder="性別を入力してね"
              labelname="性別："
              value={data.gender}
            />
            <InputText
              id={`HOBBY`}
              placeholder="趣味を入力してね"
              labelname="趣味："
              value={data.hobby}
            />
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
      <div css={buttonStyles}>
        <AlertDialog data={data} />
        <Select />
      </div>
    </div>
  );
};
