import { useState } from "react";
import { db, collection, addDoc } from "../firebaseConfig";
import firstImage from "../assets/undraw_data_0ml2 (1).png";
import Form from "../components/Form";

const Section = ({ waitlistRef }) => {

  return (
    <main
      ref={waitlistRef}
      className="h-auto w-[90%] my-20 flex flex-col-reverse lg:flex-row justify-between items-center"
    >
      <section className="w-[90%] lg:w-[50%] my-10">
        <div className="w-full text-[#061c2d] text-center lg:text-left">
          <h1 className="capitalize font-bold text-3xl my-2">
            Something huge is coming your way!
          </h1>
          <p className="text-md my-5">
            We are launching an online school focused on tech skills like data
            analytics and AI, imbued with a vibrant African vibe. Join us on
            this exciting journey to empower yourself with the skills of the
            future.
          </p>
        </div>
        <Form />
      </section>

      <aside className="w-[90%] lg:w-[45%]">
        <img src={firstImage} alt="illustration" />
      </aside>
    </main>
  );
};

export default Section;
