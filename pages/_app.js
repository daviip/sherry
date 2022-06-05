import { useState, useEffect } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [title, setTitle] = useState("Sherry Fit");

  useEffect(() => {
    document.title = title;
  });
  return <Component {...pageProps} />;
}

export default MyApp;
