import { useContext, useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function Navbar() {
  const {currentUser} = useContext(AuthContext)
  const [open, setOpen] = useState(false);

  return (
    <nav>
      {/* {Lado izquiero} */}
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="" />
          <span></span>
        </a>
        <a href="/" className="options">
          Inicio
        </a>
        <a href="/" className="options">
          Acerca de
        </a>
        <a href="/" className="options">
          Contacto
        </a>
      </div>
      {/* {Lado derecho} */}
      <div className="right">
        {currentUser ? (
          <div className="user">
            <img
              src={currentUser.avatar || "/noavatar.png"}
              alt=""
            />
            <span>{currentUser.username}</span>
            <Link to="/profile" className="profile">
              Profile
            </Link>
          </div>
        ) : (
          <>
            <a href="/login">Inicia Sesion</a>
            <a href="/register" className="register">
              Registrate
            </a>{" "}
          </>
        )}
        <div className="menuIcon">
          <img
            src="/menu.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <a href="/">Inicio</a>
          <a href="/">Acerca de</a>
          <a href="/">Contacto</a>
          <a href="/">Inicia Sesion</a>
          <a href="/">Registrate</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
