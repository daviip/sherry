import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Clases } from "../components/Clases";
import { backend } from "../public/backend";

export default function Clase({ data }) {
  return (
    <div>
      <Header />
      <Clases data={data} all={true} />
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(backend + "/clases/all");
  const data = await res.json();
  return { props: { data } };
}
