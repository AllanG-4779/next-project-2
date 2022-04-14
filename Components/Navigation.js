import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import styles from "../styles/nav.module.css";

function Navigation() {
  const { data: session, status } = useSession();
  return (
    <>
      <nav className={styles.nav}>
        <Link passHref href="/">
          <a className={styles.brand}>Duur Homes</a>
        </Link>

        {status === "authenticated" ? (
          <ul className={styles.navbar}>
            <li>
              <Link passHref href="/">
                <a className={styles.navlink}>Home</a>
              </Link>
            </li>
            <li>
              <Link passHref href="/">
                <a className={styles.navlink}>Dashboard</a>
              </Link>
            </li>
            <li>
              <Link passHref href="/">
                <a className={styles.navlink}>Get in touch</a>
              </Link>
            </li>
            <li>
              <Link passHref href="/login">
                <button className={styles.login} onClick={() => signOut()}>
                  Logout
                </button>
              </Link>
            </li>
          </ul>
        ) : (
          <ul className={styles.navbar}>
            <li>
              <Link passHref href="/login">
                <button className={styles.login}>Login</button>
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </>
  );
}

export default Navigation;
