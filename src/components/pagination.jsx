import React from "react";

const Pagination = ({ showsPerPage, totalShows, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalShows / showsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="btn-container">
      {pageNumbers.map((number) => (
        <button
          key={number}
          className={`pg-btn ${currentPage === number ? "active-btn" : null}`}
          onClick={() => paginate(number)}
        >
          {number}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
