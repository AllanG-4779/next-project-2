import React from "react";
import Link from "next/link";
import styles from "../../styles/sidebar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAirbnb, faPython } from "@fortawesome/free-brands-svg-icons";
function Sidebar() {
  return (
    <div className={styles.container}>
     
      <p>
        <FontAwesomeIcon icon={faAirbnb} color={"white"} /> <span>Houses</span>
      </p>
      <p>
        <FontAwesomeIcon icon={faPython} color={"white"} /> <span>Clients</span>
      </p>
      <p>
        <FontAwesomeIcon icon={faPython} color={"white"} />{" "}
        <span>Landlords</span>
      </p>
      <p>
        <FontAwesomeIcon icon={faPython} color={"white"} />{" "}
        <span>Accounts</span>
      </p>
      <p>
        <FontAwesomeIcon icon={faPython} color={"white"} /> <span>Dashboard</span>
      </p>
    </div>
  );
}

export default Sidebar;
