import { BrowserRouter as Router } from "react-router-dom";
import Hero from "./components/Hero";
import Products from "./components/Products";
import { GlobalStyle } from "./GlobalStyle";
import { productData, productDataTwo } from "./components/Products/data";
import Feature from "./components/feature";
import Footer from "./components/footer";
//
function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading="choose your favorite" data={productData} />
      <Feature />
      <Products heading="Sweet Treats for you" data={productDataTwo} />
      <Footer />
    </Router>
  );
}

export default App;
