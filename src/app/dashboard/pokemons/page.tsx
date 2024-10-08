import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";

const getPokemons = async (
  limit = 20,
  offset = 0
): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((res) => res.json());
  const pokemons = data.results.map((e) => ({
    id: e.url.split("/").at(-2)!,
    name: e.name,
  }));
  return pokemons;
};
const PokemonPage = async () => {
  const pokemons = await getPokemons(151);
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Listado de Pokémons <small>estático</small>
      </span>
      <PokemonGrid pokemons={pokemons} />
    </div>
  );
};

export default PokemonPage;
