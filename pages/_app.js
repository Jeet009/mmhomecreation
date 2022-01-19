import "../styles/globals.css";
import MainTemplate from "../template/mainTemplate";

function MyApp({ Component, pageProps }) {
  return (
    <MainTemplate>
      <Component {...pageProps} />
    </MainTemplate>
  );
}

export default MyApp;
