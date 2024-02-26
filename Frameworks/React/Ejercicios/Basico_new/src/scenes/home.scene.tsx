import React from "react";
import { CenteredLayout } from "layouts/centered.layout";
import { HomeComponent } from "pods/home/home.component";

export const HomeScene: React.FC = () => {
  return (
    <CenteredLayout>
      <HomeComponent />
    </CenteredLayout>
  );
};
