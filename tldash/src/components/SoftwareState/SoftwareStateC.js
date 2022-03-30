import React, {useState} from "react";

const SoftwareStateC = (props) => {

    const currState = props.softState

    return (
        <div className="bg-white p-4 border rounded-lg shadow-sm font-mulish xl:col-span-2 h-44">
            <h1 className="font-semibold mb-1">Software State</h1>
            {currState == '0' && (
                <div>
                    <div className="flex gap-2 mb-1">
                        <div className="bg-red-300 rounded-xl px-2 border-4 font-black text-black border-black flex justify-center">0</div>
                        <div className="bg-transparent rounded-xl px-2 border-4 font-black text-neutral-300 border-neutral-300 flex justify-center">1</div>
                        <div className="bg-transparent rounded-xl px-2 border-4 font-black text-neutral-300 border-neutral-300 flex justify-center">2</div>
                        <div className="bg-transparent rounded-xl px-2 border-4 font-black text-neutral-300 border-neutral-300 flex justify-center">3</div>
                        <div className="bg-transparent rounded-xl px-2 border-4 font-black text-neutral-300 border-neutral-300 flex justify-center">4</div>
                        <div className="bg-transparent rounded-xl px-2 border-4 font-black text-neutral-300 border-neutral-300 flex justify-center">5</div>
                    </div>
                    <div className="flex flex-wrap gap-x-2">
                        <div className="font-extrabold text-3xl text-black">
                            CONFIGURATION
                        </div>
                        <div className="font-bold text-3xl text-neutral-300 hidden">
                            ASCENT
                        </div>
                        <div className="font-bold text-3xl text-neutral-300 hidden">
                            RELEASE
                        </div>
                        <div className="font-bold text-3xl text-neutral-300 hidden">
                            LG_PARACHUTE_DEPLOY
                        </div>
                        <div className="font-bold text-3xl text-neutral-300 hidden">
                            TP_DEPLOY
                        </div>
                        <div className="font-bold text-3xl text-neutral-400 hidden">
                            RECOVERY
                        </div>
                    </div>
                </div>
            )}
            {currState == '1' && (
                <div>
                    <div className="flex gap-2 mb-1">
                        <div className="bg-transparent rounded-xl px-2 border-4 font-black text-neutral-300 border-neutral-300 flex justify-center">0</div>
                        <div className="bg-red-300 rounded-xl px-2 border-4 font-black text-black border-black flex justify-center">1</div>
                        <div className="bg-transparent rounded-xl px-2 border-4 font-black text-neutral-300 border-neutral-300 flex justify-center">2</div>
                        <div className="bg-transparent rounded-xl px-2 border-4 font-black text-neutral-300 border-neutral-300 flex justify-center">3</div>
                        <div className="bg-transparent rounded-xl px-2 border-4 font-black text-neutral-300 border-neutral-300 flex justify-center">4</div>
                        <div className="bg-transparent rounded-xl px-2 border-4 font-black text-neutral-300 border-neutral-300 flex justify-center">5</div>
                    </div>
                    <div className="flex flex-wrap gap-x-2">
                        <div className="font-bold text-3xl text-neutral-300 hidden">
                            CONFIGURATION
                        </div>
                        <div className="font-extrabold text-3xl text-black">
                            ASCENT 
                        </div>
                        <div className="font-bold text-3xl text-neutral-300 hidden">
                            RELEASE
                        </div>
                        <div className="font-bold text-3xl text-neutral-300 hidden">
                            LG_PARACHUTE_DEPLOY
                        </div>
                        <div className="font-bold text-3xl text-neutral-300 hidden">
                            TP_DEPLOY
                        </div>
                        <div className="font-bold text-3xl text-neutral-400 hidden">
                            RECOVERY
                        </div>
                    </div>
                </div>
            )}
            {currState == '2' && (
                <div>
                    <div className="flex gap-2 mb-1">
                        <div className="bg-transparent rounded-xl px-2 border-4 font-black text-neutral-300 border-neutral-300 flex justify-center">0</div>
                        <div className="bg-transparent rounded-xl px-2 border-4 font-black text-neutral-300 border-neutral-300 flex justify-center">1</div>
                        <div className="bg-red-300 rounded-xl px-2 border-4 font-black text-black border-black flex justify-center">2</div>
                        <div className="bg-transparent rounded-xl px-2 border-4 font-black text-neutral-300 border-neutral-300 flex justify-center">3</div>
                        <div className="bg-transparent rounded-xl px-2 border-4 font-black text-neutral-300 border-neutral-300 flex justify-center">4</div>
                        <div className="bg-transparent rounded-xl px-2 border-4 font-black text-neutral-300 border-neutral-300 flex justify-center">5</div>
                    </div>
                    <div className="flex flex-wrap gap-x-2">
                        <div className="font-bold text-3xl text-neutral-300 hidden">
                            CONFIGURATION
                        </div>
                        <div className="font-bold text-3xl text-neutral-300 hidden">
                            ASCENT 
                        </div>
                        <div className="font-extrabold text-3xl text-black">
                            RELEASE
                        </div>
                        <div className="font-bold text-3xl text-neutral-300 hidden">
                            LG_PARACHUTE_DEPLOY
                        </div>
                        <div className="font-bold text-3xl text-neutral-300 hidden">
                            TP_DEPLOY
                        </div>
                        <div className="font-bold text-3xl text-neutral-400 hidden">
                            RECOVERY
                        </div>
                    </div>
                </div>
            )}
            {currState == '3' && (
                <div>
                    <div className="flex gap-2 mb-1">
                        <div className="bg-transparent rounded-xl px-2 border-4 font-black text-neutral-300 border-neutral-300 flex justify-center">0</div>
                        <div className="bg-transparent rounded-xl px-2 border-4 font-black text-neutral-300 border-neutral-300 flex justify-center">1</div>
                        <div className="bg-transparent rounded-xl px-2 border-4 font-black text-neutral-300 border-neutral-300 flex justify-center">2</div>
                        <div className="bg-red-300 rounded-xl px-2 border-4 font-black text-black border-black flex justify-center">3</div>
                        <div className="bg-transparent rounded-xl px-2 border-4 font-black text-neutral-300 border-neutral-300 flex justify-center">4</div>
                        <div className="bg-transparent rounded-xl px-2 border-4 font-black text-neutral-300 border-neutral-300 flex justify-center">5</div>
                    </div>
                    <div className="flex flex-wrap gap-x-2">
                        <div className="font-bold text-3xl text-neutral-300 hidden">
                            CONFIGURATION
                        </div>
                        <div className="font-bold text-3xl text-neutral-300 hidden">
                            ASCENT 
                        </div>
                        <div className="font-bold text-3xl text-neutral-300 hidden">
                            RELEASE
                        </div>
                        <div className=" font-extrabold text-3xl text-black">
                            LG_PARACHUTE_DEPLOY
                        </div>
                        <div className="font-bold text-3xl text-neutral-300 hidden">
                            TP_DEPLOY
                        </div>
                        <div className="font-bold text-3xl text-neutral-400 hidden">
                            RECOVERY
                        </div>
                    </div>
                </div>
            )}
            {currState == '4' && (
                <div>
                    <div className="flex gap-2 mb-1">
                        <div className="bg-transparent rounded-xl px-2 border-4 font-black text-neutral-300 border-neutral-300 flex justify-center">0</div>
                        <div className="bg-transparent rounded-xl px-2 border-4 font-black text-neutral-300 border-neutral-300 flex justify-center">1</div>
                        <div className="bg-transparent rounded-xl px-2 border-4 font-black text-neutral-300 border-neutral-300 flex justify-center">2</div>
                        <div className="bg-transparent rounded-xl px-2 border-4 font-black text-neutral-300 border-neutral-300 flex justify-center">3</div>
                        <div className="bg-red-300 rounded-xl px-2 border-4 font-black text-black border-black flex justify-center">4</div>
                        <div className="bg-transparent rounded-xl px-2 border-4 font-black text-neutral-300 border-neutral-300 flex justify-center">5</div>
                    </div>
                    <div className="flex flex-wrap gap-x-2">
                        <div className="font-bold text-3xl text-neutral-300 hidden">
                            CONFIGURATION
                        </div>
                        <div className="font-bold text-3xl text-neutral-300 hidden">
                            ASCENT 
                        </div>
                        <div className="font-bold text-3xl text-neutral-300 hidden ">
                            RELEASE
                        </div>
                        <div className="font-bold text-3xl text-neutral-300 hidden">
                            LG_PARACHUTE_DEPLOY
                        </div>
                        <div className="font-extrabold text-3xl text-black">
                            TP_DEPLOY
                        </div>
                        <div className="font-bold text-3xl text-neutral-400 hidden">
                            RECOVERY
                        </div>
                    </div>
                </div>
            )}
            {currState == '5' && (
                <div>
                    <div className="flex gap-2 mb-1">
                        <div className="bg-transparent rounded-xl px-2 border-4 font-black text-neutral-300 border-neutral-300 flex justify-center">0</div>
                        <div className="bg-transparent rounded-xl px-2 border-4 font-black text-neutral-300 border-neutral-300 flex justify-center">1</div>
                        <div className="bg-transparent rounded-xl px-2 border-4 font-black text-neutral-300 border-neutral-300 flex justify-center">2</div>
                        <div className="bg-transparent rounded-xl px-2 border-4 font-black text-neutral-300 border-neutral-300 flex justify-center">3</div>
                        <div className="bg-transparent rounded-xl px-2 border-4 font-black text-neutral-300 border-neutral-300 flex justify-center">4</div>
                        <div className="bg-red-300 rounded-xl px-2 border-4 font-black text-black border-black flex justify-center">5</div>
                    </div>
                    <div className="flex flex-wrap gap-x-2">
                        <div className="font-bold text-3xl text-neutral-300 hidden">
                            CONFIGURATION
                        </div>
                        <div className="font-bold text-3xl text-neutral-300 hidden">
                            ASCENT 
                        </div>
                        <div className="font-bold text-3xl text-neutral-400 hidden ">
                            RELEASE
                        </div>
                        <div className="font-bold text-3xl text-neutral-300 hidden">
                            LG_PARACHUTE_DEPLOY
                        </div>
                        <div className="font-bold text-3xl text-neutral-300 hidden">
                            TP_DEPLOY
                        </div>
                        <div className="font-extrabold text-3xl text-black">
                            RECOVERY
                        </div>
                    </div>
                </div>
            )}
            
        </div>
    );
}

export default SoftwareStateC;
