import PropTypes from "prop-types";

function GameDialog({ events }) {
  return (
    events.getStatus != "none" && (
      <div className="gameDialog">
        <h3>You {events.getStatus}</h3>
        <button
          className="playAgainBtn"
          type="button"
          onClick={() => {
            events.flipCard();
            events.changeCurrentScore(0);
            events.changeStatus("none");

            document
              .querySelectorAll(".pokemonCard")
              .forEach((card) => (card.disabled = false));
          }}
        >
          Play Again
        </button>
        <button
          className="backLobbyBtn"
          type="button"
          onClick={() => {
            events.changeCurrentScore(0);
            events.changeMode("none");
            events.changeStatus("none");

            document
              .querySelectorAll(".pokemonCard")
              .forEach((card) => (card.disabled = false));
          }}
        >
          Back To Lobby
        </button>
      </div>
    )
  );
}

GameDialog.propTypes = {
  events: PropTypes.object.isRequired,
};

export default GameDialog;
