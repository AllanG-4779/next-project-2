import React from "react";
import Content from "./Content";
import Sidebar from "./Sidebar";
import styles from "../../styles/admin.module.css";
function Admin() {
  return (
    <div className={styles.container}>
      <Sidebar />
      <Content />
    </div>
  );
}

export default Admin;
