import React from "react";

const GPS = (props) => {
    return (
        <div className="bg-white p-4 border rounded-lg shadow-sm font-mulish xl:col-span-2">
            <h1 className="font-bold text-xl mb-2 text-light-gray">GPS</h1>
            <div className="flex flex-wrap gap-y-2 gap-x-5">
                <div>
                    <h2 className="text-base font-semibold leading-tight">
                        Time
                    </h2>
                    <div className="flex-row flex items-end">
                        <h3 className="font-normal text-3xl pr-1">{props.gt}</h3>
                        <h4 className="font-bold text-base text-light-gray">
                           
                        </h4>
                    </div>
                </div>
                <div>
                    <h2 className="text-base font-semibold leading-tight">
                        Altitude
                    </h2>
                    <div className="flex-row flex items-end">
                        <h3 className="font-normal text-3xl pr-1">{props.gAlt}</h3>
                        <h4 className="font-bold text-base text-light-gray">
                            meters
                        </h4>
                    </div>
                </div>
                <div>
                    <h2 className="text-base font-semibold leading-tight">
                        Latitude
                    </h2>
                    <div className="flex-row flex items-end">
                        <h3 className="font-normal text-3xl pr-1">{props.glat}°</h3>
                        <h4 className="font-bold text-base text-light-gray">
                            North
                        </h4>
                    </div>
                </div>
                <div>
                    <h2 className="text-base font-semibold leading-tight">
                        Longitude
                    </h2>
                    <div className="flex-row flex items-end">
                        <h3 className="font-normal text-3xl pr-1">{props.gLong}°</h3>
                        <h4 className="font-bold text-base text-light-gray">
                            West
                        </h4>
                    </div>
                </div>
                <div>
                    <h2 className="text-base font-semibold leading-tight">
                        GPS Sats
                    </h2>
                    <h3 className="font-normal text-3xl pr-1">{props.gS}</h3>
                </div>
            </div>
        </div>
    );
}

export default GPS;
