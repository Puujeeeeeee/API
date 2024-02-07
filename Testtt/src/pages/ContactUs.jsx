import { useRouter } from "next/router";
import Footer from "../components/Footer";

function ContactUs() {
  const router = useRouter();
  console.log(router.query.id);
  return (
    <div className="flex flex-col gap-[100px]">
      <div className="flex flex-col items-center justify-center gap-[100px]">
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

        <div className="flex flex-col  ">
          <div className="flex items-center justify-center flex-col w-[600px] gap-[30px]">
            <div className="text-3xl font-medium ">Contact Us</div>
            <p className="flex text-gray-500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur quas optio enim libero nisi ducimus laborum deleniti
              nam molestiae, necessitatibus rerum iusto. Blanditiis
              necessitatibus ipsam minima, voluptate amet quibusdam nostrum.
            </p>
            <div className="flex gap-[20px]">
              <div className="border w-[285px] h-[150px] flex-col gap-[10px] p-2 rounded-xl">
                <h1 className="text-xl font-medium ">Address</h1>
                <p className="text-gray-500">
                  Mongolia, Ulaanbaatar, Baynzurh district
                </p>
              </div>
              <div className="border w-[285px] h-[150px] flex-col gap-[10px] p-2 rounded-xl">
                <h1 className="text-xl font-medium ">Contact</h1>
                <p className="text-gray-500">453-543-234</p>
                <p className="text-gray-500">prevsambuub@gmail.com</p>
              </div>
            </div>
            <div className="flex flex-col  ">
              <div className="w-[600px] h-[440px] border rounded-md flex-col gap-[20px] bg-gray-100 flex p-3 items-start">
                <h1>Leave a Message</h1>
                <div className="flex gap-5 ">
                  <div className="w-[230px] h-[45px] bg-white rounded-md text-gray-400 flex justify-start items-center p-3">
                    Your Name
                  </div>
                  <div className="w-[230px] h-[45px] bg-white rounded-md text-gray-400 justify-start items-center p-3">
                    {" "}
                    Your Email
                  </div>
                </div>
                <div className="w-[480px] h-[40px] bg-white rounded-md flex justify-start items-center text-gray-400 p-3">
                  Subject
                </div>
                <div className="w-[480px] h-[160px] bg-white rounded-md flex justify-start  text-gray-400 p-3">
                  Write a Messages{" "}
                </div>
                <div className="w-[200px] h-[45px] bg-blue-500 text-white flex justify-center items-center rounded-md">
                  {" "}
                  Send Message
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
export default ContactUs;
