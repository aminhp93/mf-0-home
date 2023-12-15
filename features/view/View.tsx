// Import libraries
import { Box } from "@mui/material";
import { DEFAULT_VIEW } from "./View.constants";
import { mapView } from "./View.utils";

// @ts-expect-error Import remote module
import listItemsBasic from "itemsBasic/listItems";
// @ts-expect-error Import remote module
import listItemsBas from "itemsBas/listItems";

const View = () => {
  const mappedView = mapView(DEFAULT_VIEW);
  return (
    <div>
      <Box>View Features</Box>
      <Box sx={{ display: "flex" }}>
        <Box sx={{ flex: 1 }}>
          <Box>Remote items-basic</Box>
          <Box>
            {mappedView.map((i) => {
              let content;
              if (i.type === "legacy-item" && listItemsBasic.getItem) {
                const ItemComponent = listItemsBasic.getItem(
                  i.legacy.itemType
                ).component;
                content = <ItemComponent {...i.legacy.itemProperties} />;
              }

              return <div key={i.id}>{content}</div>;
            })}
          </Box>
        </Box>
        <Box sx={{ flex: 1 }}>
          <Box>Remote items-basic</Box>
          <Box>
            {mappedView.map((i) => {
              let content;
              if (i.type === "legacy-item" && listItemsBas.getItem) {
                const ItemComponent = listItemsBas.getItem(
                  i.legacy.itemType
                ).component;
                content = <ItemComponent {...i.legacy.itemProperties} />;
              }

              return <div key={i.id}>{content}</div>;
            })}
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default View;
