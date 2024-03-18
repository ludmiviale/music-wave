import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, getSongs } from "../../redux/actions";
import Nav from "../../components/nav/Nav";
import Banner from "../../components/banner/Banner";
import Cards from "../../components/cards/Cards";
import "./home.css";

const Home = () => {
  const dispatch = useDispatch();
  const { allSongs, allCategories } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getSongs());
    dispatch(getCategories());
  }, []);

  return (
    <div>
      <Nav />
      <Banner />
      <h2 className="category">Soft Rock</h2>
      <Cards allSongs={allSongs} />
    </div>
  );
};

export default Home;
