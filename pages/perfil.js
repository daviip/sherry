import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useEffect, useState } from "react";
import { PerfilUser } from "../components/PerfilUser";
import { backend } from "../public/backend";

export default function Perfil({data, dataTarifas, dataUsers}) {
  const [token, setToken] = useState("");
  const [user, setUser] = useState("");

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, [token]);

  useEffect(() => {
    if (token) {
      fetch(backend + "/users/" + token, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            alert(data.error);
          } else {
            setUser(data);
          }
        });
    }
  }, [token]);

  return (
    <div>
      <Header />
      <PerfilUser user={user} data={data} dataTarifas={dataTarifas} dataUsers={dataUsers}/>
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(backend + "/clases/all");
  const data = await res.json();
  const resTarifas = await fetch(backend + "/tarifas/all");
  const dataTarifas = await resTarifas.json();
  const resUsers = await fetch(backend + "/users/all");
  const dataUsers = await resUsers.json();
  return { props: { data, dataTarifas, dataUsers } };
}
