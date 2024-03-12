import { NavigationList } from "../NavigationList";
import { MobileMenu } from "../MobileMenu";
import styles from "./Navbar.module.scss";

export function Navbar() {
  return (
    <nav className={styles.navbar}>
      <span>Franjs</span>
      <NavigationList style={styles.navbarList} />
      <MobileMenu />
    </nav>
  );
}
