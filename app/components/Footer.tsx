import Image from "next/image";
import girltraining from "@/public/Firstpage-Girl.png";

const Footer = () => {
  return (
    <div className=" flex justify-center ">
      <Image
        className="absolute bottom-[0] "
        src={girltraining}
        width={440}
        height={667}
        alt="training"
      />
    </div>
  );
};

export default Footer;
