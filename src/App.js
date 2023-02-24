import "./App.css";
import { useState, useEffect } from "react";

import { useFetchShows } from "./components/useFetchShows";

import Header from "./components/Header";
import Shows from "./components/Shows";
import Footer from "./components/Footer";

function App() {
  const { loading, showsData } = useFetchShows();

  const [shows, setShows] = useState([]);

  const [page, setPage] = useState(0);

  const [filteredShows, setFilteredShows] = useState([]);

  const [search, setSearch] = useState("");

  useEffect(() => {
    if (loading) return;
    setShows(showsData[page]);
  }, [loading, page]);

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

  const handlePage = (index) => {
    setPage(index);
  };

  const nextPage = () => {
    setPage((currentPage) => {
      let nextPage = currentPage + 1;
      if (nextPage > showsData.length - 1) {
        nextPage = 0;
      }
      return nextPage;
    });
  };

  const prevPage = () => {
    setPage((currentPage) => {
      let prevPage = currentPage - 1;
      if (prevPage < 0) {
        prevPage = showsData.length - 1;
      }
      return prevPage;
    });
  };

  return (
    <>
      <Header onChange={searchHandler} />
      <Shows
        showList={shows}
        filteredShows={filteredShows}
        showsData={showsData}
        page={page}
        onClick={handlePage}
        nextPage={nextPage}
        prevPage={prevPage}
      />
      <Footer />
    </>
  );
}

export default App;
