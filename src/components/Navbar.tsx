import Link from "next/link";
import { Icons } from "./Icons";
import SearchBar from "./SearchBar";
import { BsQrCodeScan } from "react-icons/bs";
import { BsThreeDots } from "react-icons/bs";

const Navbar = () => {
  return (
    <header className="fixed top-0 inset-x-0 bg-zinc-100 border-b border-zinc-300 z-10 py-2">
      <nav className="container mx-auto flex flex-wrap items-center justify-between gap-x-2">
        {/* Logo e ícone do Reddit */}
        <Link href="/" className="flex items-center">
          <div className="mr-2">
            <Icons.logo className="mr-2 h-8 w-8 sm:h-6 sm:w-6 text-orange-500" />
          </div>
          <Icons.Reddit className="h-8 w-8 sm:h-6 sm:w-6 text-orange-500" />
        </Link>

        {/* Barra de pesquisa */}
        <div className="w-full mt-2 sm:mt-0 sm:w-auto">
          <SearchBar />
        </div>

        {/* Botão "Baixar app" */}
        <div className="flex items-center justify-between ">
          <button className="flex items-center justify-between px-2 h-10 w-full sm:w-32 rounded-2xl bg-gray-300 mt-2 sm:mt-0">
            <BsQrCodeScan />
            <p className="hidden sm:block">Baixar app</p>
          </button>

          {/* Ações (por exemplo, "Entrar") */}
          <Link
            href="/sign-in"
            className="text-white flex cursor-pointer h-10 w-full sm:w-24 items-center justify-center rounded-2xl bg-orange-600 hover:text-orange-900 mt-2 sm:mt-0 ml-2 mr-2"
          >
            Entrar
          </Link>
          <BsThreeDots />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
