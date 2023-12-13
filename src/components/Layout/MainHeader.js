import classes from "./MainHeader.module.css";
const MainHeader = () => {
  return (
    <header className={classes.header}>
      <h1>Shop</h1>
      <nav>
        <ul>
          <li>회원가입</li>
          <li>로그인</li>
        </ul>
      </nav>
    </header>
  );
};
export default MainHeader;
