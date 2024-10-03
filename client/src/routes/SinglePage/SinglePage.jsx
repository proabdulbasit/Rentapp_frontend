import Slider from "../../components/Slider/Slider";
import "./SinglePage.scss";
import Map from "../../components/Map/Map";
import { useLoaderData, useNavigate } from "react-router-dom";
import DOMPurify from "dompurify";
import { useContext, useState } from "react";
import ApiRequest from "../../lib/ApiRequest";
import { AuthContext } from "../../context/AuthContext";

function modifiedStr(str) {
  let modifiedStr = str.replace(/-/g, " ");
  return modifiedStr.charAt(0).toUpperCase() + modifiedStr.slice(1);
}

function SinglePage() {
  const post = useLoaderData();
  const [saved, setSaved] = useState(post.isSaved);
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSave = async () => {
    if (!currentUser) {
      navigate("/login");
    }
    setSaved((prev) => !prev);
    try {
      await ApiRequest.post("/users/save", { postId: post.id });
    } catch (err) {
      console.log(err);
      setSaved((prev) => !prev);
    }
  };

  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider images={post.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{modifiedStr(post.title)}</h1>
                <div className="address">
                  <img src="/pin.png" alt="" />
                  <span>{modifiedStr(post.address)}</span>
                </div>
                <div className="price">$ {post.price}</div>
              </div>
              <div className="user">
                <img src={post.user.avatar} alt="" />
                <span>{post.user.username}</span>
              </div>
            </div>
            <div
              className="bottom"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(post.postDetail.description),
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className="title">Informacion General</p>
          <div className="listVertical">
            <div className="feature">
              <img src="/meeting.png" alt="" />
              <div className="featureText">
                <span>Reuniones</span>
                <p>{modifiedStr(post.postDetail.meetings)}</p>
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="" />
              <div className="featureText">
                <span>Politica mascotas</span>
                <p>{modifiedStr(post.postDetail.pet)}</p>
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt="" />
              <div className="featureText">
                <span>Servicios Incluidos</span>
                <p>{modifiedStr(post.postDetail.services)}</p>
              </div>
            </div>
          </div>
          <p className="title"></p>
          <div className="infos">
            <div className="info">
              <img src="/wifi.png" alt="" />
              <span>{post.postDetail.wifi}</span>
            </div>
            <div className="info">
              <img src="/bed.png" alt="" />
              <span>{modifiedStr(post.bedType)}</span>
            </div>
            <div className="info">
              <img src="/bath.png" alt="" />
              <span>{modifiedStr(post.bathType)}</span>
            </div>
          </div>
          <p className="title">Lugares Cercanos</p>
          <div className="listHorizontal">
            <div className="feature">
              <img src="/school.png" alt="" />
              <div className="featureText">
                <span>Escuela</span>
                <p>{post.postDetail.school} m</p>
              </div>
            </div>
            <div className="feature">
              <img src="/bus.png" alt="" />
              <div className="featureText">
                <span>Transporte Publico</span>
                <p>{post.postDetail.bus} m</p>
              </div>
            </div>
            <div className="feature">
              <img src="/store.png" alt="" />
              <div className="featureText">
                <span>Super Mercado</span>
                <p>{post.postDetail.store} m</p>
              </div>
            </div>
          </div>
          <p className="title">Ubicacion</p>
          <div className="mapContainer">
            <Map items={[post]} />
          </div>
          <div className="buttons">
            <button onClick={() => (window.location.href = `mailto:${post.user.email}`)}>
              <img src="/chat.png" alt="" />
              Contacta
            </button>
            <button
              onClick={handleSave}
              style={{
                backgroundColor: saved ? "#FFA9DE" : "#8FEBFF",
              }}
            >
              <img src="/save.png" alt="" />
              {saved ? "Habitacion guardada" : "Guarda la habitacion"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;
