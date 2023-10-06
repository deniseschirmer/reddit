import Info from "@/components/Info";
import Main from "@/components/Main";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function Home() {
  return (
    <section className="flex flex-row relative h-full w-full md:px-6 ">
      {/* Sidebar */}
      <div className="w-1/5 h-full hidden md:flex">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="md:w-3/5 w-full">
        <Main />
      </div>

      {/* Info */}
      <div className="w-1/5 hidden md:flex">
        <Info />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 rounded-full bg-gradient-radial from-white to-transparent blur-2xl h-72 w-96"></div>
      <div className="absolute -z-20 top-0 right-1/3 bg-gradient-conic from-sky-200 via-blue-200 blur-2xl h-72 w-80"></div>
    </section>
  );
}
