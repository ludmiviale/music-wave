import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { getSongById } from "../../redux/actions";
import Nav from "../../components/nav/Nav";
import "./detail.css";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const songDetail = useSelector((state) => state.songDetail);

  useEffect(() => {
    dispatch(getSongById(id));
  }, [id]);

  return (
    <div>
      <Nav className="nav" />
      <div className="navegation">
        <Link>Home</Link>
        <span>{" > "}</span>
        <Link>Soft Rock</Link>
      </div>
      <div className="detail-container">
        <div className="column1">
          <img src={songDetail.image} alt="song photo" />
          <button>Play</button>
        </div>
        <div className="column2">
          <h3>{songDetail.title}</h3>
          <div className="info1">
            <p>By</p>
            <p id="artist">{songDetail.artist}</p>
            <p>Record Company </p>
            <p id="recordCompany">{songDetail.recordCompany}</p>
          </div>
          <p>Duration {songDetail.duration}</p>
          <p>Language {songDetail.language}</p>
          <p>Category Soft Rock</p>
          <p>{songDetail.lyrics}</p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
