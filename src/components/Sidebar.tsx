import { PiHouseThin } from "react-icons/pi";
import { VscChevronUp } from "react-icons/vsc";
import { BiJoystick } from "react-icons/bi";
import { MdOutlineSportsBaseball } from "react-icons/md";
import { PiTelevision } from "react-icons/pi";
import { IoAnalyticsOutline } from "react-icons/io5";
import { CiStar } from "react-icons/ci";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { ImCoinEuro } from "react-icons/im";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import SidebarItem from "./SidebarItem";
import SidebarItemList from "./SidebarItemList";
import Divider from "./Divider";

const Sidebar = () => {
  return (
    <div className="flex flex-col gap-6 w-full  h-full px-6 ">
      <ul>
        <SidebarItem text="Página inicial" Icon={PiHouseThin} hasArrow />
        <SidebarItem text="Popular" Icon={BsArrowUpRightCircle} hasArrow />
      </ul>
      <Divider />
      <SidebarItemList title="Recentes">
        <SidebarItem text="r/pokemon" Icon={PiHouseThin} />
        <SidebarItem text="r/pokemongo" Icon={PiHouseThin} />
        <SidebarItem text="r/reddit/dev" Icon={PiHouseThin} />
      </SidebarItemList>
      <Divider />
      <SidebarItemList title="Assuntos">
        <SidebarItem text="Jogos" Icon={BiJoystick} hasArrow />
        <SidebarItem text="Esportes" Icon={MdOutlineSportsBaseball} hasArrow />
        <SidebarItem text="Negócios" Icon={IoAnalyticsOutline} hasArrow />
        <SidebarItem text="Cripto" Icon={ImCoinEuro} hasArrow />
        <SidebarItem text="Televisão" Icon={PiTelevision} hasArrow />
        <SidebarItem text="Celebridades" Icon={CiStar} hasArrow />
      </SidebarItemList>
    </div>
  );
};

export default Sidebar;
