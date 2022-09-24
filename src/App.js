import CardList from "./components/card-list/card-list.component";
import SeachBox from "./components/search-box/search-box-component";
import "./App.css";
import { useState, useEffect } from "react";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filterMonsters, setFilterMonsters] = useState(monsters);
  console.log('render');
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);
  useEffect(() => {
    const filterMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });
    setFilterMonsters(filterMonsters)
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="my-20 mb-12 text-7xl text-cyan-300 font-bold title-app">
        Monsters-Rolodex
      </h1>

      <SeachBox
        onChangeHandler={onSearchChange}
        placeHolder="Seach Monster"
        className="monsters-seach-box"
      />
      <CardList monsters={filterMonsters} />
    </div>
  );
};
export default App;
