import React, { useState, useEffect } from "react";
import axios from "axios";
import Results from "./Components/Results/index";
function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/getdata").then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <>
      <Results data={data} />
    </>
  );
}

export default App;
