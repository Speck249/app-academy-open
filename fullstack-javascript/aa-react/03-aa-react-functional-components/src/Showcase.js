import "./Showcase.css";
import Bulbasaur from "./images/bulbasaur.jpg";

function Showcase() {
  const favPokemon = "Bulbasaur";
  const pokeCharacteristics = { type: "Grass", move: "Vine Whip" };
  
  return (
    <div className="background">
      <h1>{favPokemon}'s Showcase Component</h1>
      <img
        className="favoritePokemon"
        src={Bulbasaur}
        alt="My favorite pokemon Bulbasaur"
      />
      <h2>
        {favPokemon}'s type is{" "}
        <span className="firstSpan">{pokeCharacteristics.type}</span> and one of
        their moves is{" "}
        <span className="secondSpan">{pokeCharacteristics.move}</span>
      </h2>
    </div>
  );
}

export default Showcase;
