import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SeachBox from "./components/search-box/search-box-component";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
      this.setState(() => {
          return {
            monsters: users,
          };
        })
        );
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const { monsters, searchField } = this.state;
    const onSearchChange = this.onSearchChange;

    const monsterFilter = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    return (
      <div className="App">
      <h1 className="my-20 mb-12 text-7xl text-cyan-300 font-bold title-app">Monsters-Rolodex</h1>
        <SeachBox
        onChangeHandler={onSearchChange}
          placeholder="Seach Monster"
          className="monsters-seach-box"
        />
        <CardList monsters={monsterFilter} />
      </div>
    );
  }
}

export default App;
