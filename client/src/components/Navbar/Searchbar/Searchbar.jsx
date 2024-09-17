import './Searchbar.scss'

function Searchbar() {
  return (
    <div className='searchBar'>
      <form>
        <input type="text" name="location" placeholder="Centro Universitario" />
        <input type="number" name="minPrice" min={0} max={1000000000} placeholder="Precio Minimo" />
        <input type="number" name="maxPrice" min={0} max={1000000000} placeholder="Precio Maximo" />
        <button>
            <img src="/search.png" alt="" />
        </button>
      </form>
    </div>
  )
}

export default Searchbar;
