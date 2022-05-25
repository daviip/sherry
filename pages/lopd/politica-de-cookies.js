import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import styles from "../../styles/Home.module.css";

export default function cookies() {
  return (
    <div>
      <Header />
      <h1 className={styles.title}>Política de cookies</h1>
      <hr className={styles.separador} />
      <div className={styles.informativa}>
        <p>
          1. Definición y función de las cookies ¿Qué son las cookies? Una
          cookie es un fichero que se descarga en su ordenador al acceder a
          determinadas páginas web. Las cookies permiten a una página web, entre
          otras cosas, almacenar y recuperar información sobre los hábitos de
          navegación de un usuario o de su equipo y, dependiendo de la
          información que contengan y de la forma en que utilice su equipo,
          pueden utilizarse para reconocer al usuario. 2. ¿Qué tipos de cookies
          utiliza esta página web? Cookies propias: Son aquéllas que se envían
          al equipo terminal del usuario desde un equipo o dominio gestionado
          por el propio editor y desde el que se presta el servicio solicitado
          por el usuario. Cookies de sesión: Son un tipo de cookies diseñadas
          para recabar y almacenar datos mientras el usuario accede a una página
          web. Cookies persistentes: Son un tipo de cookies en el que los datos
          siguen almacenados en el terminal y pueden ser accedidos y tratados
          durante un periodo definido por el responsable de la cookie, y que
          puede ir de unos minutos a varios años Cookies de análisis: Son
          aquéllas que bien tratadas por nosotros o por terceros, nos permiten
          cuantificar el número de usuarios y así realizar la medición y
          análisis estadístico de la utilización que hacen los usuarios del
          servicio ofertado. 3. Revocación y eliminación de cookies Usted puede
          permitir, bloquear o eliminar las cookies instaladas en su equipo
          mediante la configuración de las opciones del navegador instalado en
          su ordenador, en caso que no permita la instalación de cookies en su
          navegador es posible que no pueda acceder a alguna de las secciones de
          nuestra web. Más información sobre como administrar las cookies en
          Google Chrome Más información sobre como administrar las cookies en
          Internet Explorer Más información sobre como administrar las cookies
          en Mozilla Firefox Más información sobre como administrar las cookies
          en Safari 4. Consentimiento Al navegar y continuar en nuestra web nos
          indicas que estás consintiendo el uso de las cookies enunciadas en el
          siguiente apartado, y en las condiciones contenidas en la presente
          Política de Cookies.
        </p>
      </div>
      <Footer />
    </div>
  );
}
