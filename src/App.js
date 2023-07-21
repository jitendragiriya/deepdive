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
import Footer from "./components/Footer";
import Services from "./components/Services";
import RegisterPage from "./pages/RegisterPage";

function App() {
  const { isLoggedIn } = ContextDatas();
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path={ROUTES.home} element={<Home />} />
          <Route path={ROUTES.services} element={<Services />} />
          <Route path={ROUTES.login} element={<LoginPage />} />
          <Route path={ROUTES.register} element={<RegisterPage />} />

          <Route path={ROUTES.dashobard} element={<Dashboard />}></Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
