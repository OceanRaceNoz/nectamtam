import React from "react";

export const SearchBar = () => {
  return (
    <div className="w-[335px] max-w-full mt-[63px]">
      <div className="w-full text-lg text-[#F6F6F6] font-medium text-center px-3">
        <span className="font-bold text-[rgba(246,246,246,1)]">Über wen</span>{" "}
        möchtest du etwas erfahren?
      </div>
      <div className="justify-between items-center bg-[#555] flex w-full gap-[40px_100px] text-xs text-[#A9A9A9] font-bold whitespace-nowrap mt-[11px] px-[15px] py-2.5 rounded-lg">
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent border-none outline-none text-[#A9A9A9] w-full"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/1ad3054b3ce94f0daeab7f24b1d94f43/a04a065792cf5a66e275b0888e30d3bdbc8d3088184996c2321b0afa2b078e3d?placeholderIfAbsent=true"
          alt="Search"
          className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
        />
      </div>
    </div>
  );
};
