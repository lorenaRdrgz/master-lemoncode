import React from "react";
import { CenteredLayout } from "layouts/centered.layout";
import { ApiRickComponent } from "@/pods/api-rick/api-rick.component";

export const ApiRickScene: React.FC = () => {
  return (
    <CenteredLayout>
      <ApiRickComponent />
    </CenteredLayout>
  );
};
