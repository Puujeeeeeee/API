import { useState } from "react";

function Content2() {
  return (
    <div className="flex  flex-col items-center gap-[100px]">
      <div className="relative">
        <img src="Image.png" alt="" />
        <div className="flex w-[598px] h-[252px] p-10 flex-col rounded-md items-start gap-6 bg-white absolute top-80 left-5 border border-md">
          <div className="flex flex-col items-start gap-4  ">
            <div className="flex px-2.5 py-1  justify-center items-center gap-1 rounded-md bg-[#4B6BFB]">
              Technology
            </div>
            <p className="text-3xl ">
              Grid system for better Design User Interface
            </p>
            <div className="flex items-center gap-5">August 20, 2022</div>
          </div>
        </div>
        <div className="items-end">
          <div className="inline-flex justify-center items-center">
            <div className="w-[40px] h-[40px] border flex justify-center items-center">
              <img src="iso.svg" alt="" />
            </div>
          </div>
          <div className="inline-flex justify-center items-center">
            <div className="w-[40px] h-[40px] border flex justify-center items-center">
              <img src="icon.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Content2;
