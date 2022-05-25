import { Header } from "../components/Header";
import { Slider } from "../components/Slider";
import { Prices } from "../components/Prices";
import { Footer } from "../components/Footer";
import { Clases } from "../components/Clases";
import { backend } from "../public/backend";
import { useEffect } from "react";

export default function Home({ datap, datac }) {

  // useEffect(() => {
  //   window.onbeforeunload = () => {
  //     window.localStorage.removeItem("token");
  //   };
  // }, []);

  return (
    <div>
      <Header />
      <Slider />
      <Prices data={datap} all={false} />
      <Clases data={datac} all={false} />
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  const resp = await fetch(backend + "/tarifas/all");
  const resc = await fetch(backend + "/clases/all");
  const datap = await resp.json();
  const datac = await resc.json();
  return { props: { datap, datac } };
}
