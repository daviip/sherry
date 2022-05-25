import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import styles from "../../styles/Home.module.css";
import Image from "next/image";
import Walking from "/public/imagesC/1.jpg";
import Ciclo from "../../public/imagesC/2.jpg";
import ForTraining from "../../public/imagesC/3.jpg";
import BodyCombat from "../../public/imagesC/4.jpg";
import Pilates from "../../public/imagesC/5.jpg";
import Yoga from "../../public/imagesC/6.jpg";
import CrossTraining from "../../public/imagesC/7.jpg";
import BodyPump from "../../public/imagesC/8.jpg";
import Zumba from "../../public/imagesC/9.jpg";
import { backend } from "../../public/backend";

let img = [
  Walking,
  Ciclo,
  ForTraining,
  BodyCombat,
  Pilates,
  Yoga,
  CrossTraining,
  BodyPump,
  Zumba,
];
let index = [
  "Walking",
  "Ciclo",
  "For Training",
  "Body Combat",
  "Pilates",
  "Yoga",
  "Cross Training",
  "Body Pump",
  "Zumba",
];

export default function Class({ data }) {
  if (!data) {
    return <div>loading...</div>;
  } else {
    let i = index.indexOf(data.nombre);
    return (
      <div>
        <Header />
        <div>
          <h1 className={styles.title}>Clases</h1>
          <hr className={styles.separador} />
          <div className={styles.porClases}>
            <Image
              src={img[i]}
              width={300}
              height={300}
              alt="img"
              className={styles.porClases1}
            />
            <div className={styles.porClases1}>
              <h2>{data.nombre}</h2>
              <p>Intensidad: {data.intensidad}</p>
              <p>{data.descripcion}</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { id } = params;
  const res = await fetch(backend + "/clases/" + id);
  const data = await res.json();
  return { props: { data } };
}
