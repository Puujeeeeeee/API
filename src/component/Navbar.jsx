import React from "react";
export const Navbar = () => {
  return (
    <div className="flex px-80 py-8  gap-10 flex-col items-start bg-red-500">
      <div className="flex items-start gap-[118px] ">
        <div className=" bg-gray-500">
          <img src="Logo.svg" alt="" />
          <div className="flex items-center gap-5">
            <div className="flex width-[667px]  justify-center items-center gap">
              <div className="flex center gap-1 ">
                <li className="bg-red-600">Home</li>
                <li>Blog</li>
                <li>Contact</li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
