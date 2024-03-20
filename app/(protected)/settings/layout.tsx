import React from "react";
import { Navbar } from "../_components/navbar";
interface ProtectedLayoutProps {
  children: React.ReactNode;
}

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-500 to-blue-500 ">
      <Navbar />
      {children}
    </div>
  );
};

export default ProtectedLayout;
