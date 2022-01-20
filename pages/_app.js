import MainTemplate from "../template/MainTemplate";
import "../styles/globals.css";
import { ModalProvider } from "../context/ModalContext";

function MyApp({ Component, pageProps }) {
  return (
    <ModalProvider>
      <MainTemplate>
        <Component {...pageProps} />
      </MainTemplate>
    </ModalProvider>
  );
}

export default MyApp;
