import "./index.css";
import "./App.css";
import PageSections from "./pages/PageSections";
import ContactMenu from "./components/ContactMenu";
import SvgBorders from "./components/SvgBorders";

function App() {
  return (
    <div className="App">
      {/* <SvgBorders /> */}

      <PageSections />
    </div>
  );
}

export default App;
