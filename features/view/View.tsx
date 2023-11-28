import dynamic from "next/dynamic";
import { DEFAULT_VIEW } from "./View.constants";
import { mapView } from "./View.utils";

// @ts-ignore
import listItems from "items/listItems";

const View = () => {
  const mappedView = mapView(DEFAULT_VIEW);
  return (
    <div>
      view
      {mappedView.map((i: any) => {
        let content;
        if (i.type === "legacy-item" && listItems.getItem) {
          const ItemComponent = listItems.getItem(i.legacy.itemType).component;
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
