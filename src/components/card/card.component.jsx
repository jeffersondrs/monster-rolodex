import { Component } from "react";
import "../card-list/card-list.style.css";

class Card extends Component {
  render() {
    const { id, name, email } = this.props.monster;
    return (
      <div className="card-container flex flex-col items-center justify-center cursor-pointer ease-in-out w-full h-80" key={id}>
        <img
          className="bg-sky-400 rounded-full"
          alt={`monster ${name}`}
          src={`https://robohash.org/${id}?set=set2&size=180x180`}
        />
        <h2 className="text-2xl font-bold text-white">{name}</h2>
        <p className="text-white text-lg font-semibold">{email}</p>
      </div>
    );
  }
}

export default Card;