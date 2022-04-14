import React, { useEffect, useState } from "react";
import styles from "../styles/login.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { signIn, useSession, getProviders } from "next-auth/react";

import {
  faGithub,
  faFacebook,
  faTwitter,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import { useRouter } from "next/router";
function login() {
  const router = useRouter();
  const { data: session, status } = useSession();
  status === "authenticated" ? router.replace("/") : "";
  const [providers, setProviders] = useState([]);

  //get the providers
  useEffect(() => {
    const provFetch = async () => {
      const prov = await getProviders();
      setProviders(prov);
    };
    provFetch();
  }, []);
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <div className={styles.formgroup}>
          <label>Username</label>
          <input type="text" name="" value="" onChange={(e) => {}} />
        </div>
        <div className={styles.formgroup}>
          <label>Password</label>
          <input type="password" name="" value="" onChange={(e) => {}} />
        </div>
        <div className={styles.submit}>
          <button>Login</button>
        </div>
        <p>Complete action with:</p>
        <hr />
        <div className={styles.social}>
          <button
            type="button"
            onClick={(e) => signIn(providers.github.id)}
            className={styles.btn}
          >
            <FontAwesomeIcon icon={faGithub} fontSize={29} />
          </button>
          <button
            className={styles.btn}
            type="button"
            onClick={() => signIn("facebook")}
          >
            <FontAwesomeIcon icon={faFacebook} fontSize={29} color="#4267B2" />
          </button>
        </div>
        <p style={{ display: "flex", alignItems: "center" }}>
          Dont have an account?
          <Link href={"/signup"} passHref>
            <button
              style={{
                padding: ".3rem",
                background: "dodgerblue",
                marginLeft: ".5rem",
                color: "white",
                fontWeight: "lighter",
                letterSpacing: ".2rem",
                borderRadius: ".3rem",
                border: "none",
                width: "6rem",
                cursor: "pointer",
              }}
            >
              Signup
            </button>
          </Link>
        </p>
      </form>
    </div>
  );
}

export default login;
