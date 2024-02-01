function Navbar() {
  return (
    <div className=" flex w-full px-[350px] py-[32px] flex-col  justify-between gap-[200px]">
      <div className="flex justify-evenly gap-[118px]">
        <img src="Logo.svg" alt="" />
        <div className="flex items-center gap-[21px]">
          <div className=" bg-white w-[667px] flex items-center justify-center gap-10">
            <p>HOME</p>
            <p>BLOG</p>
            <p>CONTACT</p>
          </div>
          <div className="flex items-center gap-10">
            <div className="flex w-[166px] p-2 items-center gap-3 bg-gray-400">
              <p>search</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
