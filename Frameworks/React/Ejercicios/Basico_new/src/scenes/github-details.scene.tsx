import React from "react";
import { useParams } from "react-router-dom"
import { AppLayout } from "@/layouts/app.layout";
import { CenteredLayout } from "layouts/centered.layout";
import { GitHubDetailsContainer } from "@/pods/github-details/github-details.container";


export const GitHubDetailsScene: React.FC = () => {
  const { id } = useParams();
  return (
    <AppLayout>
      <CenteredLayout>
        <GitHubDetailsContainer id={id} />
      </CenteredLayout>
    </AppLayout>
  );
};
