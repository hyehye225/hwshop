import classes from "./ItemCard.module.css";

const ItemCard = (props) => {
  const item = props.item;
  return (
    <div className={classes.card}>
      <img
        className={classes.img}
        src={item.imageUrl}
        alt="이미지"
        height={150}
        width={150}
      />
      <div className={classes.info}>
        <div className={classes.title}>{item.title}</div>
        <div className={classes.price}>{item.price}원</div>
      </div>
    </div>
  );
};
export default ItemCard;
