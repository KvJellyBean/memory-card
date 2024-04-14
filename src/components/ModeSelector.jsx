import PropTypes from "prop-types";

function ModeSelector({ events }) {
  return (
    <form>
      <legend>Choose mode</legend>

      <div className="inputWrapper" onClick={() => events.changeMode("easy")}>
        <input
          type="radio"
          id="easyRadio"
          name="mode"
          value="easy"
          checked
          onChange={(e) => events.changeMode(e.target.value)}
        />
        <label htmlFor="easyRadio">Easy</label>
      </div>

      <div className="inputWrapper" onClick={() => events.changeMode("medium")}>
        <input
          type="radio"
          id="mediumRadio"
          name="mode"
          value="medium"
          onChange={(e) => events.changeMode(e.target.value)}
        />
        <label htmlFor="mediumRadio">Medium</label>
      </div>

      <div className="inputWrapper" onClick={() => events.changeMode("hard")}>
        <input
          type="radio"
          id="hardRadio"
          name="mode"
          value="hard"
          onChange={(e) => events.changeMode(e.target.value)}
        />
        <label htmlFor="hardRadio">Hard</label>
      </div>
    </form>
  );
}

ModeSelector.propTypes = {
  events: PropTypes.object.isRequired,
};
export default ModeSelector;
