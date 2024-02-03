import { generatePath } from "react-router-dom";

interface SwitchRoutes {
  root: string;
  list: string;
  detail: string;
  listCharacter: string;
  detailCharacter: string;
}

export const switchRoutes: SwitchRoutes = {
  root: "/",
  list: "/list",
  detail: "/detail/:login",
  listCharacter: "/list-characters",
  detailCharacter: "/character/:name",
};

interface Routes extends Omit<SwitchRoutes, "detail"> {
  detail: (login: string) => string;
}

export const routes: Routes = {
  ...switchRoutes,
  detail: (login: string) => generatePath(switchRoutes.detail, { login }),
};
