import React from "react";
import Link from "next/link";
import styles from "../../styles/sidebar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPython } from "@fortawesome/free-brands-svg-icons";
function Sidebar() {
  return (
    <div className={styles.container}>
      <p>
        <FontAwesomeIcon icon={faPython} color={"white"} /> Houses
      </p>
      <p>
        <FontAwesomeIcon icon={faPython} color={"white"} /> Cliets
      </p>
      <p>
        <FontAwesomeIcon icon={faPython} color={"white"} /> Landlords
      </p>
      <p>
        <FontAwesomeIcon icon={faPython} color={"white"} /> payments
      </p>
      <p>
        <FontAwesomeIcon icon={faPython} color={"white"} /> Summary
      </p>
    </div>
  );
}

export default Sidebar;
