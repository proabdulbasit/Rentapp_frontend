import List from "../../components/List/List";
import Map from "../../components/Map/Map";
import "./Profile.scss";
import ApiRequest from "../../lib/ApiRequest";
import { Await, Link, useLoaderData, useNavigate } from "react-router-dom";
import { Suspense, useContext, useEffect } from "react";
import {AuthContext} from '../../context/AuthContext'

function Profile() {
  const {updateUser, currentUser} = useContext(AuthContext)
  const navigate = useNavigate()
  const data = useLoaderData();

  const handleLogout = async () => {
    try {
      await ApiRequest.post("/auth/logout");
      updateUser(null)
      navigate("/")
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="profile">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>Mi Informacion</h1>
            <Link to="/profile/update">
            <button>Actualizar Perfil</button>
            </Link>
          </div>
          <div className="info">
            <span>
              Imagen:
              <img
                src={currentUser.avatar || "noavatar.png"}
                alt=""
              />
            </span>
            <span>
              Nombre: <b>{currentUser.username}</b>
            </span>
            <span>
              Email: <b>{currentUser.email}</b>
            </span>
            <button onClick={handleLogout}>Cerrar Sesion</button>
          </div>

          <div className="title">
            <h1>Mis Cuartos</h1>
            <Link to="/add">
            <button>Crear Nuevo Cuarto</button>
            </Link>
          </div>
          <Suspense fallback={<p>Cargando...</p>}>
            <Await
              resolve={data.postResponse}
              errorElement={<p>Error cargando habitaciones!</p>}
            >
              {(postResponse) => <List posts={postResponse.data.userPosts} />}
            </Await>
          </Suspense>
          <div className="title">
            <h1>Mis Favoritos</h1>
          </div>
          <Suspense fallback={<p>Cargando...</p>}>
            <Await
              resolve={data.postResponse}
              errorElement={<p>Error cargando habitaciones!</p>}
            >
              {(postResponse) => <List posts={postResponse.data.savedPosts} />}
            </Await>
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default Profile;
