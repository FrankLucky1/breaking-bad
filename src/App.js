import React, {useState, useEffect} from 'react';
import axios from 'axios'
import Header from "./component/ui/Header"
import Card from "./component/card"
import SearchBox from './component/ui/search';
import './App.css';

function App() {
  const [items, setItems]= useState([])
  const [loading, setLoading]= useState(true)
  const [getInput, setGetInput]= useState("")

  useEffect(()=>{
    const fetchItems= async ()=>{
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${getInput}`)
      /*console.log(result.data)*/
      setItems(result.data)
      setLoading(false)
    };
     fetchItems();
  }, [getInput])




  return (
    <div className="container">
    <Header/>
    <SearchBox getQuery={(q)=>{setGetInput(q)}}/>
    <Card loading = {loading} items={items}/>
    </div>
  );
}

export default App;
