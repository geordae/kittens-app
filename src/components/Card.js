import React, { Component } from "react";
import CardList from "./CardList";
import { SearchBox } from "./SearchBox";

class Card extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ""
    };
  }

  async componentDidMount() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");

    const users = await res.json();

    this.setState({
      monsters: users
    });
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;

    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div>
        <h1>Cat Rolodex</h1>
        <SearchBox
          placeholder="Search Monsters"
          handleChange={this.handleChange}
        />

        <div>
          <CardList monsters={filteredMonsters} />
        </div>
      </div>
    );
  }
}

export default Card;
