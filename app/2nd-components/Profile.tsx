import Image from "next/image";
import Profilepic from "@/public/porfile-picture.png";
const Profile = () => {
  return (
    <div className="flex max-sm:w-[335px] max-sm:flex max-sm:justify-between mt-[44px] mb-20   w-[335px] justify-between ">
      <div>
        <h2 className="font-rufina text-[13px] text-[#848484] font-medium leading-[16.9px] ">
          GOOD MORNING
        </h2>
        <h1 className="text-[#474747] text-[24px] font-rufina font-medium">
          Rose Marlo
        </h1>
      </div>
      <div
        style={{
          background: "linear-gradient(169deg, #38474C -2.38%, #0E7D77 98.52%)",
          width: "52px",
          height: "52px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "100%",
          overflow: "hidden",
        }}
      >
        <Image src={Profilepic} width={68} height={24} alt="picture" />
      </div>
    </div>
  );
};

export default Profile;
