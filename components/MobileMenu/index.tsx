"use client";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { NavigationList } from "../NavigationList";
import styles from "./MobileMenu.module.scss";

export function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={styles.mobileMenu}>
      <IoMenu
        className={styles.mobileMenuIcon}
        onClick={() => setIsMenuOpen((prev) => !prev)}
      />
      {isMenuOpen && <NavigationList style={styles.mobileMenuList} />}
    </div>
  );
}
