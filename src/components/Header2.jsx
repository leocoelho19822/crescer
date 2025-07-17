// eslint-disable-next-line
import React, { useEffect, useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import parentalidadeBg1 from "../assets/parentalidade_blog.jpg";
import parentalidadeBg2 from "../assets/parque16072025.png";
import brincar from "../assets/brincar16072025.png"
import logoverde from "../assets/Logo_Branco.svg";

import { CgProfile } from "react-icons/cg";
import { BsSearch } from "react-icons/bs";
// eslint-disable-next-line
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import Button from "./Button";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";
import ForgotPasswordModal from "./ForgotPasswordModal";
import ProfileModal from "./ProfileModal";
import { useDispatch, useSelector } from "react-redux";
import { useGetProfileQuery, useLogoutMutation } from "../store/api";
import { setAuthState, clearAuthState } from "../store/authSlice";

const slides = [
  {
    image: parentalidadeBg1,
    title: "Apoio para crescer em família",
    subtitle: "Explore recursos para cada etapa da parentalidade"
  },
  {
    image: parentalidadeBg2,
    title: "Juntos desde o início",
    subtitle: "Informação de confiança desde a gravidez até aos 3 anos"
  },
  {
    image: brincar,
    title: "Famílias que brincam juntas, crescem juntas",
    subtitle: "Porque o brincar é mais do que diversão — é conexão, aprendizagem e amor"
  }
];

export default function HeaderHero() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fade, setFade] = useState(true);
  const dispatch = useDispatch();
  const { data: userData, refetch } = useGetProfileQuery();
  const [logoutUser] = useLogoutMutation();
  const user = useSelector((state) => state.auth.user);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [modalType, setModalType] = useState(null);
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const [isProjectOpen, setIsProjectOpen] = useState(false);
const [isBarrigaOpen, setIsBarrigaOpen] = useState(false);
const [isVidaOpen, setIsVidaOpen] = useState(false);

const navigate = useNavigate();

const location = useLocation();
//const isArtigoPage = location.pathname.startsWith("/artigos/");
const isHomePage = location.pathname === "/";



  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setFade(true);
      }, 800);
    }, 9000);
    return () => clearInterval(interval);
  }, []);

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

  const { image, title, subtitle } = slides[currentSlide];

  return (
    <>
      {/* NAVBAR FIXA */}
      <nav
  className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
    isHomePage ? (scrolled ? "bg-[#78B19A]/90" : "bg-transparent") : "bg-[#78B19A]"
  } text-white`}
>

        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <HiOutlineX size={24} /> : <HiOutlineMenu size={24} />}</button>
          <a href="/">
  <img src={logoverde} alt="Cres(Ser)" className={`transition-all duration-300 ${scrolled ? "h-10" : "h-14"}`} />
</a>
        <div className="flex gap-4 items-center">
          {isAuthenticated ? (
              <>
                {user?.favorites?.length > 0 ? (
                  <AiFillHeart className="text-white text-2xl cursor-pointer" />
                ) : (
                  <AiFillHeart className="text-white text-2xl cursor-pointer" />
                )}
                <button onClick={() => setProfileModalOpen(true)}>
                  <CgProfile size={25} className="cursor-pointer" />
                </button>
              </>
            ) : (
              <Button onClick={() => setModalType("login")}>Entrar</Button>
            )}
        </div>
        </div>

        {/* Menu mobile */}
        {menuOpen && (
          
  <div className="lg:hidden px-6 pb-4 space-y-4 bg-[#78B19A]/90">
    <input
      type="text"
      placeholder="Pesquisar..."
      className="w-full border border-gray-300 rounded-full px-4 py-2 pr-10 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
    />

    <ul className="space-y-4 text-sm font-medium text-white">
      {/* Projeto */}
      <li>
        <button onClick={() => setIsProjectOpen(!isProjectOpen)} className="w-full text-left hover:text-emerald-200 flex">
          Projeto<MdKeyboardArrowDown size={20} />
        </button>
        {isProjectOpen && (
          <ul className="ml-4 mt-2 space-y-2 text-white/90 text-xs normal-case">
            <li><a href="#sobre" className="block hover:text-emerald-200">{'Sobre'}</a></li>
            <li><a href="#equipa" className="block hover:text-emerald-200">{'Equipa'}</a></li>
            <li><a href="#contatos" className="block hover:text-emerald-200">{'Contatos'}</a></li>
          </ul>
        )}
      </li>

      {/* Na Barriga */}
      <li>
        <button onClick={() => setIsBarrigaOpen(!isBarrigaOpen)} className="w-full text-left hover:text-emerald-200 flex">
          Na Barriga<MdKeyboardArrowDown size={20} />
        </button>
        {isBarrigaOpen && (
          <ul className="ml-4 mt-2 space-y-2 text-white/90 text-xs normal-case">
            <li onClick={() => {navigate("/1tri"); setMenuOpen(false);}} className="block hover:text-emerald-200 cursor-pointer">{'1º Trimestre'}</li>
            <li onClick={() => {navigate("/2tri"); setMenuOpen(false);}} className="block hover:text-emerald-200 cursor-pointer">{'2º Trimestre'}</li>
            <li onClick={() => {navigate("/3tri"); setMenuOpen(false);}} className="block hover:text-emerald-200 cursor-pointer">{'3º Trimestre'}</li>
          </ul>
        )}
      </li>

      {/* Na Vida */}
      <li>
        <button onClick={() => setIsVidaOpen(!isVidaOpen)} className="w-full text-left hover:text-emerald-200 flex">
          Na Vida<MdKeyboardArrowDown size={20} />
        </button>
        {isVidaOpen && (
          <ul className="ml-4 mt-2 space-y-2 text-white/90 text-xs normal-case">
            <li><a href="#mesames" className="block hover:text-emerald-200">{'Mês a Mês'}</a></li>
            <li><a href="#ano1" className="block hover:text-emerald-200">{'1º Ano'}</a></li>
            <li><a href="#ano2" className="block hover:text-emerald-200">{'2º Ano'}</a></li>
            <li><a href="#ano3" className="block hover:text-emerald-200">{'3º Ano'}</a></li>
          </ul>
        )}
      </li>

      {/* Comunidade e Favoritos sem submenu */}
      <li><a href="#comunidade" className="block hover:text-emerald-200 ">Comunidade</a></li>
      
    </ul>
  </div>
)}

        

        <div className="max-w-7xl mx-auto px-6 py-4 hidden lg:flex justify-between items-center">
          <a href="/">
            <img src={logoverde} alt="Cres(Ser)" className={`transition-all duration-300 ${scrolled ? "h-10" : "h-14"}`} />
          </a>


          <ul className="flex space-x-6 items-center text-sm font-medium ">
            <li className="relative group">
              <button className="flex items-center gap-1 hover:text-emerald-200 uppercase">Projeto<MdKeyboardArrowDown size={20} /></button>
              <ul className="absolute left-0 top-full mt-2 bg-white text-black text-sm rounded-md shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 min-w-[160px] z-50">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Sobre</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Equipa</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Contatos</li>
              </ul>
            </li>
            <li className="relative group">
              <button className="flex items-center gap-1 hover:text-emerald-200 uppercase">Na Barriga<MdKeyboardArrowDown size={20} /></button>
              <ul className="absolute left-0 top-full mt-2 bg-white text-black text-sm rounded-md shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 min-w-[160px] z-50">
                <a href="/1tri"><li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">1º Trimestre</li></a>
                <a href="/2tri"><li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">2º Trimestre</li></a>
                <a href="/3tri"><li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">3º Trimestre</li></a>
              </ul>
            </li>
            <li className="relative group">
              <button className="flex items-center gap-1 hover:text-emerald-200 uppercase">Na Vida<MdKeyboardArrowDown size={20} /></button>
              <ul className="absolute left-0 top-full mt-2 bg-white text-black text-sm rounded-md shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 min-w-[160px] z-50">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Mês a mês</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">1 ano</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">2 anos</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">3 anos</li>
              </ul>
            </li>
            <li><a href="#comunidade" className="hover:text-emerald-200 uppercase">Comunidade</a></li>
          </ul>
          <div className="flex gap-4 items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="Pesquisar..."
                className="border border-gray-300 rounded-full px-4 py-2 pr-10 text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <BsSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-100" />
            </div>
            {isAuthenticated ? (
              <>
                {user?.favorites?.length > 0 ? (
                  <AiFillHeart className="text-white text-2xl cursor-pointer" />
                ) : (
                  <AiFillHeart className="text-white text-2xl cursor-pointer" />
                )}
                <button onClick={() => setProfileModalOpen(true)}>
                  <CgProfile size={25} className="cursor-pointer" />
                </button>
              </>
            ) : (
              <Button onClick={() => setModalType("login")}>Entrar</Button>
            )}
          </div>
        </div>
      </nav>

      {/* HEADER */}
      {isHomePage && (
      <header id="page-top" className="relative h-screen w-full bg-black text-white overflow-hidden">
        <img
          src={image}
          alt="Slide"
          className={`absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-1000 ${fade ? "opacity-100" : "opacity-0"}`}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30 z-10" />
        <div className="relative z-20 h-full flex flex-col justify-center items-center px-4 text-center transition-opacity duration-700 ease-in-out">
          <h1 className={`text-4xl md:text-6xl font-bold text-[#8FD3B8] uppercase max-w-4xl leading-tight transition-opacity duration-700 ${fade ? "opacity-100" : "opacity-0"}`}>
            {title}
          </h1>
          <p className={`mt-4 text-lg md:text-xl max-w-xl text-white/90 transition-opacity duration-700 ${fade ? "opacity-100" : "opacity-0"}`}>
            {subtitle}
          </p>
        </div>
      </header>
      )}

      {profileModalOpen && <ProfileModal setIsOpen={setProfileModalOpen} handleLogout={handleLogout} />}
      {modalType === "login" && <LoginModal setIsOpen={() => setModalType(null)} setModalType={setModalType} />}
      {modalType === "register" && <RegisterModal setIsOpen={() => setModalType(null)} setModalType={setModalType} />}
      {modalType === "forgot-password" && <ForgotPasswordModal setIsOpen={() => setModalType(null)} setModalType={setModalType} />}
    </>
  );
}