import { Link } from "react-router-dom";
import "./Card.scss";

function modifiedStr(str) {
  let modifiedStr = str.replace(/-/g, " ");
  return modifiedStr.charAt(0).toUpperCase() + modifiedStr.slice(1);
}

function Card({ item }) {
  return (
    <div className="card">
      <Link to={`/${item.id}`} className="imgContainer">
        <img src={item.images[0]} alt="" />
      </Link>
      <div className="textContainer">
        <h2 className="title">
          <Link to={`/${item.id}`}>{modifiedStr(item.title)}</Link>
        </h2>
        <p className="address">
          <img src="/pin.png" alt="" />
          <span>{modifiedStr(item.address)}</span>
        </p>
        <p className="price">$ {item.price}</p>
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <img src="/bed.png" alt="" />
              <span>{modifiedStr(item.bedType)} </span>
            </div>
            <div className="feature">
              <img src="/bath.png" alt="" />
              <span>{modifiedStr(item.bathType)}  </span>
            </div>
          </div>
          <div className="icons">
            <div className="icon">
              <img src="/save.png" alt="" />
            </div>
            <div className="icon">
              <img src="/chat.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
