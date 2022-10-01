import { atom } from "recoil";

const menuOpenState = atom({
  key: "menuOpen",
  default: false,
});

export { menuOpenState };
