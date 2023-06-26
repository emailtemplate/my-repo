"use client";

import React, { useState } from "react";

const Bankcodes = (props) => {
  const [clicked, setclicked] = useState(false);
  return (
    <div>
      <button
        className="underline mt-3"
        onClick={() => {
          setclicked(true);
        }}
      >
        Click to check bank code..
      </button>

      <div className="">
        {clicked && (
          <div className="bg-white px-3 py-5 h-52 overflow-y-scroll">
            <div className="flex justify-end mb-5 underline">
              <button
                className="text-red-900 font-bold text-lg"
                onClick={() => setclicked(false)}
              >
                Close
              </button>
            </div>
            {props.data !== null ? (
              props.data.map((item, index) => (
                <div>
                  <ul className="flex justify-between" key={index}>
                    <li>{item[0]}</li>
                    <li>{item[1]}</li>
                  </ul>
                </div>
              ))
            ) : (
              <div>Loading bank codes...</div>
            )}
          </div>
        )}
      </div>

      {/* <p>{err !== null ? <p>{err}</p> : null}</p> */}
    </div>
  );
};

export default Bankcodes;
