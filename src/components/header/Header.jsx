import Title from "../reusableElements/Title";
import styles from "../../css-modules/header.module.css";
function Header() {
  return (
    <div class={styles.headerContainer}>
      <Title />
    </div>
  );
}

export default Header;
