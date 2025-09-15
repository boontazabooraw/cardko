declare module "parallax-js" {
  import type { RefObject } from "react";

  export default class Parallax {
    constructor(
      element: HTMLElement | RefObject<HTMLElement>,
      options?: object
    );
    enable(): void;
    disable(): void;
    destroy(): void;
  }
}
