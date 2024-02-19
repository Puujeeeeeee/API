import Footer from "./Footer";
function ErrorPage() {
  return (
    <div className="gap-[130px] flex flex-col">
      <div className="flex flex-col justify-center  items-center gap-[130px]">
        <div className=" flex w-full px-[350px] py-[32px] flex-col  justify-between gap-[200px]">
          <div className="flex justify-evenly gap-[118px]">
            <img src="Logo.svg" alt="" />
            <div className="flex items-center gap-[21px]">
              <div className=" bg-white w-[667px] flex items-center justify-center gap-10">
                <button>Home</button>
                <button>Blog</button>
                <button>Contact</button>
              </div>
              <div className="flex items-center gap-10">
                <div className="flex w-[166px] p-2 items-center gap-3 bg-gray-200 rounded-md">
                  <p className="text-gray-400">search</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-[100px]">
          <div className="text-8xl">404</div>
          <div className="flex  flex-col gap-[20px]">
            <h1 className="text-2xl font-medium">Page Not Found</h1>
            <p>
              Lorem es possimus accro qui ullam nemo nobis? Expedita, aliquam{" "}
              <br />
              libero?accro qui llam nemo nobis? Expedita, aliquam libero?
            </p>
            <div className="flex justify-center items-center bg-blue-600 rounded-md  text-white w-[180px] h-[40px]">
              Back To Home
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
export default ErrorPage;
