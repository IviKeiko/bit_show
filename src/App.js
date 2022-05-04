import "./App.css";
import { useState, useEffect } from "react";

import Header from "./components/Header";
import Shows from "./components/Shows";
import Footer from "./components/Footer";

const url = "http://api.tvmaze.com/shows";
function App() {
  const [shows, setShows] = useState([]);
  const [filteredShows, setFilteredShows] = useState([]);
  const [search, setSearch] = useState("");

  const fetchShows = async () => {
    try {
      const response = await fetch(url);
      const showsData = await response.json();
      setShows(showsData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchShows();
  }, []);

  useEffect(() => {
    const filteredShows = shows.filter((show) => {
      return show.name.toLowerCase().includes(search);
    });
    setFilteredShows(filteredShows);
  }, [shows, search]);

  const searchHandler = (e) => {
    const searchValue = e.target.value;
    setSearch(searchValue);
  };

  return (
    <>
      <Header onChange={searchHandler} />
      <Shows showList={filteredShows} />
      <Footer />
    </>
  );
}

export default App;
