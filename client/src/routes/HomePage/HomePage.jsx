import { useContext } from 'react';
import Searchbar from '../../components/Searchbar/Searchbar';
import "./HomePage.scss";
import { AuthContext } from '../../context/AuthContext';

function HomePage() {
  const {currentUser} = useContext(AuthContext)

  console.log(currentUser)

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
