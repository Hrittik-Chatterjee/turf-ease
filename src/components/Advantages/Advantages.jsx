import React from "react";
import { RiSecurePaymentLine } from "react-icons/ri";
import { MdFreeCancellation } from "react-icons/md";
import { FaCalendarCheck } from "react-icons/fa";

const Advantages = () => {
  return (
    <div className=" my-6">
      <h1 className="text-center text-4xl text-primary my-6">
        The Advantage of Our Service
      </h1>
      <div className="flex justify-center ">
        <div className="card  w-96 shadow-xl text-black  bg-slate-300">
          <div className="card-body">
            <div className="card-actions text-primary   justify-center text-6xl my-3 ">
              <FaCalendarCheck />
            </div>
            <h2 className=" text-center text-2xl font-bold">
              Easy Turf Reservation
            </h2>
            <p className="text-center">
              Effortlessly book available turfs through a user-friendly
              interface. View real-time availability, select your preferred
              time, and confirm your reservation in just a few clicks
            </p>
          </div>
        </div>
        <div className="card  w-96 shadow-xl text-black  bg-slate-300 mx-4">
          <div className="card-body">
            <div className="card-actions text-primary   justify-center text-6xl my-3 ">
              <RiSecurePaymentLine />
            </div>
            <h2 className=" text-center text-2xl font-bold">
              Secure Payment Options
            </h2>
            <p className="text-center">
              Safe and reliable payment methods ensure a smooth and secure
              transaction. We offer multiple payment options including
              credit/debit cards, mobile wallets, and more
            </p>
          </div>
        </div>
        <div className="card  w-96 shadow-xl text-black  bg-slate-300">
          <div className="card-body">
            <div className="card-actions  text-primary justify-center text-6xl my-3 ">
              <MdFreeCancellation />
            </div>
            <h2 className=" text-center text-2xl font-bold">
              Flexible Booking & Cancellation
            </h2>
            <p className="text-center">
              Enjoy the flexibility to change or cancel your booking up to a
              certain time before your scheduled session, ensuring convenience
              in case of unexpected changes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
