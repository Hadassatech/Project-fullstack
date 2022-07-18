import React, { useState } from "react";
import ResultsCube from "../ResultsCube";
import "./style.scss";

export default function Results({ data }) {
  const [inputText, setInputText] = useState("");

  const filteredData = data?.Search?.filter((el) => {
    if (inputText === "") {
      return el;
    } else {
      return el?.Title.toLowerCase().includes(inputText);
    }
  });

  return (
    <div className="general-div">
      <h1 className="title-movies">Popular Movies</h1>
      <div className="search"></div>
      <input
        type="text"
        placeholder="search..."
        onChange={(e) => setInputText(e.currentTarget.value)}
        value={inputText}
        class="input-search"
      />

      <div className="wrapper-all-cards">
        {filteredData?.map((item) => {
          return (
            <>
              {data?.Search.length && (
                <ResultsCube item={item} />
              )}
            </>
          );
        })}
      </div>
    </div>
  );
}
