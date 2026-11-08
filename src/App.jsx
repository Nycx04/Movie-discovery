import './App.css'
import { useState } from 'react';

function App() {
const [popular, setpopular] = useState([]);
const Api_Key = import.meta.env.VITE_API_KEY;
function Show (e) {
  e.preventDefault();
fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${Api_Key}`)
.then((res) => res.json())
.then((data) => setpopular(data.results || []))}
console.log(import.meta.env.VITE_API_KEY);
  return (
    <>
   <button onClick={Show}>Show popular</button>
   {popular.map((popularlist) => 
  <div key={popularlist.id}>
    <h3>{popularlist.title}</h3>
  </div>)}
    </>
  )
}

export default App
