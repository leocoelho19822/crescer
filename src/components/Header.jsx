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
    <header className="fixed top-0 left-0 w-full bg-white shadow-md flex flex-col items-center py-4 px-10 z-50">
      <div className="flex justify-between items-center w-full">
        <h1 className="text-xl font-bold">
          <img src={logoverde} className="w-32 sm:w-40 md:w-48 lg:w-50" alt="Logo" />
        </h1>

        {isAuthenticated ? (
          <button
            className="bg-gray-600 text-white px-4 py-2 rounded-3xl hover:bg-gray-700 transition cursor-pointer"
            onClick={() => setProfileModalOpen(true)}
          >
            Perfil
          </button>
        ) : (
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-3xl hover:bg-blue-700 transition cursor-pointer"
            onClick={() => setModalType("login")}
          >
            Entrar
          </button>
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
