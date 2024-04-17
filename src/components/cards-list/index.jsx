import { useState } from "react";
import { Card } from "../card";
import "./style.css";

export const CardsList = ({ cardsList }) => {
  const [suitFilter, setSuitFilter] = useState(false);
  const [filter, setFilter] = useState("")

  const [filteredList, setFilteredList] = useState([])

  const handleSuitFilter = (e) => {
      if((filter === e.target.id)){
        e.target.checked = false
        setFilteredList(cardsList)
        return setFilter(null)
      }
      setSuitFilter(true)
      setFilteredList(cardsList.filter((actual) => actual.suit === e.target.id))
      setFilter(e.target.id)
  };

  return (
    <>
      <div className="filter-container">
        <p>Filtrar por naipe</p>
        <div>
          <input
            onClick={handleSuitFilter}
            type="radio"
            id="SPADES"
            name="suit"
          />
          <label htmlFor="SPADES">Espadas</label>

          <input
            onClick={handleSuitFilter}
            type="radio"
            id="HEARTS"
            name="suit"
          />
          <label htmlFor="HEARTS">Copas</label>

          <input
            onClick={handleSuitFilter}
            type="radio"
            id="CLUBS"
            name="suit"
          />
          <label htmlFor="CLUBS">Paus</label>

          <input
            onClick={handleSuitFilter}
            type="radio"
            id="DIAMONDS"
            name="suit"
          />
          <label htmlFor="DIAMONDS">Ouros</label>
        </div>
      </div>

      <div>

        {
          !suitFilter ?
          cardsList?.map((actual, index) => {
            return <Card card={actual} key={index} />;
          }):
          null
        }

        {
          suitFilter?
          filteredList.map((card, index) => {
            return <Card card={card} key={index} ></Card>
          }):
          null
        }
      </div>
    </>
  );
};

