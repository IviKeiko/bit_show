import React from "react";
import SingleShow from "./SingleShow";

const Shows = ({ showList }) => {
  return (
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
  );
};

export default Shows;
