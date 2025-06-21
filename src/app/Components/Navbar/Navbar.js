// components/Navbar.jsx
"use client";

import React from "react";
import styles from "./Navbar.module.css";
import Image from "next/image";
import logo from "@/../public/images/logo.png";

const Items = [
  {
    title: "Destinations",
    link: "/destinations",
    dropDown: true,
    dropDownItems: [
      { title: "Europe", link: "/destinations/europe" },
      { title: "Asia", link: "/destinations/asia" },
      { title: "Africa", link: "/destinations/africa" },
      { title: "North America", link: "/destinations/north-america" },
      { title: "South America", link: "/destinations/south-america" },
      { title: "Australia", link: "/destinations/australia" },
      { title: "Antarctica", link: "/destinations/antarctica" },
    ],
  },
  { title: "Tours", link: "/tours" },
  { title: "Taxi", link: "/taxi" },
  { title: "Gallery", link: "/gallery" },
  { title: "Contact", link: "/contact" },
  { title: "City Tour", link: "/city-tour" },
  { title: "About", link: "/about" },
];

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = React.useState(null);

  const listLeft = Items.slice(0, 4);
  const listRight = Items.slice(4);

  const renderNavItem = (item) => (
    <li
      key={item.title}
      className={`${styles.listItem} ${
        item.dropDown ? styles.hasDropdown : ""
      }`}
      data-text={item.title}
      onMouseEnter={() => item.dropDown && setActiveDropdown(item.title)}
      onMouseLeave={() => item.dropDown && setActiveDropdown(null)}
    >
      <a href={item.link} className={styles.link}>
        {item.title}
        {item.dropDown && <span style={{ marginLeft: "8px" }}>&#9662;</span>}
      </a>
      {item.dropDown && activeDropdown === item.title && (
        <ul className={styles.dropdownMenu}>
          {item.dropDownItems.map((sub) => (
            <li key={sub.title} className={styles.dropdownItem}>
              <a href={sub.link} className={styles.dropdownLink}>
                {sub.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );

  return (
    <nav className={styles.navbar}>
      <ul className={styles.list}>{listLeft.map(renderNavItem)}</ul>

      <div className={styles.logo}>
        <Image src={logo} width={200} height={65} alt="logo" />
      </div>

      <ul className={styles.list}>{listRight.map(renderNavItem)}</ul>
    </nav>
  );
}
