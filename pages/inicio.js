import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import { backend } from "../public/backend";

export default function Inicio() {
  const [dni, setDni] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(backend + "/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ dni, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          alert(data.error);
        } else {
          localStorage.setItem("token", data._id);
          window.location = "/";
        }
      });
  };

  return (
    <div>
      <Header />
      <h1 className={styles.title}>Iniciar Sesión</h1>
      <hr className={styles.separador} />
      <div className={styles.inicio}>
        <form onSubmit={handleSubmit}>
          <label>DNI</label>
          <input
            type="number"
            name="dni"
            value={dni}
            placeholder="dni sin letra"
            onChange={(e) => setDni(e.target.value)}
            required
          />
          <br></br>
          <br></br>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Contraseña"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br></br>
          <br></br>
          <button type="submit" className={styles.loginB}>
            Iniciar Sesión
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
