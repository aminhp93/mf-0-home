import dynamic from "next/dynamic";
import { mapView } from "@/features/view/View.utils";
import { DEFAULT_VIEW } from "@/features/view/View.constants";
import useEditStore from "./store";

let remoteListItems: any;

if (typeof window !== "undefined") {
  remoteListItems = require("items/listItems").default;
}

const HierarchyItems = () => {
  const mappedView = mapView(DEFAULT_VIEW);
  const list = remoteListItems.getItems();
  console.log("------------", list);
  const selectedItems = useEditStore((state) => state.selectedItems);
  const setSelectedItems = useEditStore((state) => state.setSelectedItems);

  return (
    <div>
      <div>HierarchyItems</div>
      {mappedView.map((i: any) => {
        let content;
        if (i.type === "legacy-item" && remoteListItems.getItem) {
          const ItemComponent = remoteListItems.getItem(
            i.legacy.itemType
          ).component;
          console.log(i.legacy.itemProperties);

          content = <ItemComponent {...i.legacy.itemProperties} />;
        }

        return (
          <div
            key={i.id}
            onClick={() => {
              setSelectedItems([...selectedItems, i.id]);
            }}
          >
            {content}
          </div>
        );
      })}
    </div>
  );
};

export default dynamic(() => Promise.resolve(HierarchyItems), {
  ssr: false,
});
