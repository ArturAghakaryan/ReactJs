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
  gameVariant: null,
};

class Game extends React.Component {
  state = {
    ...initialState,
    InputOnePlayerRef: React.createRef(),
    InputTwoPlayerRef: React.createRef(),
    isError:false,
  };

  restartGame = () => {
    this.setState({
      ...initialState,
      isError:false
    });
  };

  sendName = (input) => {

    if(!input.current.value.trim()){
      console.log(this.state.isError)
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

  selectVariantGame = (variant) => {
    this.setState({
      gameVariant: variant,
    });
  };

  render() {
    const {
      gameVariant,
      InputOnePlayerRef,
      InputTwoPlayerRef,
      playerOneName,
      playerTwoName,
      isError,
    } = this.state;
    return (
      <div className="container">
        {gameVariant !== null && (
          <Button className="restart-game" onClick={this.restartGame}>
            Restart game
          </Button>
        )}
        {gameVariant === player.single && playerOneName !== null && (
          <GameOptions playerOneName={playerOneName} gameVariant={gameVariant}/>
        )}

        {gameVariant === player.multi &&
          playerOneName !== null &&
          playerTwoName !== null && (
            <GameOptions
              playerOneName={playerOneName}
              playerTwoName={playerTwoName}
              gameVariant={gameVariant}
            />
          )}

        <div className="select-game-variant">
          {gameVariant === null ? (
            <>
              <div className="select-game-variant__text">
                Please select your game variant !
              </div>
              <div className="select-game-variant__buttons">
                <Button
                  onClick={() => {
                    this.selectVariantGame(player.single);
                  }}
                >
                  One player
                </Button>
                <Button
                  onClick={() => {
                    this.selectVariantGame(player.multi);
                  }}
                >
                  Two player
                </Button>
              </div>
            </>
          ) : (
            <>
              {gameVariant === player.single && (
                <>
                  <div className="select-game-variant__text">
                    Please entrey your name ... !
                    {isError && (<span className="is-error">Name is required</span>)}
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

              {gameVariant === player.multi && (
                <>
                  {playerOneName === null && (
                    <>
                      <div className="select-game-variant__text">
                        Please entrey player one name ... !
                        {isError && (<span className="is-error">Name is required</span>)}
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
                      <div className="select-game-variant__text">
                        Please entrey player two name ... !
                        {isError && (<span className="is-error">Name is required</span>)}
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
