import MainTemplate from "../template/MainTemplate";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <MainTemplate>
      <Component {...pageProps} />
    </MainTemplate>
  );
}

export default MyApp;
