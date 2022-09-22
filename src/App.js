import CardList from "./components/card-list/card-list.component";
import SeachBox from "./components/search-box/search-box-component";
import "./App.css";
import { useState, useEffect } from "react";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };
  const monsterFilter = monsters.filter((monster) => {
    return monster.name.toLowerCase().includes(searchField);
  });

  return (
    <div className="App">
      <h1 className="my-20 mb-12 text-7xl text-cyan-300 font-bold title-app">
        Monsters-Rolodex
      </h1>

      <SeachBox
        onChangeHandler={onSearchChange}
        placeholder="Seach Monster"
        className="monsters-seach-box"
      />
      <CardList monsters={monsterFilter} />
    </div>
  );
};
export default App;
