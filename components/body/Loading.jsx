import React from "react";
import { InfinitySpin } from "react-loader-spinner";

function loading() {
  return (
    <div
      style={{ height: "700px" }}
      className=" flex justify-center items-center w-full p-4 rounded text-white bg-gradient-to-b from-sky-600 to-sky-900"
    >
      <InfinitySpin width="200" color="white" />
    </div>
  );
}

export default loading;
