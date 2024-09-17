import Searchbar from "../../components/Navbar/Searchbar/Searchbar";
import "./HomePage.scss";

function HomePage() {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">
            Descubre <br />
            un espacio <br />
            hecho para ti.
          </h1>
          <p className="secondText">Encuentra una gran variedad de habitaciones<br/>
          enfocadas en las necesidades de estudiantes.</p>
          <Searchbar/>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/room-body.png" alt="" />
      </div>
    </div>
  );
}

export default HomePage;
