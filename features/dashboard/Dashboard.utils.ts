import { v4 as uuidv4 } from "uuid";
import { getComponent } from "./Dashboard";
import { ComponentKey } from "./Dashboard.types";

export const generateComponentKey = (componentKey: string) => {
  return uuidv4() + "__" + componentKey;
};

export const parseComponentKey = (key: string) => {
  const widgetType = key.split("__");
  if (widgetType.length > 0) {
    return widgetType[widgetType.length - 1];
  }
  // const regex = /(?<=__)\w+/g;
  // const match = key.match(regex);
  // if (match) {
  //   return match[0];
  // }
  return null;
};

export const getItems = (layout: any, widgets: any) => {
  if (!layout) return null;
  const parsedLayout = JSON.parse(JSON.stringify(layout));
  if (parsedLayout["lg"]) {
    return parsedLayout["lg"].map((i: any) => {
      const componentKey = parseComponentKey(i.i);
      const component = getComponent(componentKey as ComponentKey);

      return {
        i: i.i,
        x: (parsedLayout["lg"].length * 2) % 12,
        y: Infinity, // puts it at the bottom
        w: 4,
        h: 10,
        component,
        config: widgets ? widgets[i.i] : null,
      };
    });
  }
};
