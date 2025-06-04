// Header.jsx (componente completo responsivo)
import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetProfileQuery, useLogoutMutation } from "../store/api";
import { setAuthState, clearAuthState } from "../store/authSlice";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";
import ForgotPasswordModal from "./ForgotPasswordModal";
import ProfileModal from "./ProfileModal";
import { MdKeyboardArrowDown } from "react-icons/md";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import logoverde from "../assets/verde1.svg";
import defaultAvatar from "../assets/icon_profile.svg";
import Button from "./Button";

export default function Header() {
  const dispatch = useDispatch();
  const { data: userData, refetch } = useGetProfileQuery();
  const [logoutUser] = useLogoutMutation();
  const user = useSelector((state) => state.auth.user);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [modalType, setModalType] = useState(null);
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProjectOpen, setIsProjectOpen] = useState(false);
  const [isBarrigaOpen, setIsBarrigaOpen] = useState(false);
  const [isVidaOpen, setIsVidaOpen] = useState(false);
  const [isComunidadeOpen, setIsComunidadeOpen] = useState(false);
  const projectRef = useRef(null);
  const barrigaRef = useRef(null);
  const vidaRef = useRef(null); 
  const comunidadeRef = useRef(null);


  useEffect(() => {
    if (userData) {
      dispatch(setAuthState({ user: userData, isAuthenticated: true }));
    }
  }, [userData, dispatch]);

  const handleLogout = async () => {
    try {
      await logoutUser().unwrap();
      dispatch(clearAuthState());
      refetch();
      setProfileModalOpen(false);
    } catch (error) {
      console.error("Erro ao fazer logout", error);
    }
  };

  useEffect(() => {
    function handleClickOutside(event) {
      const clickedOutsideAll =
        !projectRef.current?.contains(event.target) &&
        !barrigaRef.current?.contains(event.target) &&
        !vidaRef?.current?.contains(event.target) &&
        !comunidadeRef?.current?.contains(event.target);

      if (clickedOutsideAll) {
        setIsProjectOpen(false);
        setIsBarrigaOpen(false);
        setIsVidaOpen(false);
        setIsComunidadeOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);



  return (
    <header className="fixed top-0 left-0 w-full bg-[#FCFCFC]  z-50">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 pt-3 lg:px-8">
        <div className="flex flex-col w-full">

          
          {/* Top Row: Mobile layout */}
          <div className="flex items-center justify-between w-full lg:hidden">
            <button
              className="text-gray-700 text-3xl"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
            </button>

            <div className="flex-1 flex justify-center">
            <img
              src={logoverde}
              alt="Logo"
              className="w-40 sm:w-44"
            />
            </div>

            <div className="flex items-center gap-2">
            {isAuthenticated ? (
              <>
              {user?.favorites?.length > 0 ? (
                <AiFillHeart className="text-red-800 text-2xl sm:text-3xl cursor-pointer" />
              ) : (
                <AiOutlineHeart className="text-red-800 text-2xl sm:text-3xl cursor-pointer" />
              )}
              <button onClick={() => setProfileModalOpen(true)}>
                <img
                  src={defaultAvatar}
                  alt="Perfil"
                  className="h-8 w-8 rounded-full object-cover border-2 border-white cursor-pointer sm:h-10 sm:w-10"
                />
              </button>
              </>
              ) : (
                <Button className="w-20 text-sm" onClick={() => setModalType("login")}>Entrar</Button>
              )}
            </div>
          </div>

          {/* Barra de pesquisa em baixo apenas em mobile */}
          <div className="relative w-full mt-6 lg:hidden">
            <input
              type="text"
              placeholder="Buscar..."
              className="w-full border border-gray-300 rounded-full px-4 py-1 pr-10 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
            />
            <BsSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>

          {/* Linha Desktop (Logo + Busca + Login/Profile) */}
          <div className="hidden lg:grid grid-cols-12 items-center mt-4">
            <div className="col-span-3">
              <img
                src={logoverde}
                alt="Logo"
                className="w-32 sm:w-40 md:w-48"
              />
            </div>

            <div className="relative col-span-6 px-4">
              <input
                type="text"
                placeholder="Buscar..."
                className="w-full border border-gray-300 rounded-full px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
              />
              <BsSearch className="absolute right-8 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>

            <div className="col-span-3 flex justify-end items-center gap-4">
              {isAuthenticated ? (
                <>
                  {user?.favorites?.length > 0 ? (
                    <AiFillHeart className="text-red-800 text-3xl cursor-pointer" />
                  ) : (
                    <AiOutlineHeart className="text-red-800 text-3xl cursor-pointer" />
                  )}
                  <button
                    className="flex items-center gap-2 px-3 py-2 rounded-full transition cursor-pointer"
                    onClick={() => setProfileModalOpen(true)}
                  >
                    <img
                      src={defaultAvatar}
                      alt="Perfil"
                      className="h-10 w-10 rounded-full object-cover border-2 border-white cursor-pointer"
                    />
                  </button>
                </>
              ) : (
                <Button className="w-30" onClick={() => setModalType("login")}>Entrar</Button>
              )}
            </div>
          </div>

          {/* Menu Navegação */}
          <nav className="w-full mt-4 sm:mt-10 mb-3">
            {/* Desktop */}
            <div className="hidden lg:flex  gap-4 text-gray-700 text-sm sm:text-base ">

              <div className="relative" ref={projectRef}>
                <button
                  className="flex items-center gap-1 hover:text-gray-500 font-semibold cursor-pointer border-b-3 pb-2 px-4 border-emerald-500"
                  onClick={() => setIsProjectOpen(!isProjectOpen)}
                >
                  O Projeto <MdKeyboardArrowDown size={20} />
                </button>

                {isProjectOpen && (
                  <div className="absolute left-0 mt-2 w-52 bg-white shadow-lg rounded-md z-50">
                    <ul className="flex flex-col text-md text-gray-700">
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">{'> Sobre'}</li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">{'> Equipa'}</li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">{'> Fontes'}</li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">{'> Contatos'}</li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">{'> Conheça a App'}</li>
                    </ul>
                  </div>
                )}
              </div>


              <div className="relative" ref={barrigaRef}>
                <button
                  className="flex items-center gap-1 hover:text-gray-500 font-semibold cursor-pointer border-b-3 pb-2 px-4 border-emerald-500"
                  onClick={() => setIsBarrigaOpen(!isBarrigaOpen)}
                >
                  Cres(Ser) contigo na Barriga <MdKeyboardArrowDown size={20} />
                </button>

                {isBarrigaOpen && (
                  <div className="absolute left-0 mt-2 w-52 bg-white shadow-lg rounded-md z-50">
                    <ul className="flex flex-col text-md text-gray-700">
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">{'> 1º Trimestre'}</li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">{'> 2º Trimestre'}</li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">{'> 3º Trimestre'}</li>
                      
                    </ul>
                  </div>
                )}
              </div>

              <div className="relative" ref={vidaRef}>
                <button
                  className="flex items-center gap-1 hover:text-gray-500 font-semibold cursor-pointer border-b-3 pb-2 px-4 border-emerald-500"
                  onClick={() => setIsVidaOpen(!isVidaOpen)}
                >
                  Cres(Ser) contigo na Vida <MdKeyboardArrowDown size={20} />
                </button>
                {isVidaOpen && (
                  <div className="absolute left-0 mt-2 w-52 bg-white shadow-lg rounded-md z-50">
                    <ul className="flex flex-col text-md text-gray-700">
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">{'> Mês a Mês'}</li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">{'> 1º Ano'}</li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">{'> 2º Ano'}</li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">{'> 3º Ano'}</li>
                    </ul>
                  </div>
                )}
              </div>

              <div className="relative" ref={comunidadeRef}>
              <button
                className="flex items-center gap-1 hover:text-gray-500 font-semibold cursor-pointer border-b-3 pb-2 px-4 border-emerald-500"
                onClick={() => setIsComunidadeOpen(!isComunidadeOpen)}
              >
                Cres(Ser) em Comunidade <MdKeyboardArrowDown size={20} />
              </button>
              {isComunidadeOpen && (
                <div className="absolute left-0 mt-2 w-52 bg-white shadow-lg rounded-md z-50">
                  <ul className="flex flex-col text-md text-gray-700">
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">{'> Eventos na cidade'}</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">{'> Grupos de apoio'}</li>
                    
                  </ul>
                </div>
              )}
              </div>
              
              </div>
          </nav>

            {/* Mobile */}
            {isMenuOpen && (
            <nav className="w-full mb-3">
              <div className="flex flex-col gap-4 text-gray-700 text-sm -mt-4 lg:hidden">
                <button className="flex text-left px-4 hover:text-gray-500 font-semibold">O Projeto <MdKeyboardArrowDown size={20} /></button>
                <button className="flex text-left px-4 hover:text-gray-500 font-semibold">Cres(Ser) contigo na Barriga <MdKeyboardArrowDown size={20} /></button>
                <button className="flex text-left px-4 hover:text-gray-500 font-semibold">Cres(Ser) contigo na Vida <MdKeyboardArrowDown size={20} /></button>
                <button className="flex text-left px-4 hover:text-gray-500 font-semibold">Cres(Ser) em Comunidade <MdKeyboardArrowDown size={20} /></button>
              </div>
              </nav>
            )}
          
        </div>
      </div>

      {/* Modais */}
      {profileModalOpen && <ProfileModal setIsOpen={setProfileModalOpen} handleLogout={handleLogout} />}
      {modalType === "login" && <LoginModal setIsOpen={() => setModalType(null)} setModalType={setModalType} />}
      {modalType === "register" && <RegisterModal setIsOpen={() => setModalType(null)} setModalType={setModalType} />}
      {modalType === "forgot-password" && <ForgotPasswordModal setIsOpen={() => setModalType(null)} setModalType={setModalType} />}
    </header>
  );
}
