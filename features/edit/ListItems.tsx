import dynamic from "next/dynamic";
import useEditStore from "./store";
import { getListItems } from "./Edit.utils";

const ListItems = () => {
  const selectedItems = useEditStore((state) => state.selectedItems);
  const setSelectedItems = useEditStore((state) => state.setSelectedItems);

  const listItems = getListItems();

  return (
    <div>
      <div>List Items</div>

      {listItems.map((i: any) => {
        return (
          <div
            key={i.id}
            onClick={() => {
              setSelectedItems([...selectedItems, i]);
            }}
          >
            {i.id}
          </div>
        );
      })}
    </div>
  );
};

export default dynamic(() => Promise.resolve(ListItems), {
  ssr: false,
});
