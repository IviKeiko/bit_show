import React from "react";
import { useState } from "react";

const SingleShow = ({ ...show }) => {
  const { image, name, averageRuntime, language, premiered, summary } = show;
  const [moreInfo, setMoreInfo] = useState(false);

  const onClickHandler = () => {
    setMoreInfo(!moreInfo);
  };
  const buttonText = moreInfo ? "show less" : "show more";
  return (
    <article>
      <div>
        {moreInfo ? (
          <div className="single-show">
            <p className="description">
              <span>Language:</span> {language}
            </p>
            <p className="description">
              <span>Rating:</span> {show.rating.average}
            </p>
            <p className="description">
              <span>Runtime:</span> {averageRuntime} min
            </p>
            <p className="description">
              <span>Premiered:</span> {premiered}
            </p>
            <p className="description">
              <span>Summary: </span>
              {summary.replace(/<p>|<\/p>|<b>|<\/b>/gi, "")}
            </p>
            <button onClick={onClickHandler}>{buttonText}</button>
          </div>
        ) : (
          <div className="single-show">
            <img src={image.medium} alt={name} />
            <p className="title">{name}</p>
            <button onClick={onClickHandler}>{buttonText}</button>
          </div>
        )}
      </div>
    </article>
  );
};
export default SingleShow;
