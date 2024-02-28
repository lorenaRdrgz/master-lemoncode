import React from "react";
import { GitHubDetailsComponent } from "@/pods/github-details/github-details.component";
import { AppLayout } from "@/layouts/app.layout";
import { CenteredLayout } from "layouts/centered.layout";


export const GitHubDetailsScene: React.FC = () => {
  return (
    <AppLayout>
      <CenteredLayout>
        <GitHubDetailsComponent />
      </CenteredLayout>
    </AppLayout>
  );
};
