import React from "react";
import styles from "../../styles/content.module.css";

function Content() {
  return (
    <div className={styles.container}>
      <div className={styles.users}>
        <p>Houses</p>
        <h1>10</h1>
      </div>
      <div className={styles.users}>
        <p>Landlords</p>
        <h1>69</h1>
      </div>
      <div className={styles.users}>
        <p>Tenants</p>
        <h1>201</h1>
      </div>
      <div className={styles.users}>
        <p>Revenue</p>
        <h1>25</h1>
      </div>
    </div>
  );
}

export default Content;
