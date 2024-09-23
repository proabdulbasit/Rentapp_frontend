import "./Register.scss";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import ApiRequest from "../../lib/ApiRequest";

function Register() {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true)
    setError("")
    const formData = new FormData(e.target);

    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const res = await ApiRequest.post("/auth/register", {
        username,
        email,
        password,
      });

      navigate("/login")
    } catch (err) {
      setError(err.response.data.message)
    } finally{
        setIsLoading(false)
      }
  };

  return (
    <div className="register">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Crea Una Cuenta</h1>
          <input name="username" type="text" placeholder="Usuario" />
          <input name="email" type="text" placeholder="Email" />
          <input name="password" type="password" placeholder="Contraseña" />
          <button disabled={isLoading}>Registrate</button>
          {error && <span>{error}</span>}
          <Link to="/login">Ya tienes una cuenta?</Link>
        </form>
      </div>
    </div>
  );
}

export default Register;
