import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Pokemons = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?limit=24"
        );
        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);

  return isLoading ? (
    "Chargement ... "
  ) : (
    <>
      <div className="main-title">
        <h1>Pokemons</h1>
      </div>
      <section className="container mainsection">
        {data.results.map((pokemon, index) => {
          // console.log(pokemon);
          return (
            <Link
              to={"/pokemon/" + pokemon.name}
              key={pokemon.name}
              className="nodecoration"
            >
              <article className="survol">
                <p>{pokemon.name}</p>
                <img
                  className="pokemon-size"
                  src={
                    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
                    (index + 1) +
                    ".png"
                  }
                  alt="pokemon"
                />
              </article>
            </Link>
          );
        })}
      </section>
    </>
  );
};

export default Pokemons;
