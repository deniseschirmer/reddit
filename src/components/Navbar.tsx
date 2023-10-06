"use client";
import Link from "next/link";
import { useState } from "react";
import { Icons } from "./Icons";
import SearchBar from "./SearchBar";
import { BsQrCodeScan } from "react-icons/bs";
import { BsThreeDots } from "react-icons/bs";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 inset-x-0 border-b bg-white z-10 p-3 sm:p-3 w-full  py-2 sm:px-10">
      <nav className="w-full  flex items-center justify-between sm:flex-wrap gap-x-2">
        {/* Menu de Hambúrguer (visível em telas pequenas) */}
        <div className="sm:hidden p-1">
          <button
            onClick={toggleMenu}
            className="text-gray-600 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              )}
            </svg>
          </button>
        </div>

        {/* Logo e ícone do Reddit (oculto em telas menores) */}
        <Link href="/" className="flex items-center">
          <div className="mr-2">
            <Icons.logo className="mr-2 h-8 w-8 sm:h-6 sm:w-6 p-4 text-orange-500" />
          </div>
          <div className={`hidden sm:block ${isMenuOpen ? "hidden" : ""}`}>
            <Icons.Reddit className="h-8 w-8 sm:h-6 sm:w-6 text-orange-500" />
          </div>
        </Link>

        {/* Barra de pesquisa (visível em telas pequenas) */}
        <div className={`w-full mt-2 sm:w-auto sm:mt-0`}>
          <div className={`sm:flex sm:items-center`}>
            <SearchBar />
          </div>
        </div>

        {/* Ações (por exemplo, "Entrar") */}
        <div
          className={`hidden sm:flex items-center justify-between ${
            isMenuOpen ? "hidden" : ""
          }`}
        >
          {/* Botão "Baixar app" */}
          <button className="flex items-center justify-between px-2  h-10 w-32 rounded-2xl bg-gray-300">
            <BsQrCodeScan />
            <p className="hidden sm:block">Baixar app</p>
          </button>

          <Link
            href="/sign-in"
            className="text-white flex cursor-pointer h-10 w-24 items-center justify-center rounded-2xl bg-orange-600 hover:text-orange-900 ml-2 mr-2"
          >
            Entrar
          </Link>

          {/* Ícone de três pontos (visível em telas maiores) */}
          <BsThreeDots />
        </div>
      </nav>

      {/* Menu de Hambúrguer (visível em telas pequenas) */}
      {isMenuOpen && (
        <div className="sm:hidden mt-2 bg-white absolute left-0 w-64 ">
          {/* Coloque aqui os links ou opções do menu de hambúrguer */}
          <Sidebar />
          {/* ... */}
        </div>
      )}
    </header>
  );
};

export default Navbar;
