import "next-i18next";

import common from "./public/locales/fa/common.json";

export declare module "next-i18next" {
  interface Resources {
    common: typeof common;
  }
}
