import "../styles/globals.css";
import { FirstContextProvider } from "../components/utils/context";

export default function App({ Component, pageProps }) {
  return (
    <FirstContextProvider>
      <Component {...pageProps} />;
    </FirstContextProvider>
  );
}
// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       const res = await fetch("https://dev.to/api/articles?per_page=4&top=1");
//       const data = await res.json();
//       setArticles(data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   fetchData();
// }, []);
