import React from "react";
import SingleShow from "./SingleShow";

const Shows = ({ shows, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <main>
      <h1>
        Popular Shows<div className="underline"></div>
      </h1>

      <section className="shows-container">
        {shows.map((show) => {
          return <SingleShow key={show.id} {...show} />;
        })}
      </section>
    </main>
  );
};
export default Shows;
