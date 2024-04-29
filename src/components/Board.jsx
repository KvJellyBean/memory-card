import PropTypes from "prop-types";
import Card from "./Card";
import { useState, useEffect } from "react";

function Board({ mode, pokemon, events }) {
  const [memory, setMemory] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      events.flipCard();
    }, 400);
  }, []);

  const changeMemory = (cardSize, newMemo) => {
    events.flipCard();
    const cards = document.querySelectorAll(".pokemonCard");

    // Check if the card is already clicked (Losing Condition)
    if (memory.includes(newMemo)) {
      setMemory([]);

      if (events.getBestScore < events.getCurrentScore) {
        events.changeBestScore(events.getCurrentScore);
      }
      events.changeStatus("lose");
      setMemory([]);

      cards.forEach((card) => (card.disabled = true));
      return;
    }
    const newMemory = [...memory, newMemo];
    setMemory(newMemory);
    events.changeCurrentScore(events.getCurrentScore + 1);

    // Check if its the end of the card (Winning Condition)
    if (memory.length === cardSize - 1) {
      events.changeCurrentScore(events.getCurrentScore + 1);

      if (events.getBestScore < events.getCurrentScore + 1) {
        events.changeBestScore(events.getCurrentScore + 1);
      }
      events.changeStatus("win");
      setMemory([]);

      cards.forEach((card) => (card.disabled = true));
      return;
    }
  };

  const randomizeCard = (cardSize, pokemon) => {
    return (
      <Card
        key={pokemon.id}
        pokemon={pokemon}
        order={Math.floor(Math.random() * cardSize)}
        cardSize={cardSize}
        changeMemory={changeMemory}
        isFlipped={events.getFlipCard}
      ></Card>
    );
  };

  return (
    <>
      <h2>
        Discover Pokémon without clicking the same card twice in this memory
        card adventure!
      </h2>

      <div className="board" style={{ display: "flex" }}>
        {mode === "easy" &&
          pokemon.map((poke) => {
            return poke.id <= 6 && randomizeCard(6, poke);
          })}

        {mode === "medium" &&
          pokemon.map((poke) => {
            return poke.id <= 12 && randomizeCard(12, poke);
          })}

        {mode === "hard" &&
          pokemon.map((poke) => {
            return poke.id <= 18 && randomizeCard(18, poke);
          })}
      </div>
    </>
  );
}

Board.propTypes = {
  mode: PropTypes.string.isRequired,
  pokemon: PropTypes.array.isRequired,
  events: PropTypes.object.isRequired,
};

export default Board;
