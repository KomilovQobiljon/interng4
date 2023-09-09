import type { FC } from "react";
import { Carousel } from "antd";

// const dotsStyle: React.CSSProperties = {
//   backgroundColor: "#46A358"
// }

const Hero: FC = () => (
  <Carousel
    autoplay
    dots={{
      className: "backgroundColor: #46A358"
    }}
  >
    <div>
      <div className="h-[450px] bg-[#F5F5F5] mt-3 flex max-2xl:h-[400px] max-md:h-[300px]">
        <div className="flex-[2] pl-10">
          <h3 className="font-medium text-base mt-[68px] max-lg:text-sm max-md:text-xs max-md:mt-[15px] uppercase">
            welcome to greenshop
          </h3>
          <h1 className="font-black text-[#3D3D3D] text-8xl max-2xl:text-6xl max-lg:text-5xl max-md:text-2xl ">
            LET'S MAKE BETTER
            <span className="text-[#46A358]">PLANET</span>
          </h1>
        </div>
      </div>
    </div>
    <div>
      <div className="h-[450px] bg-[#F5F5F5] mt-3 flex max-2xl:h-[400px] max-md:h-[300px]">
        <div className="flex-[2] pl-10">
          <h3 className="font-medium text-base mt-[68px] max-lg:text-sm max-md:text-xs max-md:mt-[15px] uppercase">
            welcome to greenshop
          </h3>
        </div>
      </div>
    </div>
    <div>
      <div className="h-[450px] bg-[#F5F5F5] mt-3 flex max-2xl:h-[400px] max-md:h-[300px]">
        <div className="flex-[2] pl-10">
          <h3 className="font-medium text-base mt-[68px] max-lg:text-sm max-md:text-xs max-md:mt-[15px] uppercase">
            welcome to greenshop
          </h3>
        </div>
      </div>
    </div>
  </Carousel>
);

export default Hero;
