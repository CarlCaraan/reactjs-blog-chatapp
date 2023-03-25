import { BrowserRouter, Route, Switch } from "react-router-dom";

// Styles
import "./App.css";

// Context Api
import { useAuthContext } from "./hooks/useAuthContext";

// Pages and Components
import Dashboard from "./pages/dashboard/Dashboard";
import Create from "./pages/create/Create";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Project from "./pages/project/ProjectDetails";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  const { authIsReady, user } = useAuthContext();

  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          {/* Sidebar */}
          <Sidebar />
          <div className="container">
            {/* Navigation */}
            <Navbar />

            {/* All Routes */}
            <Switch>
              <Route exact path="/">
                <Dashboard />
              </Route>
              <Route path="/create">
                <Create />
              </Route>
              <Route path="/projects/:id">
                <Project />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/signup">
                <Signup />
              </Route>
            </Switch>
          </div>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
