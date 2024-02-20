import Link from "next/link";

const Button = () => {
  return (
    <div className=" max-sm:flex max-sm:justify-center max-sm:z-10 absolute bottom-0 flex justify-center z-10 w-full">
      <Link href={"Newpage"}>
        {" "}
        <button className="px-[108px] py-4 bg-[#F8C06D] rounded-[100px] mb-[22px] text-[#0A0B17] font-bold">
          Get Started
        </button>
      </Link>
    </div>
  );
};

export default Button;
