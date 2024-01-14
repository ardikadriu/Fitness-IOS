import Image from "next/image";
import Whiteicons from "@/public/White-symbols.png";
const Topbar = () => {
  return (
    <div className="flex items-center justify-between pt-[12px] max-sm:flex max-sm:justify-between shrink-0 ">
      <h1 className="ml-[29px]">9:27</h1>
      <Image
        className="h-[13px] mr-[15px] shrink-0"
        src={Whiteicons}
        width={68}
        height={13}
        alt="icons"
      />
    </div>
  );
};

export default Topbar;
