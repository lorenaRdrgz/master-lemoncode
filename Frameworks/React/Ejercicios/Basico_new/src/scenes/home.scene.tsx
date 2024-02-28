import React from "react";
import { CenteredLayout } from "layouts/centered.layout";
import { HomeComponent } from "pods/home/home.component";
import { AppLayout } from "@/layouts/app.layout";

export const HomeScene: React.FC = () => {
  return (
    <AppLayout>
      <CenteredLayout>
        <HomeComponent />
      </CenteredLayout>
    </AppLayout>
  );
};
