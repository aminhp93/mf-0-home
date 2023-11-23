import dynamic from "next/dynamic";

import { DEFAULT_VIEW } from "./View.constants";
// @ts-ignore
import RemoteItems from "items/index";

let remoteListItems: any;

// @ts-ignore
import("items/listItems").then((res) => {
  remoteListItems = res.default;
});

const mapView = (view: any) => {
  return Object.values(view);
};

const View = () => {
  if (!remoteListItems) return null;
  console.log({ DEFAULT_VIEW, xxx: remoteListItems.getItems() });

  const mappedView = mapView(DEFAULT_VIEW);
  return (
    <div>
      {/* <RemoteItems data={mappedView} /> */}
      view
      {mappedView.map((i: any) => {
        let content;
        if (i.type === "legacy-item") {
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
