import "./App.css";

// Context Api
import { useAuthContext } from "./hooks/useAuthContext";

function App() {
  const { authIsReady, user } = useAuthContext();

  return <div className="App">{authIsReady && <div></div>}</div>;
}

export default App;
