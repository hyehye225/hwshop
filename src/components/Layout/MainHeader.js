import CategoryNav from "../UI/Category/CategoryNav";
import classes from "./MainHeader.module.css";
const MainHeader = (props) => {
  const category = props.category;
  const selected = props.selected;
  const setSelected = props.setSelected;
  return (
    <header className={classes.header}>
      <CategoryNav
        category={category}
        setSelected={setSelected}
        selected={selected}
      />
      <h1>Shop</h1>
      <nav>
        <ul>
          {/* <li>회원가입</li>
          <li>로그인</li> */}
        </ul>
      </nav>
    </header>
  );
};
export default MainHeader;
