import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import List from "./components/List";
import axios from "axios";

const App = () => {
  const baseURL = "https://free-nba.p.rapidapi.com/players";
  const KEY = "0454876f6fmsh87d8228bd6b38f6p11a927jsn415a09060863";
  const [players, setPlayers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("donovan");

  useEffect(() => {
    const onPlayerSearch = async (player) => {
      setIsLoading(true);
      const response = await axios.get(baseURL, {
        headers: {
          "x-rapidapi-key": KEY,
        },
        params: { search: player },
      });
      setPlayers(response.data);
      console.log(response.data);
      setIsLoading(false);
    };
    onPlayerSearch(query);
  }, [query]);

  return (
    <div>
      <div className="jumbotron">
        This is my NBA query App. Enter a name, and it'll return a list of
        anyone past or present that matches your query.
      </div>
      <SearchBar
        getQuery={(q) => {
          setQuery(q);
        }}
      />
      <List isLoading={isLoading} players={players} />
    </div>
  );
};

export default App;
