import { Routes, Route, Navigate } from "react-router-dom";
import Home_main from "./pages/home/Home_main";
import Project_main from "./pages/projects/Project_main";
import Aboutme_main from "./pages/about/Aboutme_main";
import Contactme_main from "./pages/contact/Contactme_main";
import Navbar from "./pages/navbar/Navbar";

function App() {
  console.log("App component is rendering"); // logs each render

  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              {console.log("Rendering Home_main")}
              <Home_main />
            </>
          }
        />
        <Route
          path="/projects"
          element={
            <>
              {console.log("Rendering Project_main")}
              <Project_main />
            </>
          }
        />
        <Route
          path="/aboutme"
          element={
            <>
              {console.log("Rendering Aboutme_main")}
              <Aboutme_main />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              {console.log("Rendering Contactme_main")}
              <Contactme_main />
            </>
          }
        />

        {/* Redirect any unknown routes to home */}
        <Route
          path="*"
          element={
            <>
              {console.log("Unknown route, redirecting to Home")}
              <Navigate to="/" replace />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
