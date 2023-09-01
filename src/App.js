import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "./App.css";
import Filtro from "./components/filtros/Filtro";
import { useEffect, useState } from "react";
import Pagination from "./components/pagination/Pagination";
import Pesquisa from "./components/pesquisa/Pesquisa";
import Navbar from "./components/navbar/Navbar";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Episodios from './paginas/Episodios';
import Locais from './paginas/Locais';
import Card from "./components/cards/Card";

function App() {
  return(
    <Router>
      <div className="App">
        <Navbar/>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/episodios" element={<Episodios/>}/>
        <Route path="/locais" element={<Locais/>}/>
      </Routes>
    </Router>
  )
}

const Home = () => {
  
  const [numPag, setNumPag] = useState(1);
  const [caracterInfo, setcaracterInfo] = useState([]);
  const [caracter, setCaracter] = useState('');
  const [status, setStatus] = useState('');
  const [genero, setGenero] = useState('');
  const [especie, setEspecie] = useState('')

  const { info, results } = caracterInfo;

  const api = `https://rickandmortyapi.com/api/character/?page=${numPag}&name=${caracter}&status=${status}&gender=${genero}&species=${especie}`;

  useEffect(() => {
    (async function () {
      const data = await fetch(api).then((res) => res.json());
      setcaracterInfo(data);
    })();
  }, [api, setcaracterInfo]);

  return (
    <div className="App">
      <div className="row">
        <div className='text-center col-12 mt-4'>
          
        </div>
      </div>
      <div className="row text-center">
        <Pesquisa setNumPag={setNumPag} caracter={caracter} setCaracter={setCaracter}/>
      </div>

      <div className="conteudo row mt-4 p-4">
          <Filtro 
          setGenero={setGenero}
          setStatus={setStatus}
          setEspecie={setEspecie}
          setNumPag={setNumPag}
          />
        <div className="col-8">
          <div className="row">
            <Card results={results} setNumPag={setNumPag}/>
          </div>
        </div>
      </div>

      <div className="pagination">
        <Pagination info = {info} numPag = {numPag} setNumPag = {setNumPag}/>
      </div>
    </div>
  );
}

export default App;