import React from "react";
import { GiBabyfootPlayers } from "react-icons/gi";
import { FaArrowUpWideShort } from "react-icons/fa6";
import { MdOutlineStadium } from "react-icons/md";
const Stats = () => {
  return (
    <div className="flex justify-center items-center my-12">
      <div className="stats shadow w-[1280px] h-[200px]  bg-slate-300">
        <div className="stat">
          <div className="stat-figure text-primary text-5xl mr-12">
            <GiBabyfootPlayers />
          </div>
          <div className="stat-title text-2xl text-primary">Users</div>
          <div className="stat-value text-primary">31K</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-primary text-5xl mr-12">
            <FaArrowUpWideShort />
          </div>
          <div className="stat-title text-2xl text-primary">New Users</div>
          <div className="stat-value text-primary">4,200</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-primary text-5xl mr-12">
            <MdOutlineStadium />
          </div>
          <div className="stat-title text-2xl text-primary">
            Turfs Registered
          </div>
          <div className="stat-value text-primary">1,200</div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
