// @ts-ignore
import listItems from "items/listItems";

export const getListItems = () => {
  return listItems
    .createAssetsStructure(listItems.getItems(), {})
    .flatMap((item: any) => item.content);
};
