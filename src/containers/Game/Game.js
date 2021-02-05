import React from "react";

import Button from "../../components/Button/Button";
import GameOptions from "./GameOptions/GameOptions";

import "./Game.scss";
import Input from "../../components/Input/Input";

const player = {
  single: "single",
  multi: "multi",
};

const initialState = {
  playerOneName: null,
  playerTwoName: null,
  gameMode: null,
};

class Game extends React.Component {
  state = {
    ...initialState,
    InputOnePlayerRef: React.createRef(),
    InputTwoPlayerRef: React.createRef(),
    isError: false,
  };

  restartGame = () => {
    this.setState({
      ...initialState,
      isError: false,
    });
  };

  sendName = (input) => {
    if (!input.current.value.trim()) {
      console.log(this.state.isError);
      return this.setState({
        isError: true,
      });
    }

    if (this.state.playerOneName === null) {
      this.setState({
        playerOneName: input.current.value,
        isError: false,
      });
    } else {
      this.setState({
        playerTwoName: input.current.value,
        isError: false,
      });
    }
  };

  selectModeGame = (mode) => {
    this.setState({
      gameMode: mode,
    });
  };

  render() {
    const {
      gameMode,
      InputOnePlayerRef,
      InputTwoPlayerRef,
      playerOneName,
      playerTwoName,
      isError,
    } = this.state;
    return (
      <div className="container">
        {gameMode !== null && (
          <Button className="restart-game" onClick={this.restartGame}>
            Restart game
          </Button>
        )}
        {gameMode === player.single && playerOneName !== null && (
          <GameOptions
            playerOneName={playerOneName}
            gameMode={gameMode}
          />
        )}

        {gameMode === player.multi &&
          playerOneName !== null &&
          playerTwoName !== null && (
            <GameOptions
              playerOneName={playerOneName}
              playerTwoName={playerTwoName}
              gameMode={gameMode}
            />
          )}

        <div className="select-game-mode">
          {gameMode === null ? (
            <>
              <div className="select-game-mode__text">
                Please, select your game mode!
              </div>
              <div className="select-game-mode__buttons">
                <Button
                  onClick={() => {
                    this.selectModeGame(player.single);
                  }}
                >
                  One player
                </Button>
                <Button
                  onClick={() => {
                    this.selectModeGame(player.multi);
                  }}
                >
                  Two player
                </Button>
              </div>
            </>
          ) : (
            <>
              {gameMode === player.single && (
                <>
                  <div className="select-game-mode__text">
                    Please, enter your name!
                    {isError && (
                      <span className="is-error">Name is required</span>
                    )}
                  </div>
                  <div>
                    <Input
                      type="text"
                      inputRef={InputOnePlayerRef}
                      placeholder="Your name"
                      error={isError}
                    />
                    <Button
                      onClick={() => {
                        this.sendName(InputOnePlayerRef);
                      }}
                    >
                      Send
                    </Button>
                  </div>
                </>
              )}

              {gameMode === player.multi && (
                <>
                  {playerOneName === null && (
                    <>
                      <div className="select-game-mode__text">
                        Please, enter player one name!
                        {isError && (
                          <span className="is-error">Name is required</span>
                        )}
                      </div>
                      <div>
                        <Input
                          type="text"
                          inputRef={InputOnePlayerRef}
                          placeholder="Your name"
                          error={isError}
                        />
                        <Button
                          onClick={() => {
                            this.sendName(InputOnePlayerRef);
                          }}
                        >
                          Send
                        </Button>
                      </div>
                    </>
                  )}

                  {playerOneName !== null && playerTwoName === null && (
                    <>
                      <div className="select-game-mode__text">
                        Please, enter player two name!
                        {isError && (
                          <span className="is-error">Name is required</span>
                        )}
                      </div>
                      <div>
                        <Input
                          type="text"
                          inputRef={InputTwoPlayerRef}
                          placeholder="Your name"
                          error={isError}
                        />
                        <Button
                          onClick={() => {
                            this.sendName(InputTwoPlayerRef);
                          }}
                        >
                          Send
                        </Button>
                      </div>
                    </>
                  )}
                </>
              )}
            </>
          )}
        </div>
      </div>
    );
  }
}

export default Game;
