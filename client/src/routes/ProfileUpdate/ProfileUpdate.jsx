import { useContext, useState } from "react";
import "./ProfileUpdate.scss";
import { AuthContext } from "../../context/AuthContext";
import ApiRequest from "../../lib/ApiRequest";
import { useNavigate } from "react-router-dom";
import UploadWidget from "../../components/UploadImages/UploadImages";

function ProfileUpdate() {
  const { currentUser, updateUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [avatar, setAvatar] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const { username, email, password } = Object.fromEntries(formData);

    try {
      const res = await ApiRequest.put(`/users/${currentUser.id}`, {
        username,
        email,
        password,
        avatar: avatar[0],
      });
      updateUser(res.data);
      navigate("/profile");
    } catch (err) {
      console.log(err);
      setError(err.response.data.message);
    }
  };

  return (
    <div className="profileUpdate">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Actualiza Tu Perfil</h1>
          <div className="item">
            <label htmlFor="username">Usuario</label>
            <input
              id="username"
              name="username"
              type="text"
              defaultValue={currentUser.username}
            />
          </div>
          <div className="item">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              defaultValue={currentUser.email}
            />
          </div>
          <div className="item">
            <label htmlFor="password">Contraseña</label>
            <input id="password" name="password" type="password" />
          </div>
          <button>Actualizar</button>
          {error && <span>error</span>}
        </form>
      </div>
      <div className="right">
        <img src={avatar[0] || currentUser.avatar || "/noavatar.png"} alt="" className="avatar" />
        <UploadWidget
          uwConfig={{
            cloudName: "rentappweb",
            uploadPreset: "rentapp",
            multiple: false,
            maxImageFileSize: 2000000,
            folder: "avatars",
          }}
          setState={setAvatar}
        />
      </div>
    </div>
  );
}

export default ProfileUpdate;
