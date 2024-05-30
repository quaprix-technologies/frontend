import React, { useState } from "react";
import "./Cards.css";
import dropDownIcon from "../../../assets/drop-down.png";
import icon1 from "../../../assets/front-end.png";
import icon2 from "../../../assets/back-end.png";
import icon3 from "../../../assets/app-dev.png";
import icon4 from "../../../assets/product-managment.png";
import icon5 from "../../../assets/mobile-app.png";
import icon6 from "../../../assets/migration.png";
import icon7 from "../../../assets/performance-testing.png";
import icon8 from "../../../assets/web-mobile-testing.png";
import icon9 from "../../../assets/automation.png";
import icon10 from "../../../assets/software-testing-lifecycle.png";
import icon11 from "../../../assets/security-testing.png";
import icon12 from "../../../assets/database-testing.png";
import icon13 from "../../../assets/ui.png";
import icon14 from "../../../assets/ux.png";
import icon15 from "../../../assets/responsive.png";

const Card = ({ icon, title, content }) => (
  <div className="cards">
    <div className="card-header">
      <div className="card-icon-container">
        {icon && <img src={icon} alt="icon" className="card-icon" />}
      </div>
      <div className="card-title">
        <h3>{title}</h3>
      </div>
    </div>
    <div className="card-content">
      <p>{content}</p>
    </div>
  </div>
);

const Section = ({ icon, title, rows, isOpen, onClick }) => (
  <div className="section">
    <div onClick={onClick} className="section-header">
      <h2 className="section-title">{title}</h2>
      {icon && <img src={icon} alt="section icon" className="section-icon" />}
    </div>
    {isOpen && (
      <div className="section-content">
        {rows.map((row, index) => (
          <div className="row" key={index}>
            {row.map((card, cardIndex) => (
              <Card
                key={cardIndex}
                icon={card.icon}
                title={card.title}
                content={card.content}
              />
            ))}
          </div>
        ))}
      </div>
    )}
  </div>
);

const App = () => {
  const [openSectionIndex, setOpenSectionIndex] = useState(null);

  const sections = [
    {
      icon: dropDownIcon,
      title: "Software Development",
      rows: [
        [
          {
            icon: icon1,
            title: "Front-End Development",
            content:
              "We specialise in building customised solutions to meet your specific requirements, with a focus on delivering distinctive operational competency tailored to your unique business needs.",
          },
          {
            icon: icon2,
            title: "Back-End Development",
            content:
              "Behind every perfect user experience lies a robust back-end. Our developers design and build the infrastructure that powers your applications, ensuring efficiency and security.",
          },
          {
            icon: icon3,
            title: "Native Mobile App development ",
            content:
              "Crafting intuitive, high-performance native mobile apps tailored to your vision. Our expert team delivers seamless user experiences across iOS and Android platforms, ensuring your app stands out in the digital marketplace.",
          },
        ],
        [
          {
            icon: icon4,
            title: "Product life cycle management",
            content:
              "Empower your product development with our full-cycle PLM solutions. Manage ideation to launch efficiently, streamline collaboration, and maximize value. Bring products to market faster and smarter with our expertise.",
          },
          {
            icon: icon5,
            title: "Cross-Platform Mobile App Development",
            content:
              "Unlock wider audience reach with our cross-platform mobile app development. Seamlessly deploy apps across multiple platforms, saving time and resources while delivering consistent user experiences. Expand your digital footprint effortlessly.",
          },
          {
            icon: icon6,
            title: "Migration and Modernization",
            content:
              "Upgrade and optimize your digital ecosystem with our migration and modernization solutions. Seamlessly transition legacy systems to modern platforms, ensuring enhanced performance, security, and scalability for sustainable growth.",
          },
        ],
      ],
    },
    {
      title: "Software Testing",
      icon: dropDownIcon,
      rows: [
        [
          {
            icon: icon7,
            title: "Performance Testing ",
            content:
              "Elevate your software's performance with our meticulous performance testing services. Identify and address bottlenecks, ensuring optimal speed, reliability, and scalability to deliver exceptional user experiences every time.",
          },
          {
            icon: icon8,
            title: "Web and mobile based Testing ",
            content:
              "Ensure flawless user experiences across web and mobile platforms with our comprehensive testing solutions. From functionality to compatibility, our expert team guarantees smooth performance across all devices and browsers.",
          },
          {
            icon: icon9,
            title: "Automation Testing",
            content:
              "Boost efficiency and accuracy in software testing with our automation solutions. Our advanced tools and expertise streamline the testing process, ensuring rapid deployment and superior quality for your applications.",
          },
        ],
        [
          {
            icon: icon10,
            title: "Software Testing life cycle",
            content:
              "Navigate the entire software testing life cycle seamlessly with our expert guidance. From planning to execution and beyond, we ensure rigorous testing methodologies for flawless software performance and reliability.",
          },
          {
            icon: icon11,
            title: "Security Testing",
            content:
              "Safeguard your digital assets with our robust security testing services. We meticulously assess vulnerabilities and fortify your systems against potential threats, ensuring the integrity and confidentiality of your data.",
          },
          {
            icon: icon12,
            title: "Database testing",
            content:
              "Ensure the reliability and efficiency of your databases with our comprehensive testing solutions. From data integrity to performance, we meticulously assess and optimize database systems for seamless operation.",
          },
        ],
      ],
    },
    {
      title: "UI/UX Design",
      icon: dropDownIcon,
      rows: [
        [
          {
            icon: icon13,
            title: "User Interface (UI) Design",
            content:
              "Elevate user experiences with our captivating UI design services. From intuitive layouts to visually stunning interfaces, we craft designs that engage users and enhance usability across web and mobile platforms.",
          },
          {
            icon: icon14,
            title: "User Experience UX Design",
            content:
              "Enhance user satisfaction and engagement with our UX design services. We prioritize intuitive interfaces, smooth interactions, and meaningful user journeys to ensure exceptional experiences across digital platforms.",
          },
          {
            icon: icon15,
            title: "Responsive Web Design",
            content:
              "Deliver seamless user experiences across all devices with our responsive web design solutions. From desktops to mobile devices, we ensure your website adapts flawlessly to every screen size and orientation.",
          },
        ],
      ],
    },
  ];

  return (
    <div className="App">
      {sections.map((section, index) => (
        <Section
          key={index}
          icon={section.icon}
          title={section.title}
          rows={section.rows}
          isOpen={openSectionIndex === index}
          onClick={() =>
            setOpenSectionIndex(openSectionIndex === index ? null : index)
          }
        />
      ))}
    </div>
  );
};

export default App;
