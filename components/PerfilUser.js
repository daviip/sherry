import styles from "../styles/Home.module.css";
import Image from "next/image";
import borrarF from "../public/borrar.png";
import { backend } from "../public/backend";
import { useEffect, useState } from "react";
import Link from "next/link";

export const PerfilUser = ({ user, data, dataTarifas, dataUsers }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isEditando, setEditando] = useState(false);
  const [isCorreo, setCorreo] = useState(user.email);
  const [isTelefono, setTelefono] = useState(user.telefono);
  const [isTarifa, setTarifa] = useState(user.tarifa);
  const [isUserB, setUserB] = useState("");

  let texto = [];
  let nd = [];
  data.map((horarios) => {
    horarios.horario.map((h) => {
      h.reserva.map((r) => {
        if (r.includes(user._id)) {
          if (
            !texto.includes(
              horarios.nombre + ", el " + h.dia + " a las " + h.hora + ":00"
            )
          ) {
            texto.push(
              horarios.nombre + ", el " + h.dia + " a las " + h.hora + ":00"
            );
            nd.push([horarios.nombre, h.dia]);
          }
        }
      });
    });
  });

  useEffect(() => {
    setIsAdmin(localStorage.getItem("token") === "628f283275c3530f7cd3a8f7");
  }, [isAdmin]);

  const borrar = (nombre, dia) => {
    fetch(backend + "/clases/reservaD/" + nombre, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        dia: dia,
        token: localStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          console.log("Reserva eliminada");
        }
      });

    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  const pregunta = (nombre, dia) => {
    if (
      confirm(
        "¿Estas seguro de querer borrar la reserva de una clase de " +
          nombre +
          " el " +
          dia +
          "?"
      )
    ) {
      borrar(nombre, dia);
    }
  };

  const borrarReservas = () => {
    fetch(backend + "/historial/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        historial: data,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          console.log("Historial guardado");
        }
      });

    data.map((c) => {
      fetch(backend + "/clases/reservaB/" + c.nombre, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            console.log(data.error);
          } else {
            console.log("Reservas eliminadas");
          }
        });
    });
  };

  const handleChange = (e) => {
    if (e.target.name === "correo") {
      setCorreo(e.target.value);
    } else if (e.target.name === "telefono") {
      setTelefono(e.target.value);
    } else if (e.target.name === "tarifa") {
      setTarifa(e.target.value);
    }
  };

  const editarP = () => {
    setEditando(true);
  };

  const guardarP = () => {
    fetch(backend + "/users/edit/" + user._id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombre: user.nombre,
        apellido: user.apellido,
        email: isCorreo,
        telefono: isTelefono,
        tarifa: isTarifa,
      }),
    });
    setEditando(false);
    setTimeout(() => {
      window.location.reload();
    }, 100);
  };

  const borrarUser = () => {
    fetch(backend + "/users/delete/" + isUserB, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    setUserB("");
    setTimeout(() => {
      window.location.reload();
    }, 100);
  };

  return (
    <div>
      <h1 className={styles.title}>
        {user.nombre} {user.apellido}
      </h1>
      <hr className={styles.separador} />
      <div className={styles.perfil}>
        <div>
          {isEditando ? (
            <form>
              <strong>
                <p>
                  Correo
                  <input
                    value={isCorreo}
                    placeholder={user.email}
                    name="correo"
                    onChange={handleChange}
                  ></input>
                </p>
                <p>
                  Telefono
                  <input
                    value={isTelefono}
                    placeholder={user.telefono}
                    name="telefono"
                    onChange={handleChange}
                  ></input>
                </p>
                <p>
                  Tarifa
                  <select
                    name="tarifa"
                    defaultValue={isTarifa}
                    onChange={handleChange}
                  >
                    <option value="">Seleccione una tarifa</option>
                    {dataTarifas.map((tarifa, i) => {
                      return (
                        <option value={tarifa.nombre} key={i}>
                          {tarifa.nombre} -- {tarifa.precio}€
                        </option>
                      );
                    })}
                  </select>
                </p>
              </strong>
            </form>
          ) : (
            <div>
              <h3>Correo: {user.email}</h3>
              <h3>Telefono: {user.telefono}</h3>
              <h3>Tarifa: {user.tarifa}</h3>
            </div>
          )}
          <h3>
            Reservas:
            <div className={styles.marginn}>
              {texto.map((t, i) => {
                return (
                  <p key={i}>
                    {t}{" "}
                    <span onClick={() => pregunta(nd[i][0], nd[i][1])}>
                      <Image
                        src={borrarF}
                        width={20}
                        height={20}
                        alt="borrar"
                        className={styles.borrar}
                      />
                    </span>
                  </p>
                );
              })}
            </div>
          </h3>
        </div>
        <div>
          {isAdmin ? (
            <div>
              <div>
                <button
                  className={styles.loginB}
                  onClick={() => borrarReservas()}
                >
                  <a>Borrar Reservas</a>
                </button>
                <button className={styles.loginB}>
                  <Link href="/registro">
                    <a>Crear Usuario</a>
                  </Link>
                </button>
              </div>
              <div className={styles.botonera}>
                <select onChange={(e) => setUserB(e.target.value)}>
                  <option value="-">Borrado de usuario</option>
                  {dataUsers.map((c, i) => {
                    return (
                      <option value={c._id} key={i}>
                        {c.nombre} {c.apellido}
                      </option>
                    );
                  })}
                </select>
                <button className={styles.loginB} onClick={() => borrarUser()}>
                  <a>Borrar Usuario</a>
                </button>
              </div>
              <div>
                <button className={styles.loginB}>
                  <Link href="/reservaactual">
                    <a>Ver Reserva Semanal</a>
                  </Link>
                </button>
                <button className={styles.loginB}>
                  <Link href="/reservahistorial">
                    <a>Ver Historial Reservas</a>
                  </Link>
                </button>
              </div>
            </div>
          ) : isEditando ? (
            <button className={styles.button} onClick={() => guardarP()}>
              <a>Guardar Perfil</a>
            </button>
          ) : (
            <button className={styles.button} onClick={() => editarP()}>
              <a>Editar Perfil</a>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
