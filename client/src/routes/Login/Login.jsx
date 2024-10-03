import { useContext, useState } from "react";
import "./Login.scss";
import { Link, useNavigate } from "react-router-dom";
import ApiRequest from "../../lib/ApiRequest";
import { AuthContext } from "../../context/AuthContext";

function Login() {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { updateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Evitar el comportamiento predeterminado del formulario
    setIsLoading(true); // Indicar que se está cargando
    setError(""); // Limpiar cualquier error previo

    const formData = new FormData(e.target);
    const username = formData.get("username");
    const password = formData.get("password");

    try {
      const res = await ApiRequest.post("/auth/login", {
        username,
        password,
      });

      console.log("Token recibido:", res.data.token); // Asegúrate de que el token esté en la respuesta

      updateUser(res.data); // Actualizar el estado del usuario
      navigate("/"); // Redirigir al usuario a la página principal
    } catch (err) {
      // Manejar el error de manera robusta
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message); // Mostrar mensaje específico de error
      } else {
        setError("Error inesperado. Intenta nuevamente."); // Mensaje genérico
      }
    } finally {
      setIsLoading(false); // Finalizar el estado de carga
    }
  };

  return (
    <div className="login">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Bienvenid@ de Nuevo</h1>
          <input name="username" required type="text" placeholder="Usuario" />
          <input name="password" required type="password" placeholder="Contraseña" />
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Cargando..." : "Iniciar Sesión"}
          </button>
          {error && <span className="error">{error}</span>} {/* Agregar una clase para el estilo del mensaje de error */}
          <Link to="/register">{"No"} tienes una cuenta?</Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
