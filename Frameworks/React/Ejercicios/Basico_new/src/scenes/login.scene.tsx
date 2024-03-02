import React from "react";
import { CenteredLayout } from "layouts/centered.layout";
import { LoginComponent } from "pods/login/login.component";
import { LoginContainer } from "@/pods/login/login.container";

export const LoginScene: React.FC = () => {
  return (
    <CenteredLayout>
      <LoginContainer />
    </CenteredLayout>
  );
};
