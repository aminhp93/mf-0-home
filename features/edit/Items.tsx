import dynamic from "next/dynamic";
import { mapView } from "@/features/view/View.utils";
import { DEFAULT_VIEW } from "@/features/view/View.constants";

let remoteListItems: any;

if (typeof window !== "undefined") {
  remoteListItems = require("items/listItems").default;
}

const Items = () => {
  console.log({ remoteListItems });
  const mappedView = mapView(DEFAULT_VIEW);

  return (
    <div>
      List Items
      {mappedView.map((i: any) => {
        let content;
        if (i.type === "legacy-item" && remoteListItems.getItem) {
          const ItemComponent = remoteListItems.getItem(
            i.legacy.itemType
          ).component;
          content = <ItemComponent {...i.legacy.itemProperties} />;
        }

        return <div key={i.id}>{content}</div>;
      })}
    </div>
  );
};

export default Items;
