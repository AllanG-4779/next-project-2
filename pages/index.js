import React from "react";
import styles from "../styles/home.module.css";
import { useSession } from "next-auth/react";
import Admin from "../Components/Admin/Admin";
function index() {
  const { data: session, status } = useSession();
  if (status === "unauthenticated") {
    return <Admin />;
  }
  return (
    <div className={styles.alertWarning}>
      Please login is required to view this content
    </div>
  );
}

export default index;
