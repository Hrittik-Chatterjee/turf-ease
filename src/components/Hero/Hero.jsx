"use client";
import Image from "next/image";
import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { FaSearch } from "react-icons/fa";

const Hero = () => {
  const [selected, setSelected] = useState();
  const [showDatePicker, setShowDatePicker] = useState(false);

  const toggleDatePicker = () => setShowDatePicker(!showDatePicker);
  return (
    <div className="relative w-full ">
      {/* Background Image */}
      <div className="absolute inset-0 mx-auto">
        <Image
          src="/bg.jpeg"
          alt="Background"
          quality={100}
          width={500}
          height={500}
          className="w-[1380px] h-[500px] mx-auto"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative ">
        <div>
          <h1 className="text-3xl font-bold mb-8 text-white text-center pt-40">
            Find your desired turfs
          </h1>
        </div>

        <div className="w-[850px] flex flex-col items-center justify-center my-12 bg-white py-8 mx-auto px-4 rounded-lg">
          <div className="flex justify-between w-full">
            {/* Dropdown 1 */}
            <select className="select select-primary w-full max-w-xs">
              <option disabled defaultValue>
                Pick The Sport
              </option>
              <option>Futsal</option>
            </select>

            {/* Dropdown 2 */}
            <select className="select select-primary w-full max-w-xs mx-4">
              <option disabled defaultValue>
                Pick Location
              </option>
              <option>Sylhet</option>
              <option>Dhaka</option>
              <option>Chittagong</option>
              <option>Khulna</option>
            </select>

            {/* Date Picker */}
            <div className="w-full max-w-xs relative">
              <button
                className="select select-primary w-full max-w-xs"
                onClick={toggleDatePicker}
              >
                {selected
                  ? ` ${selected.toLocaleDateString()}`
                  : "Select a date"}
              </button>

              {showDatePicker && (
                <div
                  className="absolute mt-2 border rounded p-2 shadow bg-gray-800 text-white z-10"
                  style={{ minWidth: "fit-content" }}
                >
                  <DayPicker
                    mode="single"
                    selected={selected}
                    onSelect={(date) => {
                      setSelected(date);
                      setShowDatePicker(false);
                    }}
                    disabled={{ before: new Date() }}
                    classNames={{
                      day: "hover:bg-gray-600 text-white",
                      selected: "bg-gray-600 text-white",
                      today: "font-bold text-gray-400",
                      month: "text-gray-200",
                      disabled: "text-red-500",
                    }}
                  />
                </div>
              )}
            </div>

            {/* search button */}
            <div className="btn btn-primary ml-4">
              <FaSearch />
              <p>Search</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
