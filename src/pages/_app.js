import Layout from "../component/layout";
import "../../style.css";

export default function App({ Component, pageProps }) {
  return (
    <Layout cla>
      <Component {...pageProps} />
    </Layout>
  );
}
