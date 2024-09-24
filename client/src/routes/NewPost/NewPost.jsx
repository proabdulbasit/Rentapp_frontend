import "./NewPost.scss";

function NewPost() {
  return (
    <div className="newPost">
      <div className="formContainer">
        <h1>Agrega una nueva habitacion</h1>
        <div className="wrapper">
          <form>
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
            <div className="item description">
              <label htmlFor="desc">Descripcion</label>
            </div>
            <div className="item">
              <label htmlFor="city">Ciudad</label>
              <input id="city" name="city" type="text" />
            </div>
            <div className="item">
              <label htmlFor="bedroom">Tamaño de cama</label>
              <select name="bedroom">
                <option value="Individual">Individual</option>
                <option value="Matrimonial">Matrimonial</option>
                <option value="QueenSize">Queen Size</option>
                <option value="KingSize">King Size</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="bathroom">Baño</label>
              <select name="bathroom">
                <option value="Privado">Privado</option>
                <option value="Compartido">Compartido</option>
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
              <label htmlFor="type">Tipo de vivienda</label>
              <select name="type">
                <option value="Mixta" defaultChecked>
                  Mixta
                </option>
                <option value="Hombres" defaultChecked>
                Hombres
                </option>
                <option value="Mujeres" defaultChecked>
                Mujeres
                </option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="meets">Reuniones</label>
              <select name="meets">
                <option value="Permitidas">Permitidas</option>
                <option value="No Permitidas">No Permitidas</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="pet">Politica de mascotas</label>
              <select name="pet">
                <option value="Permitidas">Permitidas</option>
                <option value="No Permitidas">No Permitidas</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="income">Servicios Incluidos</label>
              <select name="services">
                <option value="Incuidos">Incuidos</option>
                <option value="No Incuidos">No Incuidos</option>
              </select>
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
              <label htmlFor="restaurant">Distancia Super Mercado</label>
              <input min={0} id="restaurant" name="restaurant" type="number" />
            </div>
            <button className="sendButton">Agrega</button>
          </form>
        </div>
      </div>
      <div className="sideContainer"></div>
    </div>
  );
}

export default NewPost;
