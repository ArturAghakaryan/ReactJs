import React from "react";
import ScoreBar from "../../../components/ScoreBar/ScoreBar";

import PaperIcon from "../../../icons/PaperIcon";
import ScissorsIcon from "../../../icons/ScissorsIcon";
import RockIcon from "../../../icons/RockIcon";
import Triangele from "../../../assests/Icon/triangle.svg";

import GameOption from "../../../components/GameOption/GameOption";
import getGameResult from "../../../utils/getGemaResult";
import Button from "../../../components/Button/Button";

import "./GameOptions.scss";

const choice = {
  paper: "paper",
  scissers: "scissers",
  rock: "rock",
};

const player = {
  single: "single",
  multi: "multi",
};

const optionsMap = {
  paper: {
    icon: PaperIcon,
    color: "#5671f5",
    boxShadow: "inset 0px 8px rgb(63 55 55 / 10%), 0px 8px #0e34f1",
  },
  scissers: {
    icon: ScissorsIcon,
    color: "#eca922",
    boxShadow: "inset 0px 8px rgb(63 55 55 / 10%), 0px 8px #b27c10",
  },
  rock: {
    icon: RockIcon,
    color: "#dd405d",
    boxShadow: "inset 0px 8px rgb(63 55 55 / 10%), 0px 8px #b21f3a",
  },
};

const initialState = {
  playerOneSelection: null,
  playerTwoSelection: null,
  gameVariant: null,
  isTimerOn: false,
  winnerText: null,
  winnerStatus: null,
  winner: null,
  timer: 3,
};

class GameOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
      playerOneScore: 0,
      playerTwoScore: 0,
      playerOneName: props.playerOneName,
      playerTwoName: props.playerTwoName ? props.playerTwoName : "Computer",
      gameVariant: props.gameVariant ?? null,
    };
  }

  restart = () => {
    this.setState({
      ...initialState,
      playerOneScore: this.state.playerOneScore,
      playerTwoScore: this.state.playerTwoScore,
      gameVariant: this.state.gameVariant,
    });
  };

  randomChoice = () => {
    const randomIndex = Math.floor(Math.random() * 3);
    const randomChoice = Object.keys(choice)[randomIndex];

    return randomChoice;
  };

  play = (selection) => {
    this.setState({
      isTimerOn: true,
      timer: 3,
    });

    let PlayerOneSelection = null;
    let PlayerTwoSelection = null;

    if (
      this.state.gameVariant === player.multi &&
      this.state.playerOneSelection
    ) {
      PlayerOneSelection = this.state.playerOneSelection;
      PlayerTwoSelection = selection;
    } else {
      this.setState({
        playerOneSelection: selection,
      });
    }

    if (this.state.gameVariant === player.single) {
      PlayerOneSelection = selection;
      PlayerTwoSelection = this.randomChoice();
    }

    if (PlayerOneSelection && PlayerTwoSelection) {
      const winner = getGameResult(
        PlayerOneSelection,
        PlayerTwoSelection,
        this.state.playerOneName,
        this.state.playerTwoName
      );
      this.setState({
        playerTwoSelection: PlayerTwoSelection,
        winner,
        winnerText: winner.text,
      });
    }
  };

  componentDidUpdate() {
    if (
      this.state.timer === 3 &&
      this.state.playerOneSelection &&
      this.state.playerTwoSelection
    ) {
      this.inervalId = setInterval(() => {
        if (this.state.timer === 1) {
          let scoreOne = this.state.playerOneScore;
          let scoreTwo = this.state.playerTwoScore;

          if (this.state.winner.staus === 1) {
            scoreOne += 1;
          } else if (this.state.winner.staus === 2) {
            scoreTwo += 1;
          }
          clearInterval(this.inervalId);
          this.setState({
            isTimerOn: false,
            winnerStatus: this.state.winner.staus,
            playerOneScore: scoreOne,
            playerTwoScore: scoreTwo,
          });
        } else {
          this.setState({
            timer: this.state.timer - 1,
          });
        }
      }, 1000);
    }

    if (
      this.state.timer === 3 &&
      this.state.playerOneSelection &&
      !this.state.playerTwoSelection &&
      this.state.gameVariant === player.multi
    ) {
      this.inervalId = setInterval(() => {
        if (this.state.timer === 1) {
          clearInterval(this.inervalId);
          this.setState({
            isTimerOn: false,
          });
        } else {
          this.setState({
            timer: this.state.timer - 1,
          });
        }
      }, 1000);
    }
  }

  componentWillUnmount() {
    clearInterval(this.inervalId);
  }

  render() {
    const {
      playerOneScore,
      playerTwoScore,
      playerOneName,
      playerTwoName,
      playerOneSelection,
      playerTwoSelection,
      isTimerOn,
      timer,
      winnerStatus,
      winnerText,
      gameVariant,
    } = this.state;
    return (
      <div className="container">
        <ScoreBar
          playerOneScore={playerOneScore}
          playerTwoScore={playerTwoScore}
          playerOneName={playerOneName}
          playerTwoName={playerTwoName}
        />
        <div className="game-options">
          <div className="game-options__container">
            {!playerOneSelection && (
              <div className="game-options__container-grid">
                <img src={Triangele} alt="triangle" />
                <GameOption
                  Icon={optionsMap[choice.paper].icon}
                  color={optionsMap[choice.paper].color}
                  boxShadow={optionsMap[choice.paper].boxShadow}
                  onClick={() => {
                    this.play(choice.paper);
                  }}
                />
                <GameOption
                  Icon={optionsMap[choice.scissers].icon}
                  color={optionsMap[choice.scissers].color}
                  boxShadow={optionsMap[choice.scissers].boxShadow}
                  onClick={() => {
                    this.play(choice.scissers);
                  }}
                />
                <GameOption
                  Icon={optionsMap[choice.rock].icon}
                  color={optionsMap[choice.rock].color}
                  boxShadow={optionsMap[choice.rock].boxShadow}
                  onClick={() => {
                    this.play(choice.rock);
                  }}
                />
              </div>
            )}
            {playerOneSelection &&
              !playerTwoSelection &&
              gameVariant === player.multi && (
                <>
                  {isTimerOn ? (
                    <div className="game-option__timer">
                      <div className="game-option">{timer}</div>
                    </div>
                  ) : (
                    <div className="game-options__container-grid">
                      <img src={Triangele} alt="triangle" />
                      <GameOption
                        Icon={optionsMap[choice.paper].icon}
                        color={optionsMap[choice.paper].color}
                        boxShadow={optionsMap[choice.paper].boxShadow}
                        onClick={() => {
                          this.play(choice.paper);
                        }}
                      />
                      <GameOption
                        Icon={optionsMap[choice.scissers].icon}
                        color={optionsMap[choice.scissers].color}
                        boxShadow={optionsMap[choice.scissers].boxShadow}
                        onClick={() => {
                          this.play(choice.scissers);
                        }}
                      />
                      <GameOption
                        Icon={optionsMap[choice.rock].icon}
                        color={optionsMap[choice.rock].color}
                        boxShadow={optionsMap[choice.rock].boxShadow}
                        onClick={() => {
                          this.play(choice.rock);
                        }}
                      />
                    </div>
                  )}
                </>
              )}

            {playerOneSelection && playerTwoSelection && (
              <>
                {gameVariant === player.single && (
                  <div className="game-option__items">
                    <div
                      className={`game-option__item ${
                        winnerStatus === 1 ? "item-winner" : ""
                      }`}
                    >
                      <span className="game-option__item-title">
                        {playerOneName} picked {playerOneSelection}
                      </span>
                      <div className="game-option__item-option">
                        <GameOption
                          Icon={optionsMap[playerOneSelection].icon}
                          color={optionsMap[playerOneSelection].color}
                          boxShadow={optionsMap[playerOneSelection].boxShadow}
                          onClick={() => {}}
                        />
                      </div>
                    </div>

                    {isTimerOn ? (
                      <div className="game-option__item item-timer">
                        <div className="game-option">{timer}</div>
                      </div>
                    ) : (
                      <>
                        <div className="game-option__item item-result">
                          <span>{winnerText}</span>
                          <Button onClick={this.restart}>Play again</Button>
                        </div>

                        <div
                          className={`game-option__item ${
                            winnerStatus === 2 ? "item-winner" : ""
                          }`}
                        >
                          <span className="game-option__item-title">
                            {playerTwoName} picked {playerTwoSelection}
                          </span>
                          <div className="game-option__item-option">
                            <GameOption
                              Icon={optionsMap[playerTwoSelection].icon}
                              color={optionsMap[playerTwoSelection].color}
                              boxShadow={
                                optionsMap[playerTwoSelection].boxShadow
                              }
                              onClick={() => {}}
                            />
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                )}

                {gameVariant === player.multi && (
                  <>
                    {isTimerOn ? (
                      <div className="game-option__timer">
                        <div className="game-option">{timer}</div>
                      </div>
                    ) : (
                      <div className="game-option__items">
                        <div
                          className={`game-option__item ${
                            winnerStatus === 1 ? "item-winner" : ""
                          }`}
                        >
                          <span className="game-option__item-title">
                            {playerOneName} picked {playerOneSelection}
                          </span>
                          <div className="game-option__item-option">
                            <GameOption
                              Icon={optionsMap[playerOneSelection].icon}
                              color={optionsMap[playerOneSelection].color}
                              boxShadow={
                                optionsMap[playerOneSelection].boxShadow
                              }
                              onClick={() => {}}
                            />
                          </div>
                        </div>
                        <div className="game-option__item item-result">
                          <span>{winnerText}</span>
                          <Button onClick={this.restart}>Play again</Button>
                        </div>
                        <div
                          className={`game-option__item ${
                            winnerStatus === 2 ? "item-winner" : ""
                          }`}
                        >
                          <span className="game-option__item-title">
                            {playerTwoName} picked {playerTwoSelection}
                          </span>
                          <div className="game-option__item-option">
                            <GameOption
                              Icon={optionsMap[playerTwoSelection].icon}
                              color={optionsMap[playerTwoSelection].color}
                              boxShadow={
                                optionsMap[playerTwoSelection].boxShadow
                              }
                              onClick={() => {}}
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default GameOptions;
