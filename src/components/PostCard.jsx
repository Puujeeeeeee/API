function PostCard() {
  return (
    <div className="flex flex-col items-start ">
      <img className="relative" src="Rectangle.png" alt="" />
      <div className="flex w-[280px] h-[120px] flex-col items-start gap-4 absolute px-4 py-2 ">
        <div className="flex w-[100px] h-[25px] py-1 px-[10px] justify-center items-center gap-1 rounded-md bg-[#4B6BFB]">
          <p className="text-white"> Technology</p>
        </div>

        <p className="text-white text-lg">
          The Impact of Technology on the Workplace: How Technology is Changing
        </p>
      </div>
    </div>
  );
}
export default PostCard;
