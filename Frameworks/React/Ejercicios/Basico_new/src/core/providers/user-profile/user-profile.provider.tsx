import React from "react";
import { UserProfileContext } from "./user-profile.context";

export const UserProfileProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [username, setUsername] = React.useState<string>("");

  return (
      <UserProfileContext.Provider value={{ username, setUsername }}>
          {children}
      </UserProfileContext.Provider>
  );
};