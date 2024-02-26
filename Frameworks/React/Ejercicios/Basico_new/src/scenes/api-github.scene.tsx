import React from "react";
import { CenteredLayout } from "layouts/centered.layout";
import { ApiGitHubComponent } from "@/pods/api-github/api-github.component";

export const ApiGitHubScene: React.FC = () => {
  return (
    <CenteredLayout>
      <ApiGitHubComponent />
    </CenteredLayout>
  );
};
