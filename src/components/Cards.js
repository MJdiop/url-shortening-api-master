import './Cards.scss';

const Cards = ({ CardImg, CardTitle, CardBody }) => {
  return (
    <div className="Cards">
      <img src={CardImg} alt={CardImg} className="Card-img" />
      <div className="Card-title">{CardTitle}</div>
      <div className="Card-body">{CardBody}</div>
    </div>
  );
};

export default Cards;
