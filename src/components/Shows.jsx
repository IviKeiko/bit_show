import React from "react";
import SingleShow from "./SingleShow";

import { useFetchShows } from "./useFetchShows";

const Shows = ({ showList, showsData, page, onClick, nextPage, prevPage }) => {
  const { loading } = useFetchShows();

  return (
    <>
      <main>
        <h1>
          Popular Shows<div className="underline"></div>
        </h1>

        <section className="shows-container">
          {showList.map((show) => {
            return <SingleShow key={show.id} {...show} />;
          })}
        </section>
      </main>
      {!loading && (
        <div className="btn-container">
          <button className="prev-btn" onClick={prevPage}>
            Prev
          </button>
          {showsData.map((item, index) => {
            return (
              <button
                key={index}
                className={`pg-btn ${index === page ? "active-btn" : null}`}
                onClick={() => onClick(index)}
              >
                {index + 1}
              </button>
            );
          })}
          <button className="next-btn" onClick={() => nextPage()}>
            Next
          </button>
        </div>
      )}
    </>
  );
};

export default Shows;
