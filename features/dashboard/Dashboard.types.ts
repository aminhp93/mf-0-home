type DashboardContent = {
  layouts: any;
  widgets: any;
};

export interface Dashboard {
  uuid: string;
  name: string;
  content: DashboardContent;
  is_public: boolean;
  is_active: boolean;
  user_uuid?: string;
}

export interface UpdateDashboardInput
  extends Pick<Dashboard, "content" | "user_uuid"> {
  name?: string;
  is_public?: boolean;
  is_active?: boolean;
}
export interface CreateDashboardInput
  extends Omit<Dashboard, "uuid" | "user_uuid"> {}

export type ComponentKey =
  | "plot"
  | "station"
  | "station-summary"
  | "map"
  | "vessel"
  | "power-origin"
  | "diagram"
  | "vessel-overview"
  | "profit-margin";
