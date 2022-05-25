import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import styles from "../styles/Home.module.css";
import ListarF from "../components/ListarF";
import Listar from "../components/Listar";
import { backend } from "../public/backend";
import { useEffect, useState } from "react";
// import { sendData } from "../components/SendData";

export default function Horarios({ data }) {
  const [isLogged, setIsLogged] = useState(false);
  const [token, setToken] = useState("");
  const [clase, setClase] = useState("");
  const [dia, setDia] = useState("");
  let horarios = [];

  // Obtiene horarios
  data.find((item) => {
    if (item.nombre === clase) {
      horarios = item.horario;
    }
  });

  useEffect(() => {
    setToken(localStorage.getItem("token"));
    window.localStorage.getItem("token")
      ? setIsLogged(true)
      : setIsLogged(false);
  }, [isLogged, token]);

  const reservar = (clase, dia) => {
    console.log(clase, dia, token);
    if (clase && dia) {
      fetch(backend + "/clases/reserva/" + clase, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          dia: dia,
          token: token,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            console.log(data.error);
          } else {
            console.log("Reserva realizada");
          }
        });
    }
    // Reiniciar la pagina despues de 2 segundos
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  const pregunta = (clase, dia) => {
    let user = localStorage.getItem("token");
    fetch(backend + "/clases/" + clase)
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          console.log(data.error);
        }

        data.horario.map((h) => {
          if (h.dia === dia) {
            if (!h.reserva.includes(user)) {
              if (h.reserva.length < 15) {
                if (
                  confirm(
                    "¿Estas seguro de querer reservar una clase de " +
                      clase +
                      " el " +
                      dia +
                      "?"
                  )
                ) {
                  reservar(clase, dia);
                }
              } else {
                alert("No hay cupo en " + clase + " para el " + dia);
              }
            } else {
              alert("Ya tienes una reserva en " + clase + " para el " + dia);
            }
          }
        });
      });
  };

  return isLogged ? (
    <div className={styles.horarios}>
      <Header />
      <h1 className={styles.title}>Horarios</h1>
      <hr className={styles.separador} />
      <div className={styles.containerTable}>
        <Listar data={data} />
      </div>
      <div className={styles.containerForm}>
        <select
          name="clases"
          defaultValue={"Selecciona"}
          onChange={(e) => setClase(e.target.value)}
          className={styles.select}
        >
          <option value="">Selecciona</option>
          {data.map((item) => (
            <option
              value={item.nombre}
              key={item._id}
              className={styles.option}
            >
              {item.nombre}
            </option>
          ))}
        </select>
        <select
          name="dias"
          defaultValue={"Selecciona"}
          onChange={(e) => setDia(e.target.value)}
          className={styles.select}
        >
          <option value="">Selecciona</option>
          {horarios.map((item) => (
            <option value={item.dia} key={item.dia} className={styles.option}>
              {item.dia} a las {item.hora}:00
            </option>
          ))}
        </select>
        <button
          type="submit"
          className={styles.selectB}
          onClick={() => pregunta(clase, dia)}
        >
          Agregar
        </button>
      </div>
      <Footer />
    </div>
  ) : (
    <div>
      <Header />
      <h1 className={styles.title}>Horarios</h1>
      <hr className={styles.separador} />
      <div className={styles.containerTable}>
        <ListarF data={data} />
      </div>
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(backend + "/clases/all");
  const data = await res.json();
  return { props: { data } };
}
