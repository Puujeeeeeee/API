import Link from "next/link";
function Footer({ contactRef }) {
  return (
    <div ref={contactRef}>
      <div className="flex  flex-col">
        <div className=" w-[2000px] h-[500px] bg-gray-100 ">
          <div className="flex  py-10  items-start justify-evenly ">
            <div className="flex flex-col w-[350px] h-[300px] gap-4 ">
              <h1 className="text-2xl">About</h1>
              <p className="text-gray-500">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Cupiditate, ipsum impedit. Tempore eligendi animi voluptatum,
                excepturi rem reiciendis, odio iusto ipsa, autem voluptatibus
                quasi id! Temporibus, consectetur! Eius, nostrum nisi.
              </p>
              <p className="font-medium text-gray-500">
                Email:prevsambuub@gmail.com
              </p>
              <p className="font-medium text-gray-500">Phone:+976 95129336</p>
            </div>
            <div className="flex flex-col gap-2 text-gray-500">
              <Link
                className="hover:duration-200 hover:text-blue-400 hover:scale-105"
                href={{ pathname: "/Home", query: { id: 22222 } }}
              >
                Home
              </Link>
              <Link
                className="hover:duration-200  hover:text-blue-400 hover:scale-105"
                href={{ pathname: "/BlogListing", query: { id: 22222 } }}
              >
                Blog
              </Link>
              <Link
                className="hover:duration-200  hover:text-blue-400 hover:scale-105"
                href={{ pathname: "/ContactUs", query: { id: 33333 } }}
              >
                Contact Us
              </Link>
            </div>
            <div className="flex gap-[10px] cursor-pointer">
              <img src="iso.svg" alt="" />
              <img src="blog.svg" alt="" />
              <img src="iso.svg" alt="" />
              <img src="icon.svg" alt="" />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="border-b-2 w-[1300px] "></div>
          </div>
          <div
            className="flex  py-10  items-start justify-around
        "
          >
            <img src="logo.svg" alt="" />
            <div className="flex justify-center gap-7 px-2 text-gray-500 cursor-pointer">
              <p className="hover:text-blue-400 duration-300 hover:scale-110 ">
                {" "}
                Terms of use
              </p>
              <div className="border-r-2"></div>
              <p className="hover:text-blue-400 duration-300 hover:scale-110 ">
                Privacy Policy
              </p>
              <div className="border-r-2"></div>
              <p className="hover:text-blue-400 duration-300 hover:scale-110 ">
                {" "}
                Cookie Policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
