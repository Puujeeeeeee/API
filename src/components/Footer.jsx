function Footer({ contactRef }) {
  return (
    <div ref={contactRef}>
      <div className="flex flex-col">
        <div className=" w-full h-[500px] bg-gray-100 ">
          <div className="flex  justify-evenly py-10 mx-52 items-center ">
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
              <p>Home</p>
              <p>Blog</p>
              <p>Contact</p>
            </div>
            <div className="flex"></div>
          </div>
          <div
            className="flex  justify-evenly
        "
          >
            <img src="Logo.svg" alt="" />
            <div className="flex justify-center gap-7 px-2 text-gray-500">
              <p> Terms of use</p>
              <p>Privacy Policy</p>
              <p> Cookie Policy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
