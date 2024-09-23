import "./Filter.scss";

function Filter() {
  return (
    <div className="filer">
      <h1>
        Encuentra resultados en<b> Guadalajara</b>
      </h1>
      <div className="top">
        <div className="item">
          <label htmlFor="city">Ciudad</label>
          <input type="text" id="city" name="city" placeholder="Guadalajara" />
        </div>
      </div>
      <div className="bottom">
        <div className="item">
          <label htmlFor="type">Tipo</label>
          <select name="type" id="type">
            <option value="">Any</option>
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="property">Property</label>
          <select name="property" id="property">
            <option value="">Any</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="minPrice">Precio min</label>
          <input type="number" id="minPrice" name="minPrice" placeholder="any" />
        </div>
        <div className="item">
          <label htmlFor="maxPrice">Precio max</label>
          <input type="number" id="maxPrice" name="maxPrice" placeholder="any" />
        </div>
        <div className="item">
          <label htmlFor="bedroom">Bedrooms</label>
          <input type="text" id="bedroom" name="bedroom" placeholder="any" />
        </div>
        <button>
            <img src="/search.png" alt=""/>
        </button>
      </div>
    </div>
  );
}

export default Filter;
