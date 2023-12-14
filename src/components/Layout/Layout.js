import MainHeader from "./MainHeader";
import classes from "./Layout.module.css";
import ItemSlider from "../UI/ItemSlider";
const Layout = (props) => {
  const category = props.category;
  const selected = props.selected;
  const setSelected = props.setSelected;
  return (
    <div>
      <MainHeader
        category={category}
        setSelected={setSelected}
        selected={selected}
      />
      <main className={classes.layout}>{props.children}</main>
    </div>
  );
};

export default Layout;
