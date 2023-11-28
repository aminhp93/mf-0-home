import dynamic from "next/dynamic";
import React from "react";
import Property from "./Property";
import Items from "./Items";
import Editor from "./Editor";

const Edit = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Items />
      <Editor />
      <Property />
    </div>
  );
};

export default dynamic(() => Promise.resolve(Edit), {
  ssr: false,
});
