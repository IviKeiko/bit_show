import "./App.css";
import { useState, useEffect } from "react";

// import { useFetchShows } from "./components/useFetchShows";

import Header from "./components/Header";
import Shows from "./components/Shows";
import Footer from "./components/Footer";
import Pagination from "./components/pagination";

function App() {
  const [defaultShows, setDefaultShows] = useState([]);
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [showsPerPage, setShowsPerPage] = useState(12);

  const [search, setSearch] = useState("");

  //FETCH SHOWS
  useEffect(() => {
    const fetchShows = async () => {
      setLoading(true);
      const response = await fetch("https://api.tvmaze.com/shows");
      const showsData = await response.json();
      setDefaultShows(showsData);
      setShows(showsData);
      setLoading(false);
    };

    fetchShows();
  }, []);

  //GET CURRENT SHOWS
  const indexOfLastShow = currentPage * showsPerPage;
  const indexOfFirstShow = indexOfLastShow - showsPerPage;
  const currentShows = shows.slice(indexOfFirstShow, indexOfLastShow);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  //SEARCH
  useEffect(() => {
    const filteredShows = defaultShows.filter((show) => {
      return show.name.toLowerCase().includes(search);
    });

    setCurrentPage(1);

    if (search.length === 0) {
      setShows(defaultShows);
      console.log(defaultShows);
    } else {
      setShows(filteredShows);
    }
  }, [search]);

  const searchHandler = (e) => {
    const searchValue = e.target.value;

    setSearch(searchValue);
  };

  return (
    <div>
      <Header onChange={searchHandler} />
      <Shows shows={currentShows} loading={loading} />
      <Pagination
        showsPerPage={showsPerPage}
        totalShows={shows.length}
        paginate={paginate}
        currentPage={currentPage}
      />
      <Footer />
    </div>
  );
}
export default App;
