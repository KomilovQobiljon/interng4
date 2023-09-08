import type { FC } from "react";
import {
  LoginOutlined,
  SearchOutlined,
  BellOutlined,
  ShoppingCartOutlined
} from "@ant-design/icons";

const Navbar: FC = () => {
  const ICON_STYLE: string = "cursor-pointer text-[20px]";
  return (
    <div className="p-8 flex align-center border-b border-[#46A358]">
      <div className="flex-1 justify-start">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Flogo.svg?alt=media&token=fc9659d6-f435-43b9-a624-8b0d3a574baa"
          alt="logo"
        />
      </div>
      <div className="flex-1 justify-center flex gap-4">
        <h3 className="cursor-pointer">Home</h3>
        <h3 className="cursor-pointer">Blog</h3>
      </div>
      <div className="flex-1 justify-end flex items-center gap-8 max-sm:hidden">
        <SearchOutlined className={ICON_STYLE} />
        <BellOutlined className={ICON_STYLE} />
        <ShoppingCartOutlined className={ICON_STYLE} />
        <button className="bg-[#46A358] flex rounded-md w-24 items-center justify-center gap-1 h-9 text-base text-white cursor-pointer">
          <LoginOutlined />
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
