import Image from "next/image";
import Youngfitnes from "@/public/Young-sportist.png";

const Imagesselect = () => {
  return (
    <div className="max-sm:flex max-sm:flex-col max-sm:items-center max-sm:w-full">
      <div className="flex items-center mt-[22px] justify-center mb-4 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="31"
          height="15"
          viewBox="0 0 31 15"
          fill="none"
        >
          <path
            d="M2.38419e-05 14.9576H6.14153L9.94342 7.64623L6.14153 0.0424547H2.38419e-05L3.80191 7.64623L2.38419e-05 14.9576Z"
            fill="#D9D9D9"
          />
          <path
            d="M10.5293 14.9576H16.6708L20.4727 7.64623L16.6708 0.0424547H10.5293L14.3311 7.64623L10.5293 14.9576Z"
            fill="#D9D9D9"
          />
          <path
            d="M21.0566 14.9576H27.1981L31 7.64623L27.1981 0.0424547H21.0566L24.8585 7.64623L21.0566 14.9576Z"
            fill="#D9D9D9"
          />
        </svg>
        <h1 className="text-[#848484] font-rufina mx-2 font-medium">
          Select your Training
        </h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="31"
          height="15"
          viewBox="0 0 31 15"
          fill="none"
        >
          <path
            d="M31 14.9576H24.8585L21.0566 7.64623L24.8585 0.0424547H31L27.1981 7.64623L31 14.9576Z"
            fill="#D9D9D9"
          />
          <path
            d="M20.4707 14.9576H14.3292L10.5273 7.64623L14.3292 0.0424547H20.4707L16.6689 7.64623L20.4707 14.9576Z"
            fill="#D9D9D9"
          />
          <path
            d="M9.9434 14.9576H3.80189L0 7.64623L3.80189 0.0424547H9.9434L6.14151 7.64623L9.9434 14.9576Z"
            fill="#D9D9D9"
          />
        </svg>
      </div>
      <div className="flex max-sm:flex max-sm:justify-center ">
        <div
          className="rounded-[44px]"
          style={{
            background:
              "linear-gradient(169deg, #38474C -2.38%, #0E7D77 98.52%);",
            maxWidth: "335px",
            position: "relative",
          }}
        >
          <Image
            className="rounded-b-[44px]"
            src={Youngfitnes}
            width={790}
            height={527}
            alt="lol"
          />
          <div className="ml-[25px] absolute bottom-0 mb-[93px] ">
            <h1 className="text-white font-normal  leading-[31px] text-[24px] max-w-[154px]   left-[25px] uppercase mb-5">
              squats with weight
            </h1>
            <div className="flex  ">
              <svg
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.0561 9.77881C23.3745 9.03457 22.3147 8.03001 21.8638 10.2981C21.7106 11.0694 21.3523 11.6638 21.0452 12.1425C20.7143 10.4678 19.7189 8.73435 18.7808 7.56581C18.4299 7.12844 17.1843 5.39019 16.9449 2.48226C16.9091 2.0481 16.3935 1.84467 16.0713 2.1371C12.99 4.93448 11.2983 8.78182 11.2357 13.1129C11.2357 13.1129 9.95246 12.0313 9.25547 10.0192C9.06763 9.47721 8.34128 9.37377 8.02638 9.85312C7.96583 9.94509 7.90987 10.0373 7.85941 10.1267C5.48197 14.3307 4.3382 19.4356 5.39551 24.1852C7.80322 35.0176 27.5383 34.6892 28.7488 22.5708C29.1507 18.5294 27.5952 13.6406 24.0561 9.77881Z"
                  fill="#F8C06D"
                />
                <path
                  d="M9.97769 26.3347C8.92039 22.086 10.0642 17.5194 12.4416 13.759C12.4921 13.6789 12.5483 13.5966 12.6086 13.5142C12.9237 13.0856 13.65 13.178 13.8377 13.6626C14.5347 15.4626 15.8179 16.4302 15.8179 16.4302C15.8695 13.2468 17.0226 10.357 19.1407 8.03919C18.6671 7.38325 17.218 5.80165 16.9449 2.48227C16.9091 2.04811 16.3935 1.84467 16.0713 2.13709C12.99 4.93448 11.2983 8.78183 11.2357 13.1129C11.2357 13.1129 9.95246 12.0313 9.25547 10.0194C9.06786 9.47745 8.34128 9.37401 8.02638 9.85335C7.96583 9.94532 7.90987 10.0375 7.85942 10.127C5.48197 14.3307 4.3382 19.4358 5.39551 24.1854C6.37391 28.5878 10.3935 31.2336 14.8374 31.8721C12.4402 30.6949 10.5979 28.8307 9.97769 26.3347Z"
                  fill="#FF4C01"
                />
              </svg>
              <h1 className="text-[#F8C06D] text-[22px] font-bold font-rufina">
                250 Kcal
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Imagesselect;
