import styles from "../styles/Home.module.css";
import { useState } from "react";
import { backend } from "../public/backend";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default function AddUser({ data }) {
  const [dni, setDni] = useState("");
  const [password, setPassword] = useState("");
  const [edad, setEdad] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [tarifa, setTarifa] = useState("");
  console.log(data);
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(backend + "/users/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombre: nombre,
        apellido: apellido,
        edad: edad,
        dni: dni,
        telefono: telefono,
        password: password,
        email: email,
        tarifa: tarifa,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          alert(data.error);
        }else{
            alert("Usuario creado");
            window.location = "/";
        }
      });
  };

  return (
    <div>
      <Header />
      <h1 className={styles.title}>Registrarse</h1>
      <hr className={styles.separador} />
      <div className={styles.inicio}>
        <form onSubmit={handleSubmit}>
          <label>Nombre</label>
          <input
            type="text"
            name="name"
            value={nombre}
            placeholder="Nombre"
            onChange={(e) => setNombre(e.target.value)}
            required
          />
          <br></br>
          <br></br>
          <label>Apellido</label>
          <input
            type="text"
            name="apellido"
            value={apellido}
            placeholder="Apellido"
            onChange={(e) => setApellido(e.target.value)}
            required
          />
          <br></br>
          <br></br>
          <label>Edad</label>
          <input
            type="number"
            name="edad"
            value={edad}
            placeholder="Edad"
            onChange={(e) => setEdad(e.target.value)}
            required
          />
          <br></br>
          <br></br>
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
          <label>Teléfono</label>
          <input
            type="number"
            name="telefono"
            value={telefono}
            placeholder="Teléfono"
            onChange={(e) => setTelefono(e.target.value)}
            required
          />
          <br></br>
          <br></br>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
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
          <label>Tarifa</label>
          <select onChange={(e) => setTarifa(e.target.value)} className={styles.selectF}>
            <option value="">Seleccione una tarifa</option>
            {data.map((tarifa) => {
              return (
                <option value={tarifa.nombre} key={tarifa.nombre}>
                  {tarifa.nombre} -- {tarifa.precio}€
                </option>
              );
            })}
          </select>
          <br></br>
          <br></br>
          <button type="submit" className={styles.loginB}>
            Registrarse
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(backend + "/tarifas/all");
  const data = await res.json();
  return { props: { data } };
}
