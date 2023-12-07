import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Type = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://pokeapi.co/api/v2/type");
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
    <p>Chargement...</p>
  ) : (
    <>
      <div className="main-title">
        <h1>Types</h1>
      </div>

      <section className="container typelist">
        {data.results.map((type) => {
          // console.log(type.name);
          return (
            <Link
              to={"/type/" + type.name}
              className="type survoltype"
              key={type.name}
            >
              {type.name}
            </Link>
          );
        })}
      </section>
    </>
  );
};

export default Type;
