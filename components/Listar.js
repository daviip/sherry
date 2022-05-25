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
          lunes9 = [item.nombre, item2.reserva.length];
        }
        if (item2.hora === "10") {
          lunes10 = [item.nombre, item2.reserva.length];
        }
        if (item2.hora === "11") {
          lunes11 = [item.nombre, item2.reserva.length];
        }
        if (item2.hora === "12") {
          lunes12 = [item.nombre, item2.reserva.length];
        }
        if (item2.hora === "13") {
          lunes13 = [item.nombre, item2.reserva.length];
        }
      }
      if (item2.dia === "Martes") {
        if (item2.hora === "9") {
          martes9 = [item.nombre, item2.reserva.length];
        }
        if (item2.hora === "10") {
          martes10 = [item.nombre, item2.reserva.length];
        }
        if (item2.hora === "11") {
          martes11 = [item.nombre, item2.reserva.length];
        }
        if (item2.hora === "12") {
          martes12 = [item.nombre, item2.reserva.length];
        }
        if (item2.hora === "13") {
          martes13 = [item.nombre, item2.reserva.length];
        }
      }
      if (item2.dia === "Miercoles") {
        if (item2.hora === "9") {
          miercoles9 = [item.nombre, item2.reserva.length];
        }
        if (item2.hora === "10") {
          miercoles10 = [item.nombre, item2.reserva.length];
        }
        if (item2.hora === "11") {
          miercoles11 = [item.nombre, item2.reserva.length];
        }
        if (item2.hora === "12") {
          miercoles12 = [item.nombre, item2.reserva.length];
        }
        if (item2.hora === "13") {
          miercoles13 = [item.nombre, item2.reserva.length];
        }
      }
      if (item2.dia === "Jueves") {
        if (item2.hora === "9") {
          jueves9 = [item.nombre, item2.reserva.length];
        }
        if (item2.hora === "10") {
          jueves10 = [item.nombre, item2.reserva.length];
        }
        if (item2.hora === "11") {
          jueves11 = [item.nombre, item2.reserva.length];
        }
        if (item2.hora === "12") {
          jueves12 = [item.nombre, item2.reserva.length];
        }
        if (item2.hora === "13") {
          jueves13 = [item.nombre, item2.reserva.length];
        }
      }
      if (item2.dia === "Viernes") {
        if (item2.hora === "9") {
          viernes9 = [item.nombre, item2.reserva.length];
        }
        if (item2.hora === "10") {
          viernes10 = [item.nombre, item2.reserva.length];
        }
        if (item2.hora === "11") {
          viernes11 = [item.nombre, item2.reserva.length];
        }
        if (item2.hora === "12") {
          viernes12 = [item.nombre, item2.reserva.length];
        }
        if (item2.hora === "13") {
          viernes13 = [item.nombre, item2.reserva.length];
        }
      }
    });
  });

  const cambioColor = (item) => {
    if (item[1] >= 0 && item[1] <= 5) {
      return styles.colorV;
    }
    if (item[1] > 5 && item[1] <= 10) {
      return styles.colorA;
    }
    if (item[1] > 10 && item[1] < 15) {
      return styles.colorO;
    }
    if (item[1] >= 15) {
      return styles.colorR;
    }
  };

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
          <td className={cambioColor(lunes9)}>
            {lunes9[0]}
            <sub>{lunes9[1]}/15</sub>
          </td>
          <td className={cambioColor(martes9)}>
            {martes9[0]}
            <sub>{martes9[1]}/15</sub>
          </td>
          <td className={cambioColor(miercoles9)}>
            {miercoles9[0]}
            <sub>{miercoles9[1]}/15</sub>
          </td>
          <td className={cambioColor(jueves9)}>
            {jueves9[0]}
            <sub>{jueves9[1]}/15</sub>
          </td>
          <td className={cambioColor(viernes9)}>
            {viernes9[0]}
            <sub>{viernes9[1]}/15</sub>
          </td>
        </tr>
        <tr>
          <th>10:00-11:00</th>
          <td className={cambioColor(lunes10)}>
            {lunes10[0]}
            <sub>{lunes10[1]}/15</sub>
          </td>
          <td className={cambioColor(martes10)}>
            {martes10[0]}
            <sub>{martes10[1]}/15</sub>
          </td>
          <td className={cambioColor(miercoles10)}>
            {miercoles10[0]}
            <sub>{miercoles10[1]}/15</sub>
          </td>
          <td className={cambioColor(jueves10)}>
            {jueves10[0]}
            <sub>{jueves10[1]}/15</sub>
          </td>
          <td className={cambioColor(viernes10)}>
            {viernes10[0]}
            <sub>{viernes10[1]}/15</sub>
          </td>
        </tr>
        <tr>
          <th>11:00-12:00</th>
          <td className={cambioColor(lunes11)}>
            {lunes11[0]}
            <sub>{lunes11[1]}/15</sub>
          </td>
          <td className={cambioColor(martes11)}>
            {martes11[0]}
            <sub>{martes11[1]}/15</sub>
          </td>
          <td className={cambioColor(miercoles11)}>
            {miercoles11[0]}
            <sub>{miercoles11[1]}/15</sub>
          </td>
          <td className={cambioColor(jueves11)}>
            {jueves11[0]}
            <sub>{jueves11[1]}/15</sub>
          </td>
          <td className={cambioColor(viernes11)}>
            {viernes11[0]}
            <sub>{viernes11[1]}/15</sub>
          </td>
        </tr>
        <tr>
          <th>12:00-13:00</th>
          <td className={cambioColor(lunes12)}>
            {lunes12[0]}
            <sub>{lunes12[1]}/15</sub>
          </td>
          <td className={cambioColor(martes12)}>
            {martes12[0]}
            <sub>{martes12[1]}/15</sub>
          </td>
          <td className={cambioColor(miercoles12)}>
            {miercoles12[0]}
            <sub>{miercoles12[1]}/15</sub>
          </td>
          <td className={cambioColor(jueves12)}>
            {jueves12[0]}
            <sub>{jueves12[1]}/15</sub>
          </td>
          <td className={cambioColor(viernes12)}>
            {viernes12[0]}
            <sub>{viernes12[1]}/15</sub>
          </td>
        </tr>
        <tr>
          <th>13:00-14:00</th>
          <td className={cambioColor(lunes13)}>
            {lunes13[0]}
            <sub>{lunes13[1]}/15</sub>
          </td>
          <td className={cambioColor(martes13)}>
            {martes13[0]}
            <sub>{martes13[1]}/15</sub>
          </td>
          <td className={cambioColor(miercoles13)}>
            {miercoles13[0]}
            <sub>{miercoles13[1]}/15</sub>
          </td>
          <td className={cambioColor(jueves13)}>
            {jueves13[0]}
            <sub>{jueves13[1]}/15</sub>
          </td>
          <td className={cambioColor(viernes13)}>
            {viernes13[0]}
            <sub>{viernes13[1]}/15</sub>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
