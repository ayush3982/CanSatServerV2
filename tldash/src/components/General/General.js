import React from "react";

const General = (props) => {
  return (
    <div className="bg-white p-4 border rounded-lg shadow-sm font-mulish">
      <h1 className="font-bold text-xl mb-2 text-light-gray">General</h1>
      <div className="flex flex-wrap gap-x-5 gap-y-2">
        <div className="">
          <h2 className="text-base font-semibold leading-tight">Mode</h2>
          <div className="font-base text-3xl h-8">{props.mode}</div>
        </div>
        <div className="">
          <h2 className="text-base font-semibold leading-tight">TP_Released</h2>
          <div className="font-base text-3xl h-8">{props.tp}</div>
        </div>
        <div className="">
          <h2 className="text-base font-semibold leading-tight">CMD Echo</h2>
          <div className="font-base text-2xl h-8">{props.cmdE}</div>
        </div>
      </div>
    </div>
  );
}

export default General;
