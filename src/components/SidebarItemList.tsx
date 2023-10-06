import { VscChevronUp } from "react-icons/vsc";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import React, { ReactNode } from "react";

type SidebarTitleProps = {
  title: string;
  children: ReactNode;
};
const SidebarItemList = (props: SidebarTitleProps) => {
  return (
    <div>
      <div className="flex justify-between items-center">
        {props.title}
        <VscChevronUp />
      </div>
      <ul>{props.children}</ul>
    </div>
  );
};

export default SidebarItemList;
