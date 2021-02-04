import React from "react";

import "./ScoreBar.scss";

const ScoreBar = ({playerOneName,playerTwoName, playerOneScore, playerTwoScore }) => {
  return (
    <div className="score-bar">
      <div className="score-bar__inner">
        <div className="score-bar__scorebox">
          <span className="score-bar__scorebox-player-name">
            {playerOneName}
          </span>
          <span>SCORE</span>
          <span className="score-bar__scorebox-count">{playerOneScore}</span>
        </div>
        <div className="score-bar__title">
          ROCK
          <br />
          PAPER
          <br />
          SCISSORS
        </div>
        <div className="score-bar__scorebox">
          <span className="score-bar__scorebox-player-name">
            {playerTwoName}
          </span>
          <span>SCORE</span>
          <span className="score-bar__scorebox-count">{playerTwoScore}</span>
        </div>
      </div>
    </div>
  );
};

export default ScoreBar;
