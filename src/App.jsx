import Content from "./components/Recipes";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <div className="body">
        <Header />
        <Content />
        <Footer />
      </div>
    </>
  );
}

export default App;
