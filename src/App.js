import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "./App.css";
import Filtro from "./components/filtros/Filtro";
import Cards from "./components/cards/Card";
import { useEffect, useState } from "react";

function App() {
  
  const [numPag, setNumPag] = useState(1);
  const [caracterInfo, setcaracterInfo] = useState([]);
  const { info, results } = caracterInfo;
  const api = `https://rickandmortyapi.com/api/character/?page=${numPag}`;

  useEffect(() => {
    (async function () {
      const data = await fetch(api).then((res) => res.json());
      setcaracterInfo(data);
    })();
  }, [api, setcaracterInfo]);

  return (
    <div className="App">
      <div className="row">
        <h1 className="logo text-center col-12 mt-4">Rick and Morty Wiki</h1>
      </div>

      <div className="row mt-4 p-4">
        <div className="col-3">
          <Filtro />
        </div>
        <div className="col-8">
          <div className="row">
            {results
              ? results.map((e, i) => (
                  <Cards key={e.id}  results={e} />
                ))
              : "Carregando"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;