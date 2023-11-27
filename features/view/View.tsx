import dynamic from "next/dynamic";

import { DEFAULT_VIEW } from "./View.constants";
import { mapView } from "./View.utils";

let remoteListItems: any;

if (typeof window !== "undefined") {
  remoteListItems = require("items/listItems").default;
}

const View = () => {
  const mappedView = mapView(DEFAULT_VIEW);
  return (
    <div>
      view
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

export default dynamic(() => Promise.resolve(View), {
  ssr: false,
});
