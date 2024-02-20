import Image from "next/image";
import Blackicons from "@/public/black-symbols.png";
const Topbar = () => {
  return (
    <div className="w-[335px] max-sm:w-full  flex items-center justify-between max-sm:flex max-sm:justify-between px-7  ">
      <h1 className="text-[#474747] font-rufina font-semibold text-[15px]">
        9:27
      </h1>
      <Image
        className="h-[13px]"
        src={Blackicons}
        width={68}
        height={13}
        alt="icons"
      />
    </div>
  );
};

export default Topbar;
