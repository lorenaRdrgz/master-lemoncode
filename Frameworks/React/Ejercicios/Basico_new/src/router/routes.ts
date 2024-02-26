import { generatePath } from "react-router-dom";

interface SwitchRoutes {
  root: string;
  home: string;
  login: string;
  github: string;
  rick: string;
}

export const switchRoutes: SwitchRoutes = {
  root: "/",
  home: "/home",
  login: "/login",
  github: "/github",
  rick: "/rick",
};
