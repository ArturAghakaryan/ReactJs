import React from "react";

import PropTypes from "prop-types";

import "./GameOption.scss";

const GameOption = ({ Icon, color, boxShadow, onClick = () => {} }) => {
  return (
    <div
      className="game-option"
      style={{ borderColor: color, boxShadow: boxShadow }}
      onClick={onClick}
    >
      <div className="game-option__icon-container">
        <Icon />
      </div>
    </div>
  );
};

GameOption.propTypes = {
  Icon: PropTypes.any.isRequired,
  color: PropTypes.string.isRequired,
  boxShadow: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default GameOption;
