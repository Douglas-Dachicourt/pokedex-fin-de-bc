import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const Pokemon = () => {
  const params = useParams();
  const name = params.name;
  //   console.log(name);
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${name}`
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [name]);

  return isLoading ? (
    <h3 className="loading">Chargement ...</h3>
  ) : (
    <>
      <div>
        <h1 className="main-title">Pokemon</h1>
      </div>
      <section className="container poke-info">
        <article>
          <h1>{data.name}</h1>
          <img
            src={data.sprites.front_default}
            alt="pokemon view"
            className="pokemon-size"
          />
        </article>
        <div>
          <div>
            {data.types.map((type, index) => {
              if (type.slot) {
                return (
                  <Link
                    to={"/type/" + type.type.name}
                    key={index}
                    className="maintypes"
                  >
                    <p>{type.type.name}</p>
                  </Link>
                );
              }
              // console.log(type);
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Pokemon;
