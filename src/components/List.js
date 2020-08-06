import React from "react";
import ListItem from "./ListItem";

const List = ({ players, isLoading }) => {
  //   const playerList = players.map((player) => {
  //     return <h1>{player.firstName}</h1>;
  //   });
  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <div>
      {players.data.map((player) => {
        return <ListItem player={player} key={player.id} />;
      })}
    </div>
  );
};

export default List;
