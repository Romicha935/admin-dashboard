import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import Avatar from "./Avatar";

const DashboardCards: React.FC = () => {
  return (
    <div className="w-full max-w-5xl mx-auto p-6 flex gap-2 flex-wrap">
    <div className="w-full max-w-5xl mx-auto p-6 flex gap-4 flex-wrap">

      <div className="relative flex-1 bg-[#EDE7FF] rounded-[26px] p-6 flex flex-col justify-between">
        <h3 className="text-sm font-medium text-slate-800">
          Unreviewed calls
        </h3>

        <div className="flex items-center gap-4 mt-4">
          <div className="flex -space-x-2 items-center">
            <Avatar  />

          </div>
          <p className="text-sm text-slate-700/90">
            Lorem Ipsum is simply dummy text of the printing
          </p>
        </div>


        <div className="absolute bottom-0 right-0 translate-x-[35%] translate-y-[35%]">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
            <div className="w-9 h-9 bg-black text-white rounded-full flex items-center justify-center">
              <FiArrowUpRight />
            </div>
          </div>
        </div>
      </div>


      <div className="relative w-40 bg-[#DCEBFF] rounded-[26px] p-6 flex flex-col justify-between items-start">
        <h3 className="text-sm font-medium text-slate-800">Task</h3>
        <span className="text-4xl font-semibold mt-2">12</span>
        <div className="absolute bottom-0 right-0 translate-x-[35%] translate-y-[35%]">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
            <div className="w-9 h-9 bg-black text-white rounded-full flex items-center justify-center">
              <FiArrowUpRight />
            </div>
          </div>
        </div>
      </div>

      {/* Requires Call Back Card */}
      <div className="relative w-40 bg-[#FFE7DA] rounded-[26px] p-6 flex flex-col justify-between items-start">
        <h3 className="text-sm font-medium text-slate-800">
          Requires a call back
        </h3>
        <span className="text-4xl font-semibold mt-2">7</span>
        <div className="absolute bottom-0 right-0 translate-x-[35%] translate-y-[35%]">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center ">
            <div className="w-9 h-9 bg-black text-white rounded-full flex items-center justify-center">
              <FiArrowUpRight />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default DashboardCards