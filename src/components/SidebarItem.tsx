import { IconType } from "react-icons";
import { PiHouseThin } from "react-icons/pi";
import { VscChevronDown } from "react-icons/vsc";
type SidebarItemProps = {
  text: string;
  Icon: IconType;
  hasArrow?: boolean;
};

const SidebarItem = (props: SidebarItemProps) => {
  return (
    <li className="flex py-2 items-center  ">
      <props.Icon className="w-6 h-6" />
      <span className="ml-2 text-lg">{props.text}</span>
      {props.hasArrow && <VscChevronDown className="ml-auto" />}
    </li>
  );
};

export default SidebarItem;
