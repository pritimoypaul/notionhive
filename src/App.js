import Home from "./pages/Home";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <Home />
      </div>
    </RecoilRoot>
  );
}

export default App;
