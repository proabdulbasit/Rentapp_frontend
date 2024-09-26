import { useState } from "react";
import "./NewPost.scss";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import ApiRequest from "../../lib/ApiRequest";
import UploadImages from "../../components/UploadImages/UploadImages";
import { useNavigate } from "react-router-dom";

function NewPostPage() {
  const [value, setValue] = useState("");
  const [images, setImages] = useState([]);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const inputs = Object.fromEntries(formData);

    try {
      const res = await ApiRequest.post("/posts", {
        postData: {
          title: inputs.title,
          price: parseInt(inputs.price),
          images: images,
          address: inputs.address,
          city: inputs.city,
          bedType: inputs.bedType,
          bathType: inputs.bathType,
          type: inputs.type,
          latitude: inputs.latitude,
          longitude: inputs.longitude,  
        },
        postDetail: {
          description: value,
          services: inputs.services,
          meetings: inputs.meetings,
          pet: inputs.pet,
          wifi: inputs.wifi,
          school: parseInt(inputs.school),
          bus: parseInt(inputs.bus),
          store: parseInt(inputs.store),
        },
      });
      navigate("/" + res.data.id);
    } catch (err) {
      console.log(err);
      setError(error);
    }
  };

  return (
    <div className="newPost">
      <div className="formContainer">
        <h1>Agrega una nueva habitacion</h1>
        <div className="wrapper">
          <form onSubmit={handleSubmit}>
            <div className="item">
              <label htmlFor="title">Titulo</label>
              <input id="title" name="title" type="text" />
            </div>
            <div className="item">
              <label htmlFor="price">Precio</label>
              <input id="price" name="price" type="number" />
            </div>
            <div className="item">
              <label htmlFor="address">Direccion</label>
              <input id="address" name="address" type="text" />
            </div>
            <div className="item">
              <label htmlFor="city">Ciudad</label>
              <input id="city" name="city" type="text" />
            </div>
            <div className="item">
              <label htmlFor="bedType">Tipo de cama</label>
              <select name="bedType">
                <option value="individual">Individual</option>
                <option value="matrimonial">Matrimonial</option>
                <option value="queenSize">Queen Size</option>
                <option value="kingSize">King Size</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="bathType">Tipo de baño</label>
              <select name="bathType">
                <option value="compartido">Compartido</option>
                <option value="privado">Privado</option>
              </select>
              </div>
            <div className="item">
              <label htmlFor="type">Tipo de alojamiento</label>
              <select name="type">
                <option value="mixto">Mixto</option>
                <option value="mujeres">Mujeres</option>
                <option value="hombres">Hombres</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="latitude">Latitud</label>
              <input id="latitude" name="latitude" type="text" />
            </div>
            <div className="item">
              <label htmlFor="longitude">Longitud</label>
              <input id="longitude" name="longitude" type="text" />
            </div>
            <div className="item">
              <label htmlFor="services">Servicios</label>
              <select name="services">
                <option value="incuidos">Incuidos</option>
                <option value="no-incluidos">No Incluidos</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="meetings">Reuniones</label>
              <select name="meetings">
                <option value="permitidas">Permitidas</option>
                <option value="no-permitidas">No Permitidas</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="pet">Politica de Mascotas</label>
              <select name="pet">
              <option value="permitidas">Permitidas</option>
              <option value="no-permitidas">No Permitidas</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="wifi">Velocidad Internet</label>
              <input min={0} id="wifi" name="wifi" type="number" />
            </div>
            <div className="item">
              <label htmlFor="school">Distancia Universidad</label>
              <input min={0} id="school" name="school" type="number" />
            </div>
            <div className="item">
              <label htmlFor="bus">Distancia Transporte</label>
              <input min={0} id="bus" name="bus" type="number" />
            </div>
            <div className="item">
              <label htmlFor="store">Distancia Super Mercado</label>
              <input min={0} id="store" name="store" type="number" />
            </div>
            <div className="item description">
              <label htmlFor="description">Descripcion</label>
              <ReactQuill theme="snow" onChange={setValue} value={value} />
            </div>           
            <button className="sendButton">Agregar</button>
            {error && <span>error</span>}
          </form>
        </div>
      </div>
      <div className="sideContainer">
        {images.map((image, index) => (
          <img src={image} key={index} alt="" />
        ))}
        <UploadImages
          uwConfig={{
            multiple: true,
            folder: "posts",
            cloudName: "rentappweb",
            uploadPreset: "rentapp",
            maxFiles: 4,
          }}
          setState={setImages}
        />
      </div>
    </div>
  );
}

export default NewPostPage;
