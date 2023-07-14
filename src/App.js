import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/LoginPage"; 
import Home from "./pages/Home";
import { ContextDatas } from "./context/mycontext";
import NotFoundPage from "./components/NotFoundPage";
import { ROUTES } from "./constants";

function App() {
  const {isLoggedIn } = ContextDatas()
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path={ROUTES.home} element={<Home />} />
          <Route path={ROUTES.login}  element={<LoginPage />} />
          {isLoggedIn ? (
            <Route path={ROUTES.dashobard} element={<Dashboard />}></Route>
          ) : (
            <Route path="*" element={<Navigate to={"/"} />}></Route>
          )}
          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
