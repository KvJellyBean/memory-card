import PropTypes from "prop-types";

function Scoreboard({ bestScore = 0, currentScore = 0 }) {
  return (
    <div className="scoreboard">
      <p>Best score: {bestScore}</p>
      <p>Current score: {currentScore}</p>
    </div>
  );
}

Scoreboard.propTypes = {
  bestScore: PropTypes.number,
  currentScore: PropTypes.number,
};

export default Scoreboard;
