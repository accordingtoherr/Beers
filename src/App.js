import React, {useEffect, useState, Component} from 'react';
import './App.css';
import Beer from './Beer.js';




const App = () => {

const App_Key = "b1322de05886eaf6bdd71b64c52d12b7"

const [beers, setBeers] = useState([]);
const [search, setSearch] = useState("");
const [query, setQuery] = useState('dogs')

useEffect (() => {
getBeers();

}, [query]);

const getBeers = async () => {
const response = await fetch(`https://api.openbrewerydb.org/breweries/search?query=${query}`);
const data = await response.json();
console.log(data.beers);
setBeers(data);



}




const updateSearch = e => {
setSearch(e.target.value);
console.log(search);

}


const getSearch = e => {
  e.preventDefault();
  setQuery(search);
  setSearch =("");
  
  }

  return(
    <div className="App">

  <h1 className="typesofbeer">Types of Beer</h1>
      <form>
        <input type="text" ></input>
        <button type="submit" value={search} onChange={updateSearch}>Search</button>
      </form>

      {beers.map(beers =>


(<Beer 

title={beers.name}
city={beers.city}
type={beers.brewery_type}
web={beers.website_url}
/> )) }

    </div>

  );
};






export default App;
