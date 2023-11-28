import dynamic from "next/dynamic";
import React from "react";
import Property from "./Property";
import ListItems from "./ListItems";
import HierarchyItems from "./HierarchyItems";
import Editor from "./Editor";

const Edit = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <ListItems />
      <HierarchyItems />
      <Editor />
      <Property />
    </div>
  );
};

export default dynamic(() => Promise.resolve(Edit), {
  ssr: false,
});
