import { UserInfo } from "@/components/user-info";
import { currentUser } from "@/lib/auth";
import React from "react";

const ServerPage = async () => {
  const user = await currentUser();

  return <UserInfo label="💻 Server Component" user={user} />;
};

export default ServerPage;
