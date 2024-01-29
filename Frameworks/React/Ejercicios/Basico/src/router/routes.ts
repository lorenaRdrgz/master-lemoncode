import { generatePath } from "react-router-dom";

interface SwitchRoutes {
  root: string;
  detail: string;
  rootCharacter: string;
  detailCharacter: string;
}

export const switchRoutes: SwitchRoutes = {
  root: "/",
  detail: "/detail/:login",
  rootCharacter: "/character",
  detailCharacter: "/character/:name",
};

interface Routes extends Omit<SwitchRoutes, "detail"> {
  detail: (login: string) => string;
}

export const routes: Routes = {
  ...switchRoutes,
  detail: (login: string) => generatePath(switchRoutes.detail, { login }),
};
