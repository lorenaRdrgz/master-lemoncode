import React from "react";
import { CenteredLayout } from "layouts/centered.layout";
import { LoginComponent } from "pods/login/login.component";

export const LoginScene: React.FC = () => {
  return (
    <CenteredLayout>
      <LoginComponent />
    </CenteredLayout>
  );
};
