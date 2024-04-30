import { useState } from "react";
import PropTypes from "prop-types";
import Scoreboard from "./Scoreboard";
import Board from "./Board";
import ModeSelector from "./ModeSelector";
import GameDialog from "./GameDialog";
import "../styles/MainPage.css";

function MainPage({ pokemon }) {
  const [mode, setMode] = useState("none");
  const [status, setStatus] = useState("none");
  const [bestScore, setBestScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [isFlipped, setFlipped] = useState(true);

  const eventHandler = (() => {
    const changeMode = (newMode) => {
      setMode(newMode);
    };

    const changeStatus = (newStatus) => {
      setStatus(newStatus);
    };

    const changeBestScore = (newScore) => {
      setBestScore(newScore);
    };

    const changeCurrentScore = (newScore) => {
      setCurrentScore(newScore);
    };

    const flipCard = () => {
      setTimeout(() => {
        setFlipped(false);
      }, 400);
      setFlipped(true);
    };

    const getStatus = status;
    const getCurrentScore = currentScore;
    const getBestScore = bestScore;
    const getFlipCard = isFlipped;

    return {
      changeMode,
      changeStatus,
      changeBestScore,
      changeCurrentScore,
      flipCard,
      getStatus,
      getCurrentScore,
      getBestScore,
      getFlipCard,
    };
  })();
  return (
    <main>
      {/* Lobby */}
      {mode == "none" && <ModeSelector events={eventHandler}></ModeSelector>}

      {/* Board Game */}
      {mode != "none" && (
        <>
          {/* Scoreboard */}
          <Scoreboard
            bestScore={bestScore}
            currentScore={currentScore}
          ></Scoreboard>

          <Board mode={mode} pokemon={pokemon} events={eventHandler}></Board>
          <button
            type="button"
            className="exitButton"
            onClick={() => {
              eventHandler.changeMode("none");
              eventHandler.changeCurrentScore(0);
            }}
          >
            Exit
          </button>

          <GameDialog events={eventHandler}></GameDialog>
        </>
      )}
    </main>
  );
}

MainPage.propTypes = {
  pokemon: PropTypes.array,
};

export default MainPage;
