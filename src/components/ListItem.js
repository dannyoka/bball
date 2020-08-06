import React from "react";

const ListItem = ({ player }) => {
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">
            {player.first_name} {player.last_name}
          </h5>
          <p className="card-text">{`${player.first_name} plays for the ${player.team.abbreviation}`}</p>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
