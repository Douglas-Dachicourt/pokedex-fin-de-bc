import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const SpecificType = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const params = useParams();
  const type = params.type;

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/type/${type}`
      );
      console.log(response.data);
      setData(response.data);
      setIsLoading(false);
    };

    fetchData();
  }, [type]);

  return isLoading ? (
    <p>Chargement ...</p>
  ) : (
    <>
      <div className="main-title">
        <h1>Type : {data.name}</h1>
      </div>
      <section className="container mainsection">
        {data.pokemon.map((pokemon) => {
          //   console.log(data);
          console.log(pokemon);

          const index = pokemon.pokemon.url.substring(34).replace("/", "");
          //   console.log(index);
          return (
            <Link
              to={"/pokemon/" + pokemon.pokemon.name}
              key={pokemon.name}
              className="nodecoration"
            >
              <article className="survol">
                <p>{pokemon.pokemon.name}</p>
                <img
                  className="pokemon-size"
                  src={
                    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
                    index +
                    ".png"
                  }
                  alt=""
                />
              </article>
            </Link>
          );
        })}
      </section>
    </>
  );
};

export default SpecificType;
