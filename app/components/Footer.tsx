import Image from "next/image";
import girltraining from "@/public/Firstpage-Girl.png";

const Footer = () => {
  return (
    <div className="relative flex justify-center ">
      <Image
        className="absolute top-[-67px]"
        src={girltraining}
        width={1000}
        height={667}
        alt="training"
      />
    </div>
  );
};

export default Footer;
