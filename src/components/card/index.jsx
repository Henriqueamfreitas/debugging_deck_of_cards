import "./style.css";

export const Card = ({ card }) => {
  return <img src={card.image} alt={card.code} className="card" />;
};

