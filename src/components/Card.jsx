import Tilt from "react-parallax-tilt";
import PropTypes from "prop-types";

function Card({ pokemon, order, cardSize, changeMemory, isFlipped }) {
  return (
    <Tilt
      glareEnable={true}
      tiltMaxAngleX={20}
      tiltMaxAngleY={20}
      perspective={1000}
      glareColor={"rgb(199,0,0)"}
      glarePosition="all"
      scale={1.1}
      style={{ order: order }}
      className={isFlipped ? "tilt flip" : "tilt"}
    >
      <button
        className="pokemonCard"
        onClick={() => changeMemory(cardSize, pokemon)}
      >
        <img src={pokemon.image} alt={pokemon.name} />
        <h3>{pokemon.name}</h3>
      </button>
      <div className="backCard">
        <img src="/pokemonBackcard.png" alt={pokemon.name + " back card"} />
      </div>
    </Tilt>
  );
}

Card.propTypes = {
  pokemon: PropTypes.object.isRequired,
  order: PropTypes.number,
  cardSize: PropTypes.number.isRequired,
  changeMemory: PropTypes.func.isRequired,
  isFlipped: PropTypes.bool.isRequired,
};

export default Card;
