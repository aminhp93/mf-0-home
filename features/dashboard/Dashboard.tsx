import { Responsive, WidthProvider } from "react-grid-layout";
import useDashboardStore from "./Dashboard.store";
import React, { useState } from "react";
import _ from "lodash";
import { styled } from "@mui/material/styles";
import { Box, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import GridItem from "./GridItem";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

type Config = {
  [key: string]: string;
};

type Item = {
  i: number;
  x: number;
  y: number;
  w: number;
  h: number;
  component: React.ReactNode;
  config?: Config;
};

const Dashboard = () => {
  const { editMode, setEditMode } = useDashboardStore();
  // const [layouts, setLayouts] = useState<ReactGridLayout.Layouts>();
  const [items, setItems] = useState<Item[]>([
    {
      i: 1,
      x: 4,
      y: 4,
      w: 2,
      h: 5,
      component: <div>1</div>,
    },
    {
      i: 2,
      x: 2,
      y: 0,
      w: 2,
      h: 5,
      component: <div>2</div>,
    },
    // {
    //   i: 3,
    //   x: 0,
    //   y: Infinity, // puts it at the bottom
    //   w: 4,
    //   h: 4,
    //   component: <div>3</div>,
    // },
    // {
    //   i: 4,
    //   x: 0,
    //   y: Infinity, // puts it at the bottom
    //   w: 4,
    //   h: 4,
    //   component: <div>4</div>,
    // },
  ]);

  // const handleLayoutChange = (
  //   _: ReactGridLayout.Layout[],
  //   allLayout: ReactGridLayout.Layouts
  // ) => {
  //   const newAllLayout = {
  //     ...allLayout,
  //     lg: allLayout.lg?.map((item) => {
  //       return {
  //         ...item,
  //       };
  //     }),
  //   };
  //   setLayouts(newAllLayout);
  // };

  // We're using the cols coming back from this to calculate where to add new items.
  // const onBreakpointChange = (breakpoint: any, cols: any) => {};

  const handleSaveConfig = () => {
    // handleDashboardChange(widgetConfig);
  };

  const createElement = (el: Item) => {
    const C = React.cloneElement(el.component as React.ReactElement, {
      id: el.i,
      onSaveConfig: handleSaveConfig,
      config: el.config,
    });

    return (
      <div key={el.i} data-grid={el}>
        <CloseIcon
          className="close-grid-item"
          onClick={() => onRemoveItem(el)}
        />
        <GridItem>{C}</GridItem>
      </div>
    );
  };

  const onRemoveItem = (el: Item) => {
    if (editMode) {
      setItems(_.reject(items, { i: el.i }));
    }
  };

  return (
    <DashboardBox
      sx={{
        ".react-grid-item:hover .close-grid-item": {
          display: editMode ? "block" : "none",
        },
      }}
    >
      <Button onClick={() => setEditMode(!editMode)}>
        {editMode ? "Edit" : "View"}
      </Button>
      <ResponsiveReactGridLayout
        // className="layout"
        // layouts={layouts}
        isResizable={editMode}
        // isBounded={true}
        // rowHeight={50}
        // // margin={[20, 20]}
        // measureBeforeMount={true}
        // onLayoutChange={handleLayoutChange}
        isDraggable={editMode}
        // draggableHandle=".drag-handle"
        // breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        // cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        // resizeHandles={["se", "ne", "nw", "sw"]}
        // onBreakpointChange={onBreakpointChange}
        className="layout"
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        rowHeight={100}
      >
        {_.map(items, (el) => createElement(el))}
      </ResponsiveReactGridLayout>
    </DashboardBox>
  );
};

export default Dashboard;

const DashboardBox = styled(Box)(({ theme }) => {
  return {
    backgroundColor: theme.palette.background.default,
    height: "100%",
    width: "100%",
    ".close-grid-item": {
      display: "none",
    },
    ".react-grid-item:hover .close-grid-item": {
      display: "block",
      position: "absolute",
      right: "-21px",
      top: "-12px",
      fontSize: "24px",
      marginRight: "10px",
      background: "#44405E",
      borderRadius: "50%",
      cursor: "pointer",
      border: "1px solid #44405E",
      zIndex: 9999,
    },
  };
});
