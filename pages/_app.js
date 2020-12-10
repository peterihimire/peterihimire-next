import "../styles/globals.css";
import "../styles/navbar.css";
import "../styles/mobilenav.css";
import MobileNav from "../components/mobilenav";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <MobileNav />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
