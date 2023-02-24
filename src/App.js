import "./App.css";
import { useState, useEffect } from "react";

// import { useFetchShows } from "./components/useFetchShows";

import Header from "./components/Header";
import Shows from "./components/Shows";
import Footer from "./components/Footer";
import Pagination from "./components/pagination";

function App() {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [showsPerPage, setShowsPerPage] = useState(12);

  const [search, setSearch] = useState("");
  const [filteredShows, setFilteredShows] = useState([]);

  //FETCH SHOWS
  useEffect(() => {
    const fetchShows = async () => {
      setLoading(true);
      const response = await fetch("http://api.tvmaze.com/shows");
      const showsData = await response.json();
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
    const filteredShows = shows.filter((show) => {
      return show.name.toLowerCase().includes(search);
    });
    setShows(filteredShows); // ??
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

// function App() {
//   const { loading, showsData } = useFetchShows();

//   const [shows, setShows] = useState([]);

//   const [page, setPage] = useState(0);

//   const [filteredShows, setFilteredShows] = useState([]);

//   const [search, setSearch] = useState("");

//

//   const nextPage = () => {
//     setPage((currentPage) => {
//       let nextPage = currentPage + 1;
//       if (nextPage > showsData.length - 1) {
//         nextPage = 0;
//       }
//       return nextPage;
//     });
//   };

//   const prevPage = () => {
//     setPage((currentPage) => {
//       let prevPage = currentPage - 1;
//       if (prevPage < 0) {
//         prevPage = showsData.length - 1;
//       }
//       return prevPage;
//     });
//   };

//   return (
//     <>
//       <Header onChange={searchHandler} />
//       <Shows
//         showList={shows}
//         filteredShows={filteredShows}
//         showsData={showsData}
//         page={page}
//         onClick={handlePage}
//         nextPage={nextPage}
//         prevPage={prevPage}
//       />
//       <Footer />
//     </>
//   );
// }
