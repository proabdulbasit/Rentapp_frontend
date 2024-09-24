import Slider from "../../components/Slider/Slider";
import "./SinglePage.scss";
import { singlePostData, userData } from "../../lib/dummydata";
import Map from "../../components/Map/Map";

function SinglePage() {
  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider images={singlePostData.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{singlePostData.title}</h1>
                <div className="address">
                  <img src="/pin.png" alt="" />
                  <span>{singlePostData.address}</span>
                </div>
                <div className="price">$ {singlePostData.price}</div>
              </div>
              <div className="user">
                <img src={userData.img} alt="" />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className="bottom">{singlePostData.description}</div>
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
                <p>Permitidas</p>
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="" />
              <div className="featureText">
                <span>Politica mascotas</span>
                <p>Mascotas permitidas</p>
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt="" />
              <div className="featureText">
                <span>Gastos</span>
                <p>Servicios incluidos</p>
              </div>
            </div>
          </div>
          <p className="title"></p>
          <div className="infos">
            <div className="info">
              <img src="/wifi.png" alt="" />
              <span>100mb</span>
            </div>
            <div className="info">
              <img src="/bed.png" alt="" />
              <span>King Size</span>
            </div>
            <div className="info">
              <img src="/bath.png" alt="" />
              <span>Privado</span>
            </div>
          </div>
          <p className="title">Lugares Cercanos</p>
          <div className="listHorizontal">
            <div className="feature">
              <img src="/school.png" alt="" />
              <div className="featureText">
                <span>Escuela</span>
                <p>250m</p>
              </div>
            </div>
            <div className="feature">
              <img src="/bus.png" alt="" />
              <div className="featureText">
                <span>Transporte Publico</span>
                <p>100m</p>
              </div>
            </div>
            <div className="feature">
              <img src="/store.png" alt="" />
              <div className="featureText">
                <span>Super Mercado</span>
                <p>200m</p>
              </div>
            </div>
          </div>
          <p className="title">Ubicacion</p>
          <div className="mapContainer">
            <Map items={[singlePostData]} />
          </div>
          <div className="buttons">
            <button>
              <img src="/chat.png" alt="" />
              Contacta
            </button>
            <button>
              <img src="/save.png" alt="" />
              Guardar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;
