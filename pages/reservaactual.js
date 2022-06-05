import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { backend } from "../public/backend";
import styles from "../styles/Home.module.css";

export default function Clase({ data, userData }) {
  const cambiaNombre = (e) => {
    let nombre = "";
    userData.map((user) => {
      if (user._id === e) {
        nombre = user.nombre + " " + user.apellido;
      }
    });
    return nombre;
  };

  return (
    <div>
      <Header />
      <div className={styles.margen}>
      {data.map((clase, i) => (
        <div key={i}>
          <h1>{clase.nombre}</h1>
          {clase.horario.map((h, i) => (
            <div key={i} className={styles.margen2}>
              <h3>
                {h.dia} - {h.hora}:00
              </h3>
              {h.reserva.map((r, i) => (
                <p key={i} className={styles.margen2}>{cambiaNombre(r)}</p>
              ))}
            </div>
          ))}
        </div>
      ))}
      </div>
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(backend + "/clases/all");
  const data = await res.json();
  const user = await fetch(backend + "/users/all");
  const userData = await user.json();
  return { props: { data, userData } };
}
