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
import { MdKeyboardArrowDown } from "react-icons/md";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import Button from "./Button";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";
import ForgotPasswordModal from "./ForgotPasswordModal";
import ProfileModal from "./ProfileModal";
//import { useDispatch, useSelector } from "react-redux";
//import { useGetProfileQuery, useLogoutMutation } from "../store/api";
//import { setAuthState, clearAuthState } from "../store/authSlice";
//import { IoIosArrowBack } from "react-icons/io";

const slides = [
  
  {
    image: parentalidadeBg2,
    title: "Juntos desde o início",
    subtitle: "Informação de confiança desde a gravidez até aos 3 anos"
  },
  {
    image: brincar,
    title: "Famílias que brincam juntas, crescem juntas",
    subtitle: "Porque o brincar é mais do que diversão — é conexão, aprendizagem e amor"
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
  //const dispatch = useDispatch();
  //const { data: userData, refetch } = useGetProfileQuery();
  //const [logoutUser] = useLogoutMutation();
  //const user = useSelector((state) => state.auth.user);
  //const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [modalType, setModalType] = useState(null);
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const [isProjectOpen, setIsProjectOpen] = useState(false);
  const [isBarrigaOpen, setIsBarrigaOpen] = useState(false);
  const [isColoOpen, setIsColoOpen] = useState(false);
  const [isVidaOpen, setIsVidaOpen] = useState(false);
  const [isComunidadeOpen, setIsComunidadeOpen] = useState(false);

  
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);


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

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
  }, []);


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

  /*useEffect(() => {
    if (userData) {
      dispatch(setAuthState({ user: userData, isAuthenticated: true }));
    }
  }, [userData, dispatch]);
  */

  // Fecha com ESC
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  /*
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
  */

  const handleLogout = () => {
  setIsAuthenticated(false);
  setUser(null);
  localStorage.removeItem("user");
  localStorage.removeItem("favoritos");
  localStorage.removeItem("inscricoes");
  setProfileModalOpen(false);
};



  const { image, title, subtitle } = slides[currentSlide];

  return (
    <>
      {/* NAVBAR FIXA */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
          isHomePage ? (scrolled ? "bg-[#78B19A]/90" : "bg-transparent") : "bg-[#78B19A]/90"
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
            <img src={logoverde} alt="Cres(Ser)" className={`transition-all duration-300 ${scrolled ? "h-10" : "h-10"}`} />
          </a>

          <div className="flex gap-4 items-center">
            {isAuthenticated ? (
              <>
                {user?.favorites?.length > 0 ? (
                  <Link to="/favoritos">
                    <AiFillHeart className="text-white text-2xl cursor-pointer" />
                  </Link>
                ) : (
                  
                    <AiFillHeart className="text-white text-2xl " />
                  

                )}
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
                <img src={logoverde} alt="Cres(Ser)" className="h-10 w-auto" />
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
                  >
                    Início
                  </a>
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

                {/* Na Barriga */}
                <li>
                  <button
                    onClick={() => setIsBarrigaOpen((v) => !v)}
                    className="w-full text-left hover:text-emerald-200 flex items-center justify-between"
                    aria-expanded={isBarrigaOpen}
                  >
                    <span>Na Barriga</span>
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
                        1º Trimestre
                      </li>
                      <li
                        onClick={() => { navigate("/page/2tri"); setMenuOpen(false); }}
                        className="block hover:text-emerald-200 cursor-pointer"
                      >
                        2º Trimestre
                      </li>
                      <li
                        onClick={() => { navigate("/page/3tri"); setMenuOpen(false); }}
                        className="block hover:text-emerald-200 cursor-pointer"
                      >
                        3º Trimestre
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
                    <span>No Colo</span>
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
                    <span>Na Vida</span>
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
                        Tenho 1 ano
                      </li>
                      <li
                        onClick={() => { navigate("/page/18mes"); setMenuOpen(false); }}
                        className="block hover:text-emerald-200 cursor-pointer"
                      >
                        Tenho 18 meses
                      </li>
                      <li
                        onClick={() => { navigate("/page/2ano"); setMenuOpen(false); }}
                        className="block hover:text-emerald-200 cursor-pointer"
                      >
                        Tenho 2 anos
                      </li>
                    </ul>
                  )}
                </li>

                {/* Na Vida */}
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
                        Informações Úteis
                      </li>
                      
                    </ul>
                  )}
                </li>

                

                <hr className="my-6 border-white/10" />

                
              </ul>
            </nav>
          </div>
        </aside>
        {/* -------- FIM MENU MOBILE -------- */}

        {/* Barra (desktop) */}
        <div className="max-w-7xl mx-auto px-4 py-4 hidden lg:flex justify-between items-center">
          <a href="/">
            <img src={logoverde} alt="Cres(Ser)" className={`transition-all duration-300 ${scrolled ? "h-10" : "h-14"}`} />
          </a>

          <ul className="flex space-x-6 items-center text-sm font-medium ">
            <li>
              <a href="/" className="flex items-center gap-1 hover:text-emerald-200 uppercase">
                <AiFillHome size={20} />
              </a>
            </li>
            <li className="relative group">
              <button className="flex items-center gap-1 hover:text-emerald-200 uppercase">Projeto<MdKeyboardArrowDown size={20} /></button>
              <ul className="absolute left-0 top-full mt-2 bg-white text-black text-sm rounded-md shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 min-w-[160px] z-50">
                <a href="/page/sobre"><li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Sobre</li></a>
                <a href="/page/equipa"><li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Equipa</li></a>
                <a href="/page/parceiros"><li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Parceiros</li></a>
                <a href="/page/contato"><li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Contatos</li></a>
              </ul>
            </li>
            <li className="relative group">
              <button className="flex items-center gap-1 hover:text-emerald-200 uppercase">Na Barriga<MdKeyboardArrowDown size={20} /></button>
              <ul className="absolute left-0 top-full mt-2 bg-white text-black text-sm rounded-md shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 min-w-[160px] z-50">
                <a href="/page/1tri"><li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">1º Trimestre</li></a>
                <a href="/page/2tri"><li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">2º Trimestre</li></a>
                <a href="/page/3tri"><li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">3º Trimestre</li></a>
              </ul>
            </li>
            <li className="relative group">
              <button className="flex items-center gap-1 hover:text-emerald-200 uppercase">No Colo<MdKeyboardArrowDown size={20} /></button>
              <ul className="absolute left-0 top-full mt-2 bg-white text-black text-sm rounded-md shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 min-w-[160px] z-50">
                <a href="/mesames"><li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Mês a mês</li></a>
                
              </ul>
            </li>
            <li className="relative group">
              <button className="flex items-center gap-1 hover:text-emerald-200 uppercase">Na Vida<MdKeyboardArrowDown size={20} /></button>
              <ul className="absolute left-0 top-full mt-2 bg-white text-black text-sm rounded-md shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 min-w-[160px] z-50">
                
                <a href="/page/1ano"><li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Tenho 1 ano</li></a>
                <a href="/page/18mes"><li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Tenho 18 meses</li></a>
                <a href="/page/2ano"><li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Tenho 2 anos</li></a>
              </ul>
            </li>
            <li className="relative group">
              <button className="flex items-center gap-1 hover:text-emerald-200 uppercase">Comunidade<MdKeyboardArrowDown size={20} /></button>
              <ul className="absolute left-0 top-full mt-2 bg-white text-black text-sm rounded-md shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 min-w-[160px] z-50">
                <a href="/eventos"><li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Eventos</li></a>
                <a href="/atividades"><li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Atividades</li></a>
                <a href="/page/infouteis"><li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Informações Úteis</li></a>
                
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
                {user?.favorites?.length > 0 ? (
                  <Link to="/favoritos">
                    <AiFillHeart className="text-white text-2xl cursor-pointer" />
                  </Link>
                ) : (
                  <AiFillHeart className="text-white text-2xl cursor-pointer" />
                )}
                
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
            
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 animate-bounce cursor-pointer">
            <MdKeyboardArrowDown 
              size={50} 
              className="text-white opacity-80 hover:opacity-100 transition-opacity duration-300" 
              onClick={() => {
                window.scrollTo({
                  top: window.innerHeight,
                  behavior: "smooth"
                });
              }}
            />
          </div>
          </div>
        </header>
      )}

      

      {profileModalOpen && <ProfileModal setIsOpen={setProfileModalOpen} handleLogout={handleLogout} />}
      {modalType === "login" && (
        <LoginModal
          setIsOpen={() => setModalType(null)}
          setModalType={setModalType}
          setUser={setUser}
          setIsAuthenticated={setIsAuthenticated}
        />
      )}
      {modalType === "register" && <RegisterModal setIsOpen={() => setModalType(null)} setModalType={setModalType} />}
      {modalType === "forgot-password" && <ForgotPasswordModal setIsOpen={() => setModalType(null)} setModalType={setModalType} />}
    </>
  );
}
