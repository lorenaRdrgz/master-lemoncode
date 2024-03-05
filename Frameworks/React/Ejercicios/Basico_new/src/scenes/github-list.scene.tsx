import React from "react";
import { AppLayout } from "@/layouts/app.layout";
import { GitHubListContainer } from "@/pods/github-list/github-list.container";
import { CenteredLayout } from "@/layouts/centered.layout";

export const GitHubListScene: React.FC = () => {
  return (
    <AppLayout>
      <CenteredLayout>
          <GitHubListContainer/>
      </CenteredLayout>
    </AppLayout>
  );
};
