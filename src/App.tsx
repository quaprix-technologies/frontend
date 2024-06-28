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
import {
  ABOUT_US_PAGE_PATH,
  CAREERS_PAGE_PATH,
  CONTACT_US_PAGE_PATH,
  HOME_PAGE_PATH,
  PRIVACY_POLICY_PAGE_PATH,
  SERVICES_PAGE_PATH,
  TERMS_AND_CONDITIONS_PAGE_PATH,
} from "./constants.js";

type FullPageProps = {
  children: JSX.Element;
};

const App: React.FC = () => {
  const FullPage: React.FC<FullPageProps> = ({ children }) => (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );

  const router = createBrowserRouter([
    {
      path: HOME_PAGE_PATH,
      element: (
        <FullPage>
          <Homepage />
        </FullPage>
      ),
    },
    {
      path: CONTACT_US_PAGE_PATH,
      element: (
        <FullPage>
          <ContactUs />
        </FullPage>
      ),
    },
    {
      path: ABOUT_US_PAGE_PATH,
      element: (
        <FullPage>
          <AboutUs />
        </FullPage>
      ),
    },
    {
      path: PRIVACY_POLICY_PAGE_PATH,
      element: (
        <FullPage>
          <PrivacyPolicy />
        </FullPage>
      ),
    },
    {
      path: TERMS_AND_CONDITIONS_PAGE_PATH,
      element: (
        <FullPage>
          <Term_Condition />
        </FullPage>
      ),
    },
    {
      path: SERVICES_PAGE_PATH,
      element: (
        <FullPage>
          <Services />
        </FullPage>
      ),
    },
    {
      path: CAREERS_PAGE_PATH,
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
