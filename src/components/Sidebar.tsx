import Link from "next/link";
import React from "react";
import LibraryListItem from "./LibraryListItem";

const Sidebar = () => {
  return (
    <nav className="w-96 flex flex-col gap-y-2 row-span-1 h-full relative">
      <ul className="bg-primaryColor py-2 px-3 rounded-md">
        <li className="px-3 py-1">
          <Link href={"/"}>Home</Link>
        </li>
        <li className="px-3 py-1">
          <Link href={"/"}>Search</Link>
        </li>
      </ul>
      <div className="bg-primaryColor py-3 rounded-md h-full flex-1">
        <div className="flex justify-between items-center text-gray-300 px-6 ">
          <h3 className="font-semibold">Your Library</h3>
          <p className="text-2xl">+</p>
        </div>
        <div className="my-4 flex gap-x-4 px-6 ">
          <Link
            href={"/"}
            className="text-white py-1 px-4 bg-gray-800/70 rounded-full"
          >
            Playlist
          </Link>
          <Link
            href={"/"}
            className="text-white py-1 px-4 bg-gray-800/70 rounded-full"
          >
            Artists
          </Link>
        </div>
        <div className="flex flex-col gap-y-4 overflow-hidden">
          <div className="flex justify-between items-center text-gray-300 px-6">
            <p>Search</p>
            <p>Recents</p>
          </div>
          <ul className="">
            {Array(4).fill(null).map((item,index) => (
              <li key={index}>
                <LibraryListItem />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
