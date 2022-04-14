import React from "react";
import styles from "../styles/home.module.css";
import { useSession } from "next-auth/react";
function index() {
  const { data: session, status } = useSession();
  if (status === "authenticated") {
    return <p className={styles.alertSuccess}>Welcome {session.user.name}</p>;
  }
  return (
    <div className={styles.alertWarning}>
      Please login is required to view this content
    </div>
  );
}

export default index;
