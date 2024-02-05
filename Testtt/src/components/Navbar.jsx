import { useState } from "react";

const [filteredData, setFilteredData] = useState(articles);
const Navbar = ({ homeHandleClick, blogHandleClick, contactHandleClick }) => {
  const fetchData = async=()=>{
    
  }
  return (
    <div className=" flex w-full px-[350px] py-[32px] flex-col  justify-between gap-[200px]">
      <div className="flex justify-evenly gap-[118px]">
        <img src="Logo.svg" alt="" />
        <div className="flex items-center gap-[21px]">
          <div className=" bg-white w-[667px] flex items-center justify-center gap-10">
            <button onClick={homeHandleClick}>Home</button>
            <button onClick={blogHandleClick}>Blog</button>
            <button onClick={contactHandleClick}>Contact</button>
          </div>
          <div className="flex items-center gap-10">
            <div className="flex w-[166px] p-2 items-center gap-3 bg-gray-200 rounded-md">
              <p className="text-gray-400">search</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
