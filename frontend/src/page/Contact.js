import React from "react";
import contact from "../assets/contact.png";

const Contact = () => {
  return (
    <>
      <h1 className=" text-7xl text-slate-900 font-bold">
        Contact
        <span className=" font-bold text-9xl text-red-400 italic ml-2">us</span>
      </h1>

      <p className=" font-bold text-2xl m-1">
        We value your opinions, suggestions, even your complaints! Because we’d
        be more than happy to help make every shopping experience of yours a
        truly world-class one!
      </p>
      <div className=" flex gap-10 ">
        <img src={contact} alt={"contactimage"} className="" />
        <div className=" md:m-20 p-6">
          <p className=" text-xl font-bold text-center">
            Customer Care Number :- +91 8108138000
            <p> Customer Care Email :- contactus@retail.in</p>
            <p> Timings :-9:30 am to 6:30 pm – (Mon-Sun)</p>
            <p>Media Enquiries :- mediarelations@retail.in</p>
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact;
