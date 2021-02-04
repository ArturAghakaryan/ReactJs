const choice = {
  paper: "paper",
  scissers: "scissers",
  rock: "rock",
};

const getGameResult = (
  playerOneChoice,
  playerTwoChoice,
  playerOneName,
  playerTwoName
) => {
  if (!playerOneChoice || !playerTwoChoice) {
    throw new Error("Choices are wrong");
  }

  if (playerOneChoice === playerTwoChoice) {
    return {
      text: "Draw",
      staus: 0,
    };
  }

  switch (playerOneChoice) {
    case choice.paper:
      if (playerTwoChoice === choice.rock) {
        return {
          text: playerOneName + " won",
          staus: 1,
        };
      } else {
        return {
          text: playerTwoName + " won",
          staus: 2,
        };
      }
    case choice.scissers:
      if (playerTwoChoice === choice.paper) {
        return {
          text: playerOneName + " won",
          staus: 1,
        };
      } else {
        return {
          text: playerTwoName + " won",
          staus: 2,
        };
      }
    case choice.rock:
      if (playerTwoChoice === choice.scissers) {
        return {
          text: playerOneName + " won",
          staus: 1,
        };
      } else {
        return {
          text: playerTwoName + " won",
          staus: 2,
        };
      }
    default:
      throw new Error("Wrong choices ...");
  }
};

export default getGameResult;
