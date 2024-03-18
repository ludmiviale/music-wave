import Card from "../card/Card";
import "./cards.css";

const Cards = ({ allSongs }) => {
  return (
    <div className="card-container">
      {allSongs?.map((song) => (
        <Card key={song.id} song={song} />
      ))}
    </div>
  );
};

export default Cards;
