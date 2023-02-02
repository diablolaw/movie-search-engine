import React from "react";
import { useState } from "react";
import "./SearchBar.css";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideoSlash } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  console.log(input);

  function movieInfo(movieTitle) {
    navigate(`/movie/${movieTitle}`);
  }

  return (
    <form className="search">
      <div className="searchPage__header">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1 className="header_text">
            <FontAwesomeIcon icon={faVideoSlash} /> Bloo Movie
          </h1>
        </Link>
      </div>
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input
          className="inputbox"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>

      <div className="search__buttons">
        <Button
          type="submit"
          variant="outlined"
          onClick={() => movieInfo(input)}
        >
          Search a Movie
        </Button>
      </div>
    </form>
  );
};

export default SearchBar;
