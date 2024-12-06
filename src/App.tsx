import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./scenes/navbar";
import Home from "./scenes/home";
import Benefits from "./scenes/benefits";
import { SelectedPage as SelectedPageType } from "./shared/types";
import OurClasses from "./scenes/ourClasses";
import ContactUs from "./scenes/ContactUs";
import Footer from "./scenes/footer/footer";
import Login from "./scenes/auth/Login";
import Signup from "./scenes/auth/Signup";
import Payment from "./scenes/Payment/Payment";
import Exercises from "./scenes/exercises/Exercises";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPageType>(
    SelectedPageType.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false); // Tracks login status

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPageType.Home);
      } else {
        setIsTopOfPage(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setSelectedPage]);

  return (
    <BrowserRouter>
      <div className="app min-h-screen bg-gray-200">
        <Routes>
          {/* Login Page */}
          <Route
            path="/login"
            element={<Login setIsAuthenticated={setIsAuthenticated} />}
          />

          {/* Signup Page */}
          <Route
            path="/signup"
            element={<Signup setIsAuthenticated={setIsAuthenticated} />}
          />

          {/* Landing Page (Protected Route) */}
          <Route
            path="/"
            element={
              isAuthenticated ? (
                <>
                  <Navbar
                    isTopOfPage={isTopOfPage}
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Home setSelectedPage={setSelectedPage} />
                  <Benefits setSelectedPage={setSelectedPage} />
                  <OurClasses setSelectedPage={setSelectedPage} />
                  <ContactUs setSelectedPage={setSelectedPage} />
                  <Footer />
                </>
              ) : (
                <Navigate to="/login" />
              )
            }
          />

          {/* Catch-all Route for Invalid Paths */}
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/exercises" element={<Exercises />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
