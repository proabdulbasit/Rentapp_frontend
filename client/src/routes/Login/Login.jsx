import { useContext, useState } from "react";
import "./Login.scss";
import { Link, useNavigate } from "react-router-dom";
import ApiRequest from "../../lib/ApiRequest";
import { AuthContext } from "../../context/AuthContext";

function Login() {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const {updateUser} = useContext(AuthContext)


  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true)
    setError("")
    const formData = new FormData(e.target);

    const username = formData.get("username");
    const password = formData.get("password");

    try {
      const res = await ApiRequest.post("/auth/login", {
        username,
        password,
      });
      updateUser(res.data)
      navigate("/")
    } catch (err) {
      setError(err.response.data.message)
    } finally{
      setIsLoading(false)
    }
  };

  return (
    <div className="login">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Bienvenid@ de Nuevo</h1>
          <input name="username" required ype="text" placeholder="Usuario" />
          <input name="password" required type="password" placeholder="Contraseña" />
          <button disabled={isLoading}>Inicia Sesion</button>
          {error && <span>{error}</span>}
          <Link to="/register">{"No"} tienes una cuenta?</Link>
        </form>
      </div>
    </div>
  );
}

export default Login;