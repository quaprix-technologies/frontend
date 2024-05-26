import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage";
import { Header } from "./Component/Header/Header";
import { Footer } from "./Component/Footer/Footer";

const App = () => {
  const FullPage = ({ children }) => {
    return (
      <>
        <Header />
        {children}
        <Footer />
      </>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <FullPage>
          <Homepage />
        </FullPage>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
