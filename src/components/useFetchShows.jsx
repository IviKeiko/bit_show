import { useState, useEffect } from "react";
import paginate from "./pagination";

const url = "http://api.tvmaze.com/shows";

export const useFetchShows = () => {
  const [loading, setLoading] = useState(true);
  const [showsData, setShowsData] = useState([]);

  const getShows = async () => {
    const response = await fetch(url);
    const showsData = await response.json();

    setShowsData(paginate(showsData));
    setLoading(false);
  };

  useEffect(() => {
    getShows();
  }, []);
  return { loading, showsData };
};
