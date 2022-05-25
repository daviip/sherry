import Image from "next/image";
import Logo from "../public/logo.png";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";

export const Header = () => {
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
    <div className={styles.containerHeader}>
      <div className={styles.image}>
        <Image src={Logo} width={130} height={120} alt="img" />
      </div>
      <div className={styles.nav}>
        <div className={styles.navegator}>
          <Link href="/">Inicio</Link>
        </div>
        <div className={styles.navegator}>
          <Link href="/tarifas">Tarifas</Link>
        </div>
        <div className={styles.navegator}>
          <Link href="/clases">Clases</Link>
        </div>
        <div className={styles.navegator}>
          <Link href="/horarios">Horarios</Link>
        </div>
      </div>
      <div className={styles.login}>
        {isLogged ? (
          <>
            <Link href="/perfil" passHref>
              <button className={styles.loginB}>Mi perfil</button>
            </Link>
            <Link href="/" passHref>
              <button className={styles.loginB} onClick={handleLogout}>
                Cerrar sesion
              </button>
            </Link>
          </>
        ) : (
          <>
            <Link href="/inicio" passHref>
              <button className={styles.loginB}>Iniciar sesion</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};
