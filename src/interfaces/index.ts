import common from "../../public/locales/fa/common.json";

export type TKey = keyof typeof common;
// export type TKeyMenu = keyof typeof menu;

export interface Options {
  [key: string]: any;
}

export enum Pages {
  Dashboard = "/",
}
