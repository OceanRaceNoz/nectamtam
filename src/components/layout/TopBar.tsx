import React from "react";

export const TopBar = () => {
  return (
    <header className="justify-center items-center backdrop-blur-sm bg-[linear-gradient(180deg,rgba(32,31,35,0.40)_0%,rgba(37,37,40,0.40)_100%)] flex gap-[40px_167px] text-[15px] font-bold tracking-[0.3px] pt-[30px] pb-2.5 px-5 w-full">
      <div className="self-stretch flex items-center gap-2.5 justify-center my-auto">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/1ad3054b3ce94f0daeab7f24b1d94f43/146f7294833a58421af41649f925a46510ee16ca0443ce5ff5360be4d4b03576?placeholderIfAbsent=true"
          alt="Logo"
          className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
        />
        <div className="self-stretch my-auto">
          <span className="text-[rgba(0,153,102,1)]">Nec</span>
          <span className="text-[rgba(0,199,133,1)]">tam</span>
          <span className="text-[rgba(0,241,161,1)]">tam</span>
        </div>
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/1ad3054b3ce94f0daeab7f24b1d94f43/0e38ac131bcac7092fa9b439335abc7c206604c9948fb0679bc0fc5c7726d531?placeholderIfAbsent=true"
        alt="Profile"
        className="aspect-[1] object-contain w-[50px] self-stretch shrink-0 my-auto rounded-[50%]"
      />
    </header>
  );
};
