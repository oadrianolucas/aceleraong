import React from 'react';
import { FiMenu } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";

export default function MenuButton({ onClick, menuOpen }) {
  return (
    <button
      className="text-white font-bold focus:outline-none"
      onClick={onClick}
    >
      {menuOpen ? <IoCloseSharp /> : <FiMenu />}
    </button>
  );
}
