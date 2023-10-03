import Link from "next/link";
import { Icons } from "./Icons";
import SearchBar from "./SearchBar";
import { BsQrCodeScan } from "react-icons/bs";

const Navbar = async () => {
  return (
    <header className="fixed top-0 inset-x-0 bg-zinc-100 border-b border-zinc-300 z-10 py-2">
      <nav className="container mx-auto flex items-center justify-between gap-2">
        {/* Logo e ícone do Reddit */}
        <Link href="/" className="flex items-center">
          <div className="mr-2">
            <Icons.logo className=" mr-2 h-8 w-8 sm:h-6 sm:w-6 text-orange-500 " />
          </div>
          <Icons.Reddit className="h-8 w-8 sm:h-6 sm:w-6 text-orange-500" />
        </Link>

        {/* Barra de pesquisa */}
        <SearchBar />
        <button className="flex items-center justify-between px-2 h-10 w-32 rounded-2xl bg-gray-300">
          <BsQrCodeScan />
          <p>Baixar app</p>
        </button>

        {/* Ações (por exemplo, "Sign In") */}
        <Link
          href="/sign-in"
          className="text-white flex cursor-pointer h-10 w-24 items-center justify-center rounded-2xl bg-orange-600 hover:text-orange-900"
        >
          Entrar
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
