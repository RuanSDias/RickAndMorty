import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import "./App.css"
import Filtro from "./components/filtros/Filtro";
import Cards from "./components/cards/Cards";
import { useEffect, useState } from "react";

function App() {

  const [numPag, setNumPag] = useState(1);
  const [caracterInfo, setcaracterInfo] = useState([]);
  const { info, results } = caracterInfo;
  const api = `https://rickandmortyapi.com/api/character/?page=${numPag}`;

  useEffect(() => {(
    async function() {
      const data = await fetch(api).then((res) => res.json());
      setcaracterInfo(data);
    })();
  }, [api])

  return (
    <div className="App">
      <h1 className="logo">Rick and Morty Wiki</h1>

      <div className="grid-container">
          <div className="">
            <Filtro/>
          </div>
          <div className="">
            <div className="">
              <Cards results={results}/>
              <Cards results={results}/>
              <Cards results={results}/>
            </div>
          </div>
      </div>
    </div>
    
  );
}

export default App;
