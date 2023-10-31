import "./index.css";
import "./App.css";
import PageSections from "./pages/PageSections";
import ContactMenu from "./components/ContactMenu";
import SvgBorders from "./components/SvgBorders";
import Fireflies from "./components/Fireflies";

function App() {
  return (
    <div className="App">
      {/* <SvgBorders /> */}
      <ContactMenu />

      <PageSections />
    </div>
  );
}

export default App;
