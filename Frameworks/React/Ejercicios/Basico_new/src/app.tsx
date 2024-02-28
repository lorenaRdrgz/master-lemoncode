import React from "react";
import { AppRouter } from "@/router/app.router";
import { UserProfileProvider } from "./core/providers/user-profile/user-profile.provider";

export const App = () => {
  return (
    <>
      <UserProfileProvider>
          <AppRouter />
      </UserProfileProvider>
    </>
  );
};
