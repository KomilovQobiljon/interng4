import type { FC } from "react";
import { Modal } from "antd";
import { LoginOutlined } from "@ant-design/icons";

const SiteMap: FC = () => {
  const customLinkStyle: string =
    "text-[1rem] font-normal leading-6 cursor-pointer";
  const hoverLinkStyle: string =
    "hover:border-l-[5px] hover:border-[#46A358] hover:pl-[5px] hover:text-[#46A358] transition-colors duration-500";
  const activeLinkStyle: string =
    "border-l-[5px] border-[#46A358] pl-[5px] text-[#46A358]";
  return (
    <Modal
      open={true}
      footer={false}
      title="Site map"
      className="flex gap-4 flex-col mt-5"
    >
      <div className="flex gap-4 flex-col mt-5">
        <h3
          className={`${customLinkStyle} ${hoverLinkStyle} ${activeLinkStyle}`}
        >
          Home
        </h3>
        <h3 className={`${customLinkStyle} ${hoverLinkStyle}`}>Blog</h3>
      </div>
      <button className="w-[80%] m-auto flex justify-center text-white gap-3 items-center bg-[#46A358] h-[49px] font-medium text-[16px] mt-[41px]">
        <LoginOutlined /> Login
      </button>
    </Modal>
  );
};

export default SiteMap;
