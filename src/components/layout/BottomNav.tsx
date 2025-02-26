import React from "react";

export const BottomNav = () => {
  return (
    <nav className="justify-between items-center bg-[#292929] flex w-full gap-[31px] px-5 py-[15px]">
      <button className="self-stretch flex flex-col items-center text-base font-normal whitespace-nowrap leading-none my-auto p-1 rounded-md">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/1ad3054b3ce94f0daeab7f24b1d94f43/6ffb8b99878ab6f8948c120f3a2a58cd9eb8e63480d44863f8bfd75534db2a3a?placeholderIfAbsent=true"
          alt="Home"
          className="aspect-[1] object-contain w-6"
        />
        <div className="bg-clip-text bg-[linear-gradient(180deg,#1BA879_0%,#0A422F_100%)] mt-1.5">
          Home
        </div>
      </button>

      <button className="self-stretch flex flex-col items-center text-base text-[#A9A9A9] font-normal whitespace-nowrap leading-none my-auto p-1">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/1ad3054b3ce94f0daeab7f24b1d94f43/2f0620c8efaf8cecde2b76f8484769abdae6ff9e13040d4cac426adc174265df?placeholderIfAbsent=true"
          alt="Search"
          className="aspect-[1] object-contain w-6"
        />
        <div className="mt-1.5">Suche</div>
      </button>

      <button className="self-stretch flex flex-col items-center my-auto p-1">
        <div className="flex w-[27px] items-center gap-2.5 pr-[3px]">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/1ad3054b3ce94f0daeab7f24b1d94f43/e5fbd578f14a7d65382a0ed9c38a76a86abb02800c5f3ce8e599c523da59c36a?placeholderIfAbsent=true"
            alt="Network"
            className="aspect-[1] object-contain w-6 self-stretch my-auto"
          />
        </div>
        <div className="text-[#A9A9A9] text-base font-normal leading-none mt-1.5">
          Netzwerk
        </div>
      </button>

      <button className="self-stretch flex flex-col items-center text-base text-[#A9A9A9] font-normal whitespace-nowrap text-center leading-none my-auto p-1">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/1ad3054b3ce94f0daeab7f24b1d94f43/19322969656331321dfca886c7f5a6a6daa5b92a01732b78b526e1d17ab24954?placeholderIfAbsent=true"
          alt="Updates"
          className="aspect-[1] object-contain w-6"
        />
        <div className="mt-1.5">Updates</div>
      </button>
    </nav>
  );
};
