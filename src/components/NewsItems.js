// import { getByTitle } from '@testing-library/react'
import React from "react";

const NewsItems = (props) => {
  let { title, description, imageUrl, butt, author, date, Source } = props;
  let altimg = "https://bitsofco.de/content/images/2018/12/broken-1.png";

  return (
    <div className="my-6">
      <div className="card">
        <span
          className=" badge rounded-pill bg-danger"
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          {Source}
        </span>

        <img
          src={imageUrl ? imageUrl : altimg}
          className="card-img-top"
          alt="https://img.freepik.com/premium-vector/modern-minimal-found-error-icon-oops-page-found-404-error-page-found-with-concept_599740-716.jpg?w=1060"
        />

        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <a
            href={butt}
            target="_blank"
            rel="noreferrer"
            className="btn  btn-sm btn-primary"
          >
            Read more
          </a>
          <p className="card-text">
            <small className="text-muted">
              by {author ? author : "anonymus"} - on{" "}
              {new Date(date).toGMTString().slice(0, 17)}{" "}
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsItems;
