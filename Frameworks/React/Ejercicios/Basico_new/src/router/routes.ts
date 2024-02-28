import { generatePath } from "react-router-dom";

interface SwitchRoutes {
  root: string;
  home: string;
  login: string;
  github: string;
  rick: string;
  githubDetails:string;
  rickDetails:string;
}

export const switchRoutes: SwitchRoutes = {
  root: "/",
  home: "/home",
  login: "/login",
  github: "/github",
  rick: "/rick",
  githubDetails:"/github/details/:id",
  rickDetails:"/rick/details/:id",
};


interface Routes extends Omit<SwitchRoutes, "githubDetails"> {
  githubDetails: (id: string) => string;
  // rickDetails: (id: string) => string;
}

export const routes: Routes = {
  ...switchRoutes,
  githubDetails: (id: string) => generatePath(switchRoutes.githubDetails, { id }),
  // rickDetails: (id: string) => rickDetails(switchRoutes.rickDetails, { id }),
};
