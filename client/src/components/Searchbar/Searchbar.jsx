import { useState } from "react";
import "./Searchbar.scss";
import { Link } from "react-router-dom";

function Searchbar() {
  const [query, setQuery] = useState({
    type: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const switchType = (val) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };

  const handleChange = (e) => {
    setQuery((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="searchBar">
      <form>
        <div className="item">
          <select name="type" onChange={handleChange}>
            <option value="">Tipo de alojamiento</option>
            <option value="mixto">Mixto</option>
            <option value="mujeres">Mujeres</option>
            <option value="hombres">Hombres</option>
          </select>
        </div>

        <input
          type="number"
          name="minPrice"
          min={0}
          max={1000000000}
          placeholder="Precio Minimo"
          onChange={handleChange}
        />
        <input
          type="number"
          name="maxPrice"
          min={0}
          max={1000000000}
          placeholder="Precio Maximo"
          onChange={handleChange}
        />
        <Link to={`/list?type=${query.type}&minPrice=${query.minPrice}$maxPrice=${query.maxPrice}`}>
          <button>
            <img src="/search.png" alt="" />
          </button>
        </Link>
      </form>
    </div>
  );
}

export default Searchbar;
