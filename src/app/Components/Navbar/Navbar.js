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
  {
    title: "Tours",
    link: "/tours",
    dropDown: true,
    dropDownItems: [
      {
        title: "Adventure Tours",
        link: "/tours/adventure",
        dropDown: true,
        dropDownItems: [
          { title: "Hiking", link: "/tours/adventure/hiking" },
          { title: "Cycling", link: "/tours/adventure/cycling" },
        ],
      },
      {
        title: "Relaxation Tours",
        link: "/tours/relaxation",
        dropDown: true,
        dropDownItems: [
          { title: "Beach Holidays", link: "/tours/relaxation/beach" },
          { title: "Spa Retreats", link: "/tours/relaxation/spa" },
        ],
      },
    ],
  },
  { title: "Taxi", link: "/taxi" },
  { title: "Gallery", link: "/gallery" },
  { title: "Contact", link: "/contact" },
  { title: "City Tour", link: "/city-tour" },
  { title: "About", link: "/about" },
];

export default function Navbar() {
  const [activePath, setActivePath] = React.useState([]);

  const listLeft = Items.slice(0, 4);
  const listRight = Items.slice(4);

  const handleEnter = (level, title) => {
    if (title) {
      setActivePath((prev) => {
        const next = prev.slice(0, level);
        next[level] = title;
        return next;
      });
    }
  };

  const handleLeave = (level) => {
    setActivePath((prev) => prev.slice(0, level));
  };

  const renderItems = (items, level = 0) => (
    <ul
      className={
        level === 0
          ? styles.list
          : `${styles.dropdownMenu} ${styles.submenu}`
      }
    >
      {items.map((item) => (
        <li
          key={`${level}-${item.title}`}
          className={`${styles.listItem} ${
            item.dropDown ? styles.hasDropdown : ""
          }`}
          data-text={item.title}
          onMouseEnter={() => item.dropDown && handleEnter(level, item.title)}
          onMouseLeave={() => item.dropDown && handleLeave(level)}
        >
          <a
            href={item.link}
            className={level === 0 ? styles.link : styles.dropdownLink}
          >
            {item.title}
            {item.dropDown && (
              <span className={styles.arrow}>
                {level === 0 ? "▼" : "▶"}
              </span>
            )}
          </a>
          {item.dropDown && activePath[level] === item.title &&
            renderItems(item.dropDownItems, level + 1)}
        </li>
      ))}
    </ul>
  );

  return (
    <nav className={styles.navbar}>
      {renderItems(listLeft, 0)}
      <div className={styles.logo}>
        <Image src={logo} width={200} height={65} alt="logo" />
      </div>
      {renderItems(listRight, 0)}
    </nav>
  );
}
