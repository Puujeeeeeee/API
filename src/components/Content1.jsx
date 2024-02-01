import Navbar from "./Navbar";
import Content2 from "./Content2";
import Content3 from "./Content3";
function Content1() {
  return (
    <div className="flex flex-col justify-evenly gap-[100px]">
      <Navbar></Navbar>
      <Content2></Content2>
      <Content3></Content3>
    </div>
  );
}
export default Content1;
