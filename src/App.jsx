import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Services from "./pages/Services";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Careers from "./pages/Careers";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Term_Condition from "./pages/TermsAndConditions";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  const FullPage = ({ children }) => (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <FullPage>
          <Homepage />
        </FullPage>
      ),
    },
    {
      path: "/contact-us",
      element: (
        <FullPage>
          <ContactUs />
        </FullPage>
      ),
    },
    {
      path: "/about-us",
      element: (
        <FullPage>
          <AboutUs />
        </FullPage>
      ),
    },
    {
      path: "/privacy-policy",
      element: (
        <FullPage>
          <PrivacyPolicy />
        </FullPage>
      ),
    },
    {
      path: "/term-condition",
      element: (
        <FullPage>
          <Term_Condition />
        </FullPage>
      ),
    },
    {
      path: "/services",
      element: (
        <FullPage>
          <Services />
        </FullPage>
      ),
    },
    {
      path: "/careers",
      element: (
        <FullPage>
          <Careers />
        </FullPage>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
