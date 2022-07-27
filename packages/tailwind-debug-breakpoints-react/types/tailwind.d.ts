declare module "tailwindcss/src/util/normalizeScreens" {
  import {
    ResolvableTo,
    Screen,
    ScreensConfig,
  } from "tailwindcss/types/config";

  type ScreenDefinition = {
    name: string;
    values: Screen;
  };

  export function normalizeScreens(
    screens: ResolvableTo<ScreensConfig>
  ): ScreenDefinition[];
}

declare module "tailwindcss/src/util/buildMediaQuery" {
  import { ScreenDefinition } from "tailwindcss/src/util/normalizeScreens";

  function buildMediaQuery(screen: ScreenDefinition): string;

  export = buildMediaQuery;
}
