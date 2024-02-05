import Footer from "./Footer";
import PostCard from "./PostCard";
function Content3() {
  return (
    <div>
      <div className="flex  flex-col items-center gap-2.5 ">
        <div className="flex w-[1290px] h-[390px] flex-col items-center">
          <div className="flex flex-col items-start gap-[30px]">
            <div className="flex items-start gap-8">
              <h3 className="text-lg font-bold">Trending</h3>
            </div>
            <div className="flex items-start gap-[20px]">
              <PostCard></PostCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Content3;
