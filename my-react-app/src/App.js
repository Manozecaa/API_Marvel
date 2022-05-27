import './App.css';
import Header from './components/Header.js';
import CharacterTable from './components/CharacterTable'
import axios from 'axios'
import React ,{useEffect,useState} from 'react'

const hash = "8311a75d85cca956181d371fca1c7a97"

function App() {
  const [itens,setItens] = useState([]);
  const [isLoading,setLoading] = useState(true);

  useEffect(()=>{
    const fetch = async()=>{
      const result = await axios(`http://gateway.marvel.com/v1/public/characters?ts=1&apikey=fc19807c7c27573c3dd76b3ea022e010&hash=${hash}`)
      console.log(result.data.data.results)
      setItens(result.data.data.results)
      setLoading(false)
    }

    fetch()
  },[hash])

  return (
    <div className="container">
      <Header/>
      <CharacterTable itens={itens} isLoading={isLoading} />
    </div>
  );
}

export default App;
