import styles from "../styles/Home.module.css";

export default function Listar({ data }) {
  let lunes9 = "";
  let lunes10 = "";
  let lunes11 = "";
  let lunes12 = "";
  let lunes13 = "";
  let martes9 = "";
  let martes10 = "";
  let martes11 = "";
  let martes12 = "";
  let martes13 = "";
  let miercoles9 = "";
  let miercoles10 = "";
  let miercoles11 = "";
  let miercoles12 = "";
  let miercoles13 = "";
  let jueves9 = "";
  let jueves10 = "";
  let jueves11 = "";
  let jueves12 = "";
  let jueves13 = "";
  let viernes9 = "";
  let viernes10 = "";
  let viernes11 = "";
  let viernes12 = "";
  let viernes13 = "";

  data.map((item) => {
    item.horario.map((item2) => {
      if (item2.dia === "Lunes") {
        if (item2.hora === "9") {
          lunes9 = [item.nombre];
        }
        if (item2.hora === "10") {
          lunes10 = [item.nombre];
        }
        if (item2.hora === "11") {
          lunes11 = [item.nombre];
        }
        if (item2.hora === "12") {
          lunes12 = [item.nombre];
        }
        if (item2.hora === "13") {
          lunes13 = [item.nombre];
        }
      }
      if (item2.dia === "Martes") {
        if (item2.hora === "9") {
          martes9 = [item.nombre];
        }
        if (item2.hora === "10") {
          martes10 = [item.nombre];
        }
        if (item2.hora === "11") {
          martes11 = [item.nombre];
        }
        if (item2.hora === "12") {
          martes12 = [item.nombre];
        }
        if (item2.hora === "13") {
          martes13 = [item.nombre];
        }
      }
      if (item2.dia === "Miercoles") {
        if (item2.hora === "9") {
          miercoles9 = [item.nombre];
        }
        if (item2.hora === "10") {
          miercoles10 = [item.nombre];
        }
        if (item2.hora === "11") {
          miercoles11 = [item.nombre];
        }
        if (item2.hora === "12") {
          miercoles12 = [item.nombre];
        }
        if (item2.hora === "13") {
          miercoles13 = [item.nombre];
        }
      }
      if (item2.dia === "Jueves") {
        if (item2.hora === "9") {
          jueves9 = [item.nombre];
        }
        if (item2.hora === "10") {
          jueves10 = [item.nombre];
        }
        if (item2.hora === "11") {
          jueves11 = [item.nombre];
        }
        if (item2.hora === "12") {
          jueves12 = [item.nombre];
        }
        if (item2.hora === "13") {
          jueves13 = [item.nombre];
        }
      }
      if (item2.dia === "Viernes") {
        if (item2.hora === "9") {
          viernes9 = [item.nombre];
        }
        if (item2.hora === "10") {
          viernes10 = [item.nombre];
        }
        if (item2.hora === "11") {
          viernes11 = [item.nombre];
        }
        if (item2.hora === "12") {
          viernes12 = [item.nombre];
        }
        if (item2.hora === "13") {
          viernes13 = [item.nombre];
        }
      }
    });
  });

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Horario</th>
          <th>Lunes</th>
          <th>Martes</th>
          <th>Miércoles</th>
          <th>Jueves</th>
          <th>Viernes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>09:00-10:00</th>
          <td>
            {lunes9[0]}
          </td>
          <td>
            {martes9[0]}
          </td>
          <td>
            {miercoles9[0]}
          </td>
          <td>
            {jueves9[0]}
          </td>
          <td>
            {viernes9[0]}
          </td>
        </tr>
        <tr>
          <th>10:00-11:00</th>
          <td>
            {lunes10[0]}
          </td>
          <td>
            {martes10[0]}
          </td>
          <td>
            {miercoles10[0]}
          </td>
          <td>
            {jueves10[0]}
          </td>
          <td>
            {viernes10[0]}
          </td>
        </tr>
        <tr>
          <th>11:00-12:00</th>
          <td>
            {lunes11[0]}
          </td>
          <td>
            {martes11[0]}
          </td>
          <td>
            {miercoles11[0]}
          </td>
          <td>
            {jueves11[0]}
          </td>
          <td>
            {viernes11[0]}
          </td>
        </tr>
        <tr>
          <th>12:00-13:00</th>
          <td>
            {lunes12[0]}
          </td>
          <td>
            {martes12[0]}
          </td>
          <td>
            {miercoles12[0]}
          </td>
          <td>
            {jueves12[0]}
          </td>
          <td>
            {viernes12[0]}
          </td>
        </tr>
        <tr>
          <th>13:00-14:00</th>
          <td>
            {lunes13[0]}
          </td>
          <td>
            {martes13[0]}
          </td>
          <td>
            {miercoles13[0]}
          </td>
          <td>
            {jueves13[0]}
          </td>
          <td>
            {viernes13[0]}
          </td>
        </tr>
      </tbody>
    </table>
  );
}
