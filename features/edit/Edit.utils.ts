// @ts-expect-error Import remote module
import listItemsBasic from "itemsBasic/listItems";

export const getListItems = () => {
  return listItemsBasic
    .createAssetsStructure(listItemsBasic.getItems(), {})
    .flatMap((item: { content: object }) => item.content);
};
