import './App.css'
import { useState } from 'react';

function App() {
const [search, setsearch] = useState([]);
const [type, settype] = useState("");
const Api_Key = import.meta.env.VITE_API_KEY;
function Show (e) {
  e.preventDefault();
fetch(`https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(type)}&api_key=${Api_Key}`)
.then((res) => res.json())
.then((data) => setsearch(data.results || []))}

  return (
    <>
    <form onSubmit={Show}>
      <input value={type} onChange={(type) => settype(type.target.value)}></input>
      <button type="submit">Search</button>
    </form>

    {search.map((display) => (
      <div key={display.id}>
        <h2>{display.title}</h2>
        <h2>{display.vote_average}</h2>
       </div>
    ))}
    </>
  )
}

export default App
