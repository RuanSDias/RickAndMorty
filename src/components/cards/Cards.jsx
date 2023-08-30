import React from "react";

export default function Cards({ results }) {
  return (
    <div className="col-4 justify-content-center teste">
      <div className="">
        <img
          style={{ width: "150px", height: "150px" }}
          src={results.image}
          alt=""
          className=""
        />
        <div className="">
          <div className="">{results.name}</div>
          <div className="">
            <div className="">Last Location</div>
            <div className="">{results.location.name}</div>
          </div>
        </div>
      </div>
      <div className="">{results.status}</div>
    </div>
  );
}