import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import shortid from "shortid";

const List = ({ handleInfo }) => {
  const [names, setNames] = useState([]);
  const [chosen, setChosen] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_INITIAL_URL}users.json`)
      .then(res => setNames(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleChosen = (id, name) => {
    setChosen(id);
    handleInfo(id, name);
  };

  return (
    <div className="ui basic segment">
      <div className="ui vertical menu">
        {names.map(({ id, name }) => (
          <div
            className={`link item ${id === chosen ? "active" : ""}`}
            key={shortid.generate()}
            onClick={() => handleChosen(id, name)}
          >
            <div className="content">
              <div className="header">{name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

List.propTypes = {
  handleInfo: PropTypes.func.isRequired
};

export default List;
