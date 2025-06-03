// eslint-disable-next-line
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetProfileQuery, useLogoutMutation } from "../store/api";
import { setAuthState, clearAuthState } from "../store/authSlice";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";
import ForgotPasswordModal from "./ForgotPasswordModal";
import ProfileModal from "./ProfileModal";
import Menu from "./Menu"; // ✅ Importando o menu
import logoverde from '../assets/verde1.svg';
import Button from "./Button"; 
import ProfileButton from "./ProfileButton";
import { AiFillHeart } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import defaultAvatar from "../assets/car1.webp"; // Importando a imagem de avatar padrão


export default function Header() {
  const dispatch = useDispatch();
  // eslint-disable-next-line
  const { data: userData, error, refetch } = useGetProfileQuery();
  const [logoutUser] = useLogoutMutation();
  // eslint-disable-next-line
  const user = useSelector((state) => state.auth.user);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [modalType, setModalType] = useState(null);
  const [profileModalOpen, setProfileModalOpen] = useState(false);

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

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md shadow-emerald-700 flex flex-col items-center py-4 px-30 z-50">
      <div className="flex justify-between items-center w-full">
        <h1 className="text-xl font-bold">
          <img src={logoverde} className="w-32 sm:w-40 md:w-48 lg:w-70" alt="Logo" />
        </h1>

        <div className="relative w-64 sm:w-80 md:w-96 lg:w-[500px]">
  <input
    type="text"
    placeholder="Buscar..."
    className="w-full border border-gray-300 rounded-full px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
  />
  <BsSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
</div>

        {isAuthenticated ? (
          <>
          <AiFillHeart className="text-red-800 text-xl" />
          <button
            className="flex items-center gap-2 px-3 py-2 rounded-full transition cursor-pointer"
            onClick={() => setProfileModalOpen(true)}
          >
            <img
               src={defaultAvatar}
               alt="Perfil"
               className="h-10 w-10 rounded-full object-cover border-2 border-white"
            />
          </button>
          </>
        ) : (
          <Button className="w-30" onClick={() => setModalType("login")}>
            Entrar
          </Button>
          
        )}
      </div>

      {/* ✅ Adicionando o Menu abaixo do cabeçalho */}
      <nav className="w-full mt-10 ml-16">
        <Menu />
      </nav>

      {/* Modais */}
      {profileModalOpen && <ProfileModal setIsOpen={setProfileModalOpen} handleLogout={handleLogout} />}
      {modalType === "login" && <LoginModal setIsOpen={() => setModalType(null)} setModalType={setModalType} />}
      {modalType === "register" && <RegisterModal setIsOpen={() => setModalType(null)} setModalType={setModalType} />}
      {modalType === "forgot-password" && <ForgotPasswordModal setIsOpen={() => setModalType(null)} setModalType={setModalType} />}
    </header>
  );
}
