import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import App from "./App";
import "./index.css";
import Consulting from "./innerPages/Consulting";
import Sales from "./innerPages/Liaison";
import Management from "./innerPages/Management";
import { Navbar } from "./components";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error occurred:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

const ScrollTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to the top when the route changes
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const MainLayout = () => {
  return (
    <div className="min-h-screen">
      <ScrollTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/consulting" element={<Consulting />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/management" element={<Management />} />
        <Route path="*" element={<App />} />
      </Routes>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <ErrorBoundary
        fallback={
          <div className="flex justify-center items-center md:mt-20 h-full md:h-60">
            <img src={Error} alt="Error occurred" />
          </div>
        }
      >
        <MainLayout />
      </ErrorBoundary>
    </Router>
  </React.StrictMode>
);
