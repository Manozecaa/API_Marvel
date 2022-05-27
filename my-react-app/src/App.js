import './App.css';
import Header from './components/Header.js';
import axios from 'axios'
import React ,{useEffect,useState} from 'react'

const hash = "a71b6211a73e6a71eecfabad2a2ee96d"

function App() {
  const [itens,setItens] = useState([]);
  const [isLoading,setLoading] = useState(true);

  useEffect(()=>{
    const fetch = async()=>{
      const result = await axios(`http://gateway.marvel.com/v1/public/comics?ts=1&apikey=9ca994b93d1c495e744e263ff85ff51c&hash=${hash}`)
      console.log(result.data.data.results)
      setItens(result.data.data.results)
      setLoading(false)
    }

    fetch()
  },[hash])

  return (
    <div className="container">
      <Header/>
    </div>
  );
}

export default App;
