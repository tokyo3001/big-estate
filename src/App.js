import Banner from "./components/Banner";
import Choose from "./components/Choose";
import Clients from "./components/Clients";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Partners from "./components/Partners";
import Works from "./components/Works";

function App() {
  return (
    <div>
      <Header/>
      <Banner/>
      <Partners/>
      <Choose/>
      <Works/>
      <Clients/>
      <Footer/>
    </div>
  );
}

export default App;
