import { Header } from "../components/Header";
import { Prices } from "../components/Prices";
import { Footer } from "../components/Footer";
import { backend } from "../public/backend";

export default function Tarifas({ data }) {
  return (
    <div>
      <Header />
      <Prices data={data} all={true} />
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(backend + "/tarifas/all");
  const data = await res.json();
  return { props: { data } };
}
