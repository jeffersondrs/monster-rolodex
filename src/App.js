import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SeachBox from "./components/search-box/search-box-component";
import TextParagrathy from "./components/text-p/text-component-p";
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
        <SeachBox
        onChangeHandler={onSearchChange}
          placeholder="Seach Monster"
          className="monsters-seach-box"
        />
        <CardList monsters={monsterFilter} />
        <TextParagrathy />
      </div>
    );
  }
}

export default App;
