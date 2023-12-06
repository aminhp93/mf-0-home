import { create } from "zustand";
import { produce } from "immer";

type System = {
  id: string;
};
type Subsystem = {
  id: string;
};
type Controller = {
  id: string;
};

export type DataStore = {
  systems: System[];
  subsystems: Subsystem[];
  controllers: Controller[];
  setSystems: (systems: System[]) => void;
  setSubsystems: (subsystems: Subsystem[]) => void;
  setControllers: (controllers: Controller[]) => void;
};

export const useDataStore = create<DataStore>((set) => ({
  systems: [],
  subsystems: [],
  controllers: [],
  setSystems: (systems) =>
    set(
      produce<DataStore>((draft) => {
        draft.systems = systems;
      })
    ),
  setSubsystems: (subsystems) =>
    set(
      produce<DataStore>((draft) => {
        draft.subsystems = subsystems;
      })
    ),
  setControllers: (controllers) =>
    set(
      produce<DataStore>((draft) => {
        draft.controllers = controllers;
      })
    ),

  //   hidden: [],
  //   right: ["items", "properties", "hierarchy"],
  //   left: [],
  //   activeRightPanel: "properties",
  //   activeLeftPanel: "items",
  //   togglePanel: (panel) =>
  //     set(
  //       produce<LayoutStore>((draft) => {
  //         if (draft.left.includes(panel)) {
  //           draft.left = draft.left.filter((p) => p !== panel);
  //           draft.hidden.push(panel);
  //           draft.activeLeftPanel = draft.left[0];
  //         } else if (draft.right.includes(panel)) {
  //           draft.right = draft.right.filter((p) => p !== panel);
  //           draft.hidden.push(panel);
  //           draft.activeRightPanel = draft.right[0];
  //         } else {
  //           draft.hidden = draft.hidden.filter((p) => p !== panel);
  //           draft.right.push(panel);
  //           draft.activeRightPanel = panel;
  //         }
  //       })
  //     ),
  //   setActivePanel: (panel, position) =>
  //     set(
  //       produce<LayoutStore>((draft) => {
  //         if (position === "left") {
  //           draft.activeLeftPanel = panel;
  //         } else if (position === "right") {
  //           draft.activeRightPanel = panel;
  //         }
  //       })
  //     ),
}));
