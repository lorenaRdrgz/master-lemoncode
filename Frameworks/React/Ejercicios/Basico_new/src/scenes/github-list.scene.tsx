import React from "react";
import { AppLayout } from "@/layouts/app.layout";
import { GitHubListContainer } from "@/pods/github-list/github-list.container";

export const GitHubListScene: React.FC = () => {
  return (
    <AppLayout>
      <div style={{ display: "flex" }}>
        <div>
          <GitHubListContainer/>
        </div>
      </div>
    </AppLayout>
  );
};
