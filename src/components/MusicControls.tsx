import React from "react";
import {
  BiShuffle,
  BiSkipPrevious,
  BiSkipNext,
  BiRepeat,
} from "react-icons/bi";
import { BsPlayFill } from "react-icons/bs";

const MusicControls = () => {
  return (
    <div className="bg-black col-span-full row-start-2 px-4 py-3 flex items-center justify-between">
      <div className="flex gap-x-4 items-center">
        <div className="w-14 h-14 bg-indigo-300 rounded-md"></div>
        <div>
          <h3 className="font-semibold text-sm">The Nights</h3>
          <p className="text-xs text-gray-300">Avicii</p>
        </div>
      </div>
      <div className="flex flex-col gap-y-4">
        <div className="flex gap-x-4 items-center px-8">
          <BiShuffle size={20} className="text-gray-600/60" />
          <BiSkipPrevious
            size={38}
            className="text-gray-400 hover:text-white transition-all"
          />
          <div className="w-9 h-9 rounded-full bg-white flex-center hover:scale-105">
            <BsPlayFill color="black" size={24} />
          </div>
          <BiSkipNext
            size={38}
            className="text-gray-400 hover:text-white transition-all"
          />
          <BiRepeat size={20} className="text-gray-600/60" />
        </div>
        <div className="bg-gray-700 w-full rounded-md h-1 overflow-hidden">
          <div
            className="bg-white h-full rounded-md"
            style={{ width: `${23}%` }}
          ></div>
        </div>
      </div>
      <div className=""></div>
    </div>
  );
};

export default MusicControls;
