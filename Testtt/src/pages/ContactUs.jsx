import { useRouter } from "next/router";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
function ContactUs() {
  const router = useRouter();
  console.log(router.query.id);
  return (
    <div className="flex flex-col gap-[100px]">
      <div className="flex flex-col items-center justify-center gap-[100px]">
        <div>
          <Navbar></Navbar>
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
              <div className="border w-[285px] h-[150px] flex-col gap-[10px] p-2 rounded-xl hover:shadow-xl duration-200">
                <h1 className="text-xl font-medium ">Address</h1>
                <p className="text-gray-500">
                  Mongolia, Ulaanbaatar, Baynzurh district
                </p>
              </div>
              <div className="border w-[285px] h-[150px] flex-col gap-[10px] p-2 rounded-xl hover:shadow-xl duration-200">
                <h1 className="text-xl font-medium ">Contact</h1>
                <p className="text-gray-500">453-543-234</p>
                <p className="text-gray-500">prevsambuub@gmail.com</p>
              </div>
            </div>
            <div className="flex flex-col  ">
              <div className="w-[600px] h-[440px] border rounded-md flex-col gap-[20px] bg-gray-100 flex p-3 items-start">
                <h1>Leave a Message</h1>
                <div className="flex gap-5 ">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-[236px] h-[40px] p-2 bg-white rounded-lg hover:shadow-xl duration-300"
                  ></input>
                  <input
                    type="text"
                    placeholder="Your Email"
                    className="w-[236px] h-[40px] p-2 bg-white rounded-lg hover:shadow-xl duration-300"
                  ></input>
                </div>
                <input
                  type="text"
                  placeholder="Your Subject"
                  className="w-[480px] h-[40px] p-2 bg-white rounded-lg hover:shadow-xl duration-300 "
                ></input>
                <input
                  type="text"
                  placeholder="Write a Messages"
                  className="w-[480px] h-[140px] p-2 bg-white rounded-lg hover:shadow-xl duration-300 "
                ></input>
                <div className="w-[200px] h-[45px] bg-blue-500 text-white flex justify-center items-center rounded-md hover:shadow-xl duration-300 cursor-pointer">
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
