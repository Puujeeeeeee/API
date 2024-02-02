import Navbar from "./Navbar";
import Content2 from "./Content2";
import Content3 from "./Content3";
import Content4 from "./Content4";
import Footer from "./Footer";
function Content1() {
  return (
    <div className="flex flex-col justify-evenly gap-[100px] h-[2000px]">
      <Navbar></Navbar>
      <Content2></Content2>
      <Content3></Content3>
      <Content4></Content4>
    </div>
  );
}
export default Content1;
