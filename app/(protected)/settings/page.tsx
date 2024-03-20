"use client";

import { useSession, signOut } from "next-auth/react";
import { logout } from "@/actions/logout";
import { useCurrentUser } from "@/hooks/use-current-user";
const SettingsPage = () => {
  const user = useCurrentUser();

  const onClick = () => {
    logout();
  };

  return (
    <div className="bg-white p-10 rounded-xl">
      {/* {JSON.stringify(user)} */}
      <form>
        <button onClick={onClick} type="submit">
          Sign Out
        </button>
      </form>
    </div>
  );
};

export default SettingsPage;
