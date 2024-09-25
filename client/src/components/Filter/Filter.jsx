import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import "./Filter.scss";

function Filter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState({
    type: searchParams.get("type") || "",
    pet: searchParams.get("pet") || "",
    bathType: searchParams.get("bathType") || "",
    minPrice: searchParams.get("minPrice") || "",
    maxPrice: searchParams.get("maxPrice") || "",
  });

  const handleChange = (e) => {
    setQuery({
      ...query,
      [e.target.name]: e.target.value,
    });
  };

  const handleFilter = () => {
    setSearchParams(query);
  };

  return (
    <div className="filer">
      <h1>Busca el alojamiento a tu medida</h1>
      <div className="bottom">
        <div className="item">
          <label htmlFor="type">Tipo de alojamiento</label>
          <select
            name="type"
            id="type"
            onChange={handleChange}
            defaultValue={query.type}
          >
            <option value="">Todos</option>
            <option value="mixto">Mixto</option>
            <option value="mujeres">Solo mujeres</option>
            <option value="hombres">Solo hombres</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="pet">Politica de mascotas</label>
          <select
            name="pet"
            id="pet"
            onChange={handleChange}
            defaultValue={query.pet}
          >
            <option value="">Todos</option>
            <option value="permitidas">Permitidos</option>
            <option value="no-permitidas">No Permitidos</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="bathType">Tipo de baño</label>
          <select
            name="bathType"
            id="bathType"
            onChange={handleChange}
            defaultValue={query.bathType}
          >
            <option value="">Todos</option>
            <option value="privado">Privado</option>
            <option value="compartido">Compartido</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="minPrice">Precio minimo</label>
          <input
            type="number"
            id="minPrice"
            name="minPrice"
            placeholder="Todos"
            onChange={handleChange}
            defaultValue={query.minPrice}
          />
        </div>
        <div className="item">
          <label htmlFor="maxPrice">Precio maximo</label>
          <input
            type="number"
            id="maxPrice"
            name="maxPrice"
            placeholder="Todos"
            onChange={handleChange}
            defaultValue={query.maxPrice}
          />
        </div>

        <button onClick={handleFilter}>
          <img src="/search.png" alt="" />
        </button>
      </div>
    </div>
  );
}

export default Filter;
