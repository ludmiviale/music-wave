import { Link } from "react-router-dom";
import "./card.css";

const Card = ({ song }) => {
  const { id, title, artist, image } = song;
  return (
    <div className="card">
      <Link to={`/${id}`}>
        <img src={image} alt="song photo" />
        <h3>{title}</h3>
        <p>{artist}</p>
      </Link>
    </div>
  );
};

export default Card;
