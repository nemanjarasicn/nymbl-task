import React, { ReactNode } from "react";

// ui
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import CustomModal from "./modal/CustomModal";

interface DashboardProps {
  children: ReactNode;
}

const Dashboard: React.FC<DashboardProps> = ({ children }) => {
  return (
    <>
      <CustomModal />
      <div className="bg-slate-50">
        <div className="">
          <Navbar />
        </div>
        <div className="main max-w-[2300px] mt-[76px] flex flex-1 justify-between">
          <Sidebar />
          <div
            className={`main md:ml-[150px] overflow-auto w-full h-full z-10`}
          >
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
