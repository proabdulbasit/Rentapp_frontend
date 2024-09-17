import { useContext, useState } from "react";
import "./Navbar.scss";

function Navbar() {
  const [open, setOpen] = useState(false)
  
  return (
    <nav>
      {/* {Lado izquiero} */}
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="" />
          <span></span>
        </a>
        <a href="/" className="options">Inicio</a>
        <a href="/" className="options">Acerca de</a>
        <a href="/" className="options">Contacto</a>
      </div>
      {/* {Lado derecho} */}
      <div className="right">
        <a href="/">Inicia Sesion</a>
        <a href="/" className="register">Registrate</a>
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
