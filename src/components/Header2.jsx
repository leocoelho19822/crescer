// eslint-disable-next-line
import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import parentalidadeBg1 from "../assets/campo17072025.png";
import parentalidadeBg2 from "../assets/parque16072025.jpg";
import brincar from "../assets/brincar_juntos.jpg"
import logoverde from "../assets/Logo_Branco.svg";

import { CgProfile } from "react-icons/cg";
import { BsSearch } from "react-icons/bs";
// eslint-disable-next-line
import { AiFillHeart, AiOutlineHeart, AiFillHome } from "react-icons/ai";
import { MdKeyboardArrowDown, MdKeyboardArrowRight  } from "react-icons/md";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import Button from "./Button";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";
import ForgotPasswordModal from "./ForgotPasswordModal";
import ProfileModal from "./ProfileModal";
import { useDispatch, useSelector } from "react-redux";
import { useGetProfileQuery, useLogoutMutation } from "../store/api";
import { setAuthState, clearAuthState } from "../store/authSlice";
//import { IoIosArrowBack } from "react-icons/io";

const slides = [
  
  {
    image: parentalidadeBg2,
    title: "Apoio confiável para a parentalidade",
    subtitle: "Informação validada por profissionais desde a gravidez até aos 3 anos"
  },
  {
    image: brincar,
    title: "Famílias que brincam juntas, crescem juntas",
    subtitle: "Atividades simples e baseadas em evidência para fortalecer o desenvolvimento e o vínculo"
  },
  {
    image: parentalidadeBg1,
    title: "Apoio para crescer em família",
    subtitle: "Explore recursos para cada etapa da parentalidade"
  }
];

export default function HeaderHero() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // usado como "mobileOpen"
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fade, setFade] = useState(true);
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const { data: userData, refetch } = useGetProfileQuery();
  

  const [logoutUser] = useLogoutMutation();
  const user = useSelector((state) => state.auth.user);
  
  const [modalType, setModalType] = useState(null);
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const [isProjectOpen, setIsProjectOpen] = useState(false);
  const [isBarrigaOpen, setIsBarrigaOpen] = useState(false);
  const [isColoOpen, setIsColoOpen] = useState(false);
  const [isVidaOpen, setIsVidaOpen] = useState(false);
  const [isComunidadeOpen, setIsComunidadeOpen] = useState(false);



  const navigate = useNavigate();

  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/pesquisa?q=${encodeURIComponent(searchTerm)}`);
      setMenuOpen(false); 
      setSearchTerm("");
    }
  };

  

  /*
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
  }, []);
*/

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
  

  // Fecha com ESC
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  
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
  
/*
  const handleLogout = () => {
  setIsAuthenticated(false);
  setUser(null);
  localStorage.removeItem("user");
  localStorage.removeItem("favoritos");
  localStorage.removeItem("inscricoes");
  setProfileModalOpen(false);
};
*/


  const { image, title, subtitle } = slides[currentSlide];

  return (
    <>
      {/* NAVBAR FIXA */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
          isHomePage ? (scrolled ? "bg-verde-100/90" : "bg-transparent") : "bg-verde-100/90"
        } text-white`}
      >
        {/* Barra superior (mobile) */}
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center lg:hidden">
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Abrir menu"
            className="p-2 cursor-pointer"
          >
            <HiOutlineMenu size={24} />
          </button>

          <a href="/">
            <img src={logoverde} alt="Cres(SER)" className={`transition-all duration-300 ${scrolled ? "h-10" : "h-10"}`} />
          </a>

          <div className="flex gap-4 items-center">
            {isAuthenticated ? (
              <>
                <Link to="/favoritos" onClick={() => setMenuOpen(false)} aria-label="Ver favoritos">
                  
                    <AiFillHeart className="text-white text-2xl cursor-pointer" />
                  
                </Link>

                <button onClick={() => setProfileModalOpen(true)}>
                  {user?.imagem ? (
                    <img
                      src={user.imagem}
                      alt="Foto de perfil"
                      className="w-9 h-9 rounded-full border-2 border-white object-cover cursor-pointer"
                    />
                  ) : (
                    <CgProfile size={25} className="cursor-pointer" />
                  )}
                </button>
              </>
            ) : (
              <Button onClick={() => setModalType("login")} className="border border-gray-300 text-xs">Iniciar Sessão</Button>
            )}
          </div>
        </div>

        {/* -------- MENU MOBILE: overlay + painel deslizante -------- */}
        {/* Overlay escuro */}
        <div
          className={`lg:hidden fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${
            menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
          onClick={() => setMenuOpen(false)}
          aria-hidden={!menuOpen}
        />

        {/* Painel deslizante (de cima) */}
        <aside
          className={`lg:hidden fixed inset-y-0 left-0 right-0 z-50 bg-[#78B19A] text-white transition-transform duration-300 ${
            menuOpen ? "translate-y-0" : "-translate-y-full"
          } rounded-b-2xl shadow-2xl`}
          role="dialog"
          aria-modal="true"
        >
          <div className="mx-auto max-w-7xl px-6 pt-6 pb-10">
            {/* Topo do painel */}
            <div className="flex items-center justify-between">
              <a href="/" className="flex items-center gap-3">
                <img src={logoverde} alt="Cres(SER)" className="h-10 w-auto" />
              </a>
              <button
                aria-label="Fechar menu"
                className="inline-flex items-center justify-center rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                onClick={() => setMenuOpen(false)}
              >
                <HiOutlineX size={24} />
              </button>
            </div>

            {/* Pesquisa */}
            <div className="mt-6">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  aria-label="pesquisar artigo"
                  placeholder="Pesquisar..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 pr-10 text-sm text-white"
                />
                <button
                  type="submit"
                  aria-label="button pesquisar"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white cursor-pointer"
                >
                  <BsSearch size={18} />
                </button>
              </form>

            </div>


            {/* Lista de links / submenus */}
            <nav className="mt-8 text-base">
              <ul className="space-y-4 font-medium text-white">
                <li>
                  <a 
                    href="/" 
                    className="flex items-center gap-2 hover:text-emerald-200 cursor-pointer"
                    onClick={() => setMenuOpen(false)}
                    aria-label="Voltar para início"
                  >
                    Início
                  </a>
                </li>

                

                {/* Na Barriga */}
                <li>
                  <button
                    onClick={() => setIsBarrigaOpen((v) => !v)}
                    className="w-full text-left hover:text-emerald-200 flex items-center justify-between"
                    aria-expanded={isBarrigaOpen}
                  >
                    <span>Na barriga</span>
                    <MdKeyboardArrowDown
                      size={22}
                      className={`transition-transform ${isBarrigaOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {isBarrigaOpen && (
                    <ul className="ml-2 mt-2 space-y-2 text-white/90 text-sm normal-case">
                      <li
                        onClick={() => { navigate("/page/1tri"); setMenuOpen(false); }}
                        className="block hover:text-emerald-200 cursor-pointer"
                      >
                        1.º trimestre
                      </li>
                      <li
                        onClick={() => { navigate("/page/2tri"); setMenuOpen(false); }}
                        className="block hover:text-emerald-200 cursor-pointer"
                      >
                        2.º trimestre
                      </li>
                      <li
                        onClick={() => { navigate("/page/3tri"); setMenuOpen(false); }}
                        className="block hover:text-emerald-200 cursor-pointer"
                      >
                        3.º trimestre
                      </li>
                    </ul>
                  )}
                </li>

                {/* No Colo */}
                <li>
                  <button
                    onClick={() => setIsColoOpen((v) => !v)}
                    className="w-full text-left hover:text-emerald-200 flex items-center justify-between"
                    aria-expanded={isColoOpen}
                  >
                    <span>No colo</span>
                    <MdKeyboardArrowDown
                      size={22}
                      className={`transition-transform ${isColoOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {isColoOpen && (
                    <ul className="ml-2 mt-2 space-y-2 text-white/90 text-sm normal-case">
                      <li
                        onClick={() => { navigate("/mesames"); setMenuOpen(false); }}
                        className="block hover:text-emerald-200 cursor-pointer"
                      >
                        Mês a mês
                      </li>
                      
                    </ul>
                  )}
                </li>

                {/* Na Vida */}
                <li>
                  <button
                    onClick={() => setIsVidaOpen((v) => !v)}
                    className="w-full text-left hover:text-emerald-200 flex items-center justify-between"
                    aria-expanded={isVidaOpen}
                  >
                    <span>Na vida</span>
                    <MdKeyboardArrowDown
                      size={22}
                      className={`transition-transform ${isVidaOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {isVidaOpen && (
                    <ul className="ml-2 mt-2 space-y-2 text-white/90 text-sm normal-case">
                      
                      <li
                        onClick={() => { navigate("/page/1ano"); setMenuOpen(false); }}
                        className="block hover:text-emerald-200 cursor-pointer"
                      >
                        1 ano
                      </li>
                      <li
                        onClick={() => { navigate("/page/18mes"); setMenuOpen(false); }}
                        className="block hover:text-emerald-200 cursor-pointer"
                      >
                        18 meses
                      </li>
                      <li
                        onClick={() => { navigate("/page/2ano"); setMenuOpen(false); }}
                        className="block hover:text-emerald-200 cursor-pointer"
                      >
                        2 anos
                      </li>
                    </ul>
                  )}
                </li>

                {/* Comunidade */}
                <li>
                  <button
                    onClick={() => setIsComunidadeOpen((v) => !v)}
                    className="w-full text-left hover:text-emerald-200 flex items-center justify-between"
                    aria-expanded={isComunidadeOpen}
                  >
                    <span>Comunidade</span>
                    <MdKeyboardArrowDown
                      size={22}
                      className={`transition-transform ${isComunidadeOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {isComunidadeOpen && (
                    <ul className="ml-2 mt-2 space-y-2 text-white/90 text-sm normal-case">
                      <li
                        onClick={() => { navigate("/eventos"); setMenuOpen(false); }}
                        className="block hover:text-emerald-200 cursor-pointer"
                      >
                        Eventos
                      </li>
                      <li
                        onClick={() => { navigate("/atividades"); setMenuOpen(false); }}
                        className="block hover:text-emerald-200 cursor-pointer"
                      >
                        Atividades
                      </li>
                      <li
                        onClick={() => { navigate("/page/infouteis"); setMenuOpen(false); }}
                        className="block hover:text-emerald-200 cursor-pointer"
                      >
                        Outras Informações
                      </li>
                      
                    </ul>
                  )}
                </li>

                {/* Projeto */}
                <li>
                  <button
                    onClick={() => setIsProjectOpen((v) => !v)}
                    className="w-full text-left hover:text-emerald-200 flex items-center justify-between"
                    aria-expanded={isProjectOpen}
                  >
                    <span>Projeto</span>
                    <MdKeyboardArrowDown
                      size={22}
                      className={`transition-transform ${isProjectOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {isProjectOpen && (
                    <ul className="ml-2 mt-2 space-y-2 text-white/90 text-sm normal-case">
                      <li
                        onClick={() => { navigate("/page/sobre"); setMenuOpen(false); }}
                        className="block hover:text-emerald-200 cursor-pointer"
                      >
                        Sobre
                      </li>
                      <li
                        onClick={() => { navigate("/page/equipa"); setMenuOpen(false); }}
                        className="block hover:text-emerald-200 cursor-pointer"
                      >
                        Equipa
                      </li>
                      <li
                        onClick={() => { navigate("/page/parceiros"); setMenuOpen(false); }}
                        className="block hover:text-emerald-200 cursor-pointer"
                      >
                        Parceiros
                      </li>
                      <li
                        onClick={() => { navigate("/page/contato"); setMenuOpen(false); }}
                        className="block hover:text-emerald-200 cursor-pointer"
                      >
                        Contatos
                      </li>
                    </ul>
                  )}
                </li>

                

                

                
              </ul>
            </nav>
          </div>
        </aside>
        {/* -------- FIM MENU MOBILE -------- */}

        {/* Barra (desktop) */}
        <div className="max-w-7xl mx-auto px-4 py-4 hidden lg:flex justify-between items-center">
          <a href="/">
            <img src={logoverde} alt="Cres(SER)" className={`transition-all duration-300 ${scrolled ? "h-10" : "h-14"}`} />
          </a>

          <ul className="flex space-x-6 items-center text-sm font-medium ">
            <li>
              <a href="/" className="flex items-center gap-1 hover:text-emerald-200 uppercase" aria-label="Voltar para início">
                <AiFillHome size={20} />
              </a>
            </li>
            

            <li className="relative group">
              <button className="flex items-center gap-1 hover:text-emerald-200 uppercase">
                Na Barriga<MdKeyboardArrowDown size={20} />
              </button>
              <ul className="absolute left-0 top-full mt-2 bg-white text-black text-sm rounded-md shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 min-w-[160px] z-50">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer"><a href="/page/1tri">1.º trimestre</a></li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer"><a href="/page/2tri">2.º trimestre</a></li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer"><a href="/page/3tri">3.º trimestre</a></li>
              </ul>
            </li>

            <li className="relative group">
              <button className="flex items-center gap-1 hover:text-emerald-200 uppercase">
                No Colo<MdKeyboardArrowDown size={20} />
              </button>

              <ul className="absolute left-0 top-full mt-2 bg-white text-black text-sm rounded-md shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 min-w-[180px] z-50">

                {/* 0 a 3 meses */}
                <li className="relative group/sub">
                  <div className="flex justify-between items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <span>0 a 3 meses</span>
                    <MdKeyboardArrowRight size={18} />
                  </div>
                  <ul className="absolute left-full top-0 mt-0 bg-white text-black text-sm rounded-md shadow-lg opacity-0 group-hover/sub:opacity-100 invisible group-hover/sub:visible transition-all duration-200 min-w-[180px] z-50">
                    <li className="px-4 py-2 hover:bg-gray-100"><a href="/page/recem-nascido">Recém-nascido</a></li>
                    <li className="px-4 py-2 hover:bg-gray-100"><a href="/page/1mes">1 mês</a></li>
                    <li className="px-4 py-2 hover:bg-gray-100"><a href="/page/2mes">2 meses</a></li>
                    <li className="px-4 py-2 hover:bg-gray-100"><a href="/page/3mes">3 meses</a></li>
                  </ul>
                </li>

                {/* 4 a 7 meses */}
                <li className="relative group/sub">
                  <div className="flex justify-between items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <span>4 a 7 meses</span>
                    <MdKeyboardArrowRight size={18} />
                  </div>
                  <ul className="absolute left-full top-0 mt-0 bg-white text-black text-sm rounded-md shadow-lg opacity-0 group-hover/sub:opacity-100 invisible group-hover/sub:visible transition-all duration-200 min-w-[180px] z-50">
                    <li className="px-4 py-2 hover:bg-gray-100"><a href="/page/4mes">4 meses</a></li>
                    <li className="px-4 py-2 hover:bg-gray-100"><a href="/page/5mes">5 meses</a></li>
                    <li className="px-4 py-2 hover:bg-gray-100"><a href="/page/6mes">6 meses</a></li>
                    <li className="px-4 py-2 hover:bg-gray-100"><a href="/page/7mes">7 meses</a></li>
                  </ul>
                </li>

                {/* 8 a 11 meses */}
                <li className="relative group/sub">
                  <div className="flex justify-between items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <span>8 a 11 meses</span>
                    <MdKeyboardArrowRight size={18} />
                  </div>
                  <ul className="absolute left-full top-0 mt-0 bg-white text-black text-sm rounded-md shadow-lg opacity-0 group-hover/sub:opacity-100 invisible group-hover/sub:visible transition-all duration-200 min-w-[180px] z-50">
                    <li className="px-4 py-2 hover:bg-gray-100"><a href="/page/8mes">8 meses</a></li>
                    <li className="px-4 py-2 hover:bg-gray-100"><a href="/page/9mes">9 meses</a></li>
                    <li className="px-4 py-2 hover:bg-gray-100"><a href="/page/10mes">10 meses</a></li>
                    <li className="px-4 py-2 hover:bg-gray-100"><a href="/page/11mes">11 meses</a></li>
                  </ul>
                </li>

              </ul>
            </li>



            <li className="relative group">
              <button className="flex items-center gap-1 hover:text-emerald-200 uppercase">
                Na Vida<MdKeyboardArrowDown size={20} />
              </button>
              <ul className="absolute left-0 top-full mt-2 bg-white text-black text-sm rounded-md shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 min-w-[160px] z-50">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <a href="/page/1ano">1 ano</a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <a href="/page/18mes">18 meses</a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <a href="/page/2ano">2 anos</a>
                </li>
              </ul>
            </li>

            <li className="relative group">
              <button className="flex items-center gap-1 hover:text-emerald-200 uppercase">
                Comunidade<MdKeyboardArrowDown size={20} />
              </button>
              <ul className="absolute left-0 top-full mt-2 bg-white text-black text-sm rounded-md shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 min-w-[160px] z-50">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <a href="/eventos">Eventos</a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <a href="/atividades">Atividades</a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <a href="/page/infouteis">Outras informações</a>
                </li>
              </ul>
            </li>

            <li className="relative group">
              <button className="flex items-center gap-1 hover:text-emerald-200 uppercase">
                Projeto<MdKeyboardArrowDown size={20} />
              </button>
              <ul className="absolute left-0 top-full mt-2 bg-white text-black text-sm rounded-md shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 min-w-[160px] z-50">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer"><a href="/page/sobre">Sobre</a></li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer"><a href="/page/equipa">Equipa</a></li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer"><a href="/page/parceiros">Parceiros</a></li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer"><a href="/page/contato">Contatos</a></li>
              </ul>
            </li>

          </ul>

          <div className="flex gap-4 items-center">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Pesquisar..."
                aria-label="pesquisar artigo"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 pr-10 text-sm text-white"
              />
              <button
                type="submit"
                aria-label="button pesquisar"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white cursor-pointer"
              >
                <BsSearch size={18} />
              </button>
            </form>

            {isAuthenticated ? (
              <>
                <Link to="/favoritos" aria-label="Ver favoritos">
                  
                    <AiFillHeart className="text-white text-2xl cursor-pointer" />
                  
                </Link>

                
                <button onClick={() => setProfileModalOpen(true)}>
                  {user?.imagem ? (
                    <img
                      src={user.imagem}
                      alt="Foto de perfil"
                      className="w-9 h-9 rounded-full border-2 border-white object-cover cursor-pointer"
                    />
                  ) : (
                    <CgProfile size={25} className="cursor-pointer" />
                  )}
                </button>

              </>
            ) : (
              <Button onClick={() => setModalType("login")} className="border border-gray-300 text-xs">Iniciar Sessão</Button>
            )}
          </div>
        </div>
      </nav>

      {/* HEADER */}
      {isHomePage && (
        <header id="page-top" className="relative h-[90vh] w-full bg-black text-white overflow-hidden">
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

            <p className={`mt-4 text-lg md:text-xl max-w-2xl text-white/90 transition-opacity duration-700 ${fade ? "opacity-100" : "opacity-0"}`}>
              {subtitle}
            </p>

            {/* --- INDICADORES DO CARROSSEL (3 bolinhas numeradas) --- */}
            <div className="absolute bottom-6 flex gap-3 z-30">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setFade(false);
                    setTimeout(() => {
                      setCurrentSlide(index);
                      setFade(true);
                    }, 300);
                  }}
                  className={`w-6 h-6 flex items-center justify-center rounded-full text-xs font-bold transition-all
                    ${currentSlide === index 
                      ? "bg-white text-black scale-110" 
                      : "bg-white/40 text-white backdrop-blur-sm"
                    }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>

          </div>
        </header>
      )}


      

      {profileModalOpen && <ProfileModal setIsOpen={setProfileModalOpen} handleLogout={handleLogout} />}
      {modalType === "login" && (
        <LoginModal setIsOpen={() => setModalType(null)} setModalType={setModalType} />

      )}
      {modalType === "register" && <RegisterModal setIsOpen={() => setModalType(null)} setModalType={setModalType} />}
      {modalType === "forgot-password" && <ForgotPasswordModal setIsOpen={() => setModalType(null)} setModalType={setModalType} />}
    </>
  );
}
