import Link from "next/link";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";

export const Logeo = () => {
  const [isLogged, setIsLogged] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location = "/";
  };

  useEffect(() => {
    window.localStorage.getItem("token")
      ? setIsLogged(true)
      : setIsLogged(false);
  }, [isLogged]);

  return (
    <div className={styles.login}>
      {isLogged ? (
        <div className={styles.pepe}>
          <Link href="/perfil" passHref>
            <button className={styles.loginB}>Mi perfil</button>
          </Link>
          <Link href="/" passHref>
            <button className={styles.loginB} onClick={handleLogout}>
              Cerrar sesion
            </button>
          </Link>
        </div>
      ) : (
        <div className={styles.pepe}>

          <Link href="/inicio" passHref>
            <button className={styles.loginB}>Iniciar sesion</button>
          </Link>
        </div>
      )}
    </div>
  );
};
