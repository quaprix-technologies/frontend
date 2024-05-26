import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage";
import { Header } from "./Component/Header/Header";
import { Footer } from "./Component/Footer/Footer";
import ContactUs from "./pages/ContactUs";

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
  ]);

  return <RouterProvider router={router} />;
};

export default App;
