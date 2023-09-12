import { useState, useEffect } from "react";
import { Card } from "./components/card/card.jsx";
import { Default } from "./components/default/default.jsx";

export function App() {

  const [loaded, load] = useState(0)
  const url = "https://raw.githubusercontent.com/luancarvalho7/apiMovies/main/data.json"
  const [data, setData] = useState([])

  function fetchData() {
    fetch(url)
      .then(response => response.json())
      .then(data => setData(data))
  }

  useEffect(() => {
    if (loaded == 0) {
      fetchData() 
      load(1)
    }
    console.log(loaded)
  }, [])

  return (
    <>
      <header><span className="heroTransition"></span></header>
      <main>
        <div className="heading">
          <h1 className="grandTitle">API Movies</h1>
          <div className="currentPage">Current</div>
        </div>
        <div className="displayedData">
          <Default
            data={data} />
        </div>
      </main>

    </>
  );
}
