import Link from "next/link";
import React from "react";

const LibraryListItem = () => {
  return (
    <Link href={"/"} className="flex items-center gap-x-4 py-2 hover:bg-gray-300/10 px-6">
      <div className="w-14 h-14 bg-violet-300 rounded-md"></div>
      <div className="flex flex-col gap-y-1">
        <h3 className="font-semibold">Liked Songs</h3>
        <span className="text-gray-300 text-sm">Playlist . 49 songs</span>
      </div>
    </Link>
  );
};

export default LibraryListItem;
