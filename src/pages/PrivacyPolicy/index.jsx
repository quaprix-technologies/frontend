import React, { useEffect } from "react";
import "./styles.css";

const PrivacyPolicy = () => {

  useEffect(() => {
    document.title = "Privacy Policy";
  }, []);

  return (
    <div className="privacy-policy">
      <h1>Privacy Policy</h1>

      <section>
        <h2>What Information We Collect</h2>
        <p>
          We may collect personal information from you in several ways when you
          interact with our website or use our services. This information may
          include:
        </p>
        <ul>
          <li>
            <strong>Personal Information:</strong> Name, contact information
            (email, phone number), demographic information (postal code,
            preferences, interests), and other details relevant to surveys or
            offers.
          </li>
          <li>
            <strong>Non-Personal Information:</strong> Browser type, operating
            system, device information, and website usage statistics (collected
            through cookies and analytics).
          </li>
        </ul>
      </section>

      <section>
        <h2>How We Use Your Information</h2>
        <p>
          We may use the information we collect for various purposes, including:
        </p>
        <ul>
          <li>Providing and personalizing our services.</li>
          <li>Communicating with you (inquiries, customer support).</li>
          <li>Improving our products and services.</li>
          <li>Sending promotional emails (with your consent).</li>
          <li>Conducting market research or surveys.</li>
        </ul>
      </section>

      <section>
        <h2>Disclosure of Your Information</h2>
        <p>
          We may disclose limited personal information to third parties only in
          the following circumstances:
        </p>
        <ul>
          <li>
            Subsidiaries, affiliates, and service providers who assist us with
            website operation and service delivery.
          </li>
          <li>
            To comply with legal obligations, enforce policies, or protect our
            rights.
          </li>
          <li>With your consent or as permitted by law.</li>
        </ul>
      </section>

      <section>
        <h2>Security of Your Information</h2>
        <p>
          We take information security seriously. We have implemented
          appropriate physical, electronic, and managerial procedures to
          safeguard the information we collect online.
        </p>
      </section>

      <section>
        <h2>Links to Other Websites</h2>
        <p>
          Our website may contain links to other websites. We are not
          responsible for the privacy practices of these sites. We recommend
          reviewing their privacy policies before providing any personal
          information.
        </p>
      </section>

      <section>
        <h2>Changes to This Privacy Policy</h2>
        <p>
          We reserve the right to update this Privacy Policy at any time. We
          will post any changes on this page. Continued use of our website or
          services constitutes your acceptance of the revised Privacy Policy.
        </p>
      </section>

      <section>
        <h2>Contact Us</h2>
        <p>
          If you have any questions about our Privacy Policy or information
          handling practices, please contact us at{" "}
          <a href="mailto:info@quaprix.com">info@quaprix.com</a>.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
