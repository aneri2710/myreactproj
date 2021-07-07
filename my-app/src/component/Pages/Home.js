import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
const Home = () => {
  return (
    <>
      <div className="jumbotron">
        <h1 className="display-4">Hacker News Search App</h1>
        <hr className="my-4" />
        <p className="lead">
        An application to search from HN search API
        </p>

        <p>
          “/search” lets the user search the Hacker News Algolia API and
          displays a list of results <b>https://hn.algolia.com/api</b>{" "}
        </p>
        <p>
          “/history” shows the users a list of their past searches from this
          session (these do not need to persist through refresh).
        </p>
        <div className="spacing">
          <Link
            className="btn btn-dark btn-lg"
            role="button"
            exact
            to="/search"
          >
            Search
          </Link>
          <Link
            className="btn btn-dark btn-lg space-button-history"
            role="button"
            exact
            to="/history"
          >
            History
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
