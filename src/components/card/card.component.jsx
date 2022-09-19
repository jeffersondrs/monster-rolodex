import { Component } from "react";
import "../card-list/card-list.style.css";

class Card extends Component {
  render() {
    const { id, name, email } = this.props.monster;
    return (
      <div className="card-container flex flex-col cursor-pointer ease-in-out" key={id}>
        <img
          alt={`monster ${name}`}
          src={`https://robohash.org/${id}?set=set2&size=180x180`}
        />
        <h2 className="text-2xl font-bold">{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}

export default Card;