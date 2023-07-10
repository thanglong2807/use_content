import HomeProvider from "./HomeProvider";
import Home from "./pages/Home";
import "./styles.css";
export default function App() {
  return (
    <div className="App">
      <HomeProvider>
        <Home />
      </HomeProvider>
    </div>
  );
}
