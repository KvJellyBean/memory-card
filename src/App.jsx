import Header from "./components/Header";
import MainPage from "./components/MainPage";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

function App() {
  const [pokemon, setPokemon] = useState();
  const url = "https://pokeapi.co/api/v2/pokemon";

  // Fetch data for pokemon from Poke api
  const fetchData = async () => {
    let newPokemonData = [];
    const data = await fetch(url);
    const parsedData = await data.json();

    parsedData.results.forEach(async (result) => {
      const pokemonData = await fetchPokemonData(result);
      newPokemonData.push({
        id: pokemonData.id,
        name: pokemonData.name,
        image: pokemonData.sprites.front_default,
      });
    });

    setPokemon(newPokemonData);
  };

  // Fetch the specific pokemon's data
  const fetchPokemonData = async (data) => {
    const pokemonData = await fetch(data.url);
    return await pokemonData.json();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header></Header>
      <MainPage pokemon={pokemon}></MainPage>
      <Footer></Footer>
    </>
  );
}

export default App;
