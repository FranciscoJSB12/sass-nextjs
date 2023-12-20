import { MobileMenu } from "../MobileMenu";
import styles from "./Navbar.module.scss";

export function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div>
        <p>FranJS</p>
      </div>
      <ul className={styles.navbarList}>
        <li>Home</li>
        <li>Work</li>
        <li>About</li>
      </ul>
      <MobileMenu />
    </nav>
  );
}
