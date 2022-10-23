import { useState, useEffect } from "react";
import "./App.css";
import CardList from "./Components/CardList/card-list.component";
import Input from "./Components/Input/input.component";

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [input, setInput] = useState("");
  console.log("rendered")

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setMonsters(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <div className="App">
      <h1 className="text-white my-8 App-Name text-center">Monsters Rolodex</h1>
      <Input onInputChange={onInputChange} placeholder={"Search Monsters"} />
      <CardList monsters={monsters} input={input}/>
    </div>
  );
};

export default App;
