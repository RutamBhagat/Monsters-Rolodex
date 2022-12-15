import { useState, useEffect, ChangeEvent } from "react";
import "./App.css";
import CardList from "./Components/CardList/card-list.component";
import Input from "./Components/Input/input.component";
import { getData } from "./utils/data.utils";


export type Monster = {
  id: string,
  name: string,
  email: string,
}

const App = () => {
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<Monster[]>("https://jsonplaceholder.typicode.com/users")
      setMonsters(users)
    }
    fetchUsers()
  }, []);

  const onInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
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
