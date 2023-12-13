import MainHeader from "./MainHeader";
import classes from "./Layout.module.css";
import ItemSlider from "../UI/ItemSlider";
const Layout = (props) => {
  return (
    <div>
      <MainHeader />
      <main className={classes.layout}>{props.children}</main>
    </div>
  );
};

export default Layout;
