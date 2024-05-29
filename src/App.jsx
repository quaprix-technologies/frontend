import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage";
import { Header } from "./Component/Header/Header";
import { Footer } from "./Component/Footer/Footer";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Term_Condition from "./pages/Term&Condition";

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
  ]);

  return <RouterProvider router={router} />;
};

export default App;
