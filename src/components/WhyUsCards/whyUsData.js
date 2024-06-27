import {
  SERVICES_PAGE_PATH,
  SERVICE_CARDS_CONTAINER_ID,
} from "../../constants";
import group_icon from "../../assets/icons/group.png";
import mortarboard_icon from "../../assets/icons/mortarboard.png";
import tech_icon from "../../assets/icons/coding.png";

const WHY_US_DATA = [
  {
    icon: group_icon,
    title: "Our Story",
    content:
      "We started as a small team of IT enthusiasts who wanted to help small businesses overcome their technology challenges. Today, we have grown into a leading provider of IT services.",
  },
  {
    icon: mortarboard_icon,
    title: "Our Mission",
    content:
      "To revolutionize the IT industry by pushing the boundaries of innovation. We strive to be at the forefront of technological advancement, continuously pioneering new solutions that empower businesses and individuals to thrive in a rapidly evolving digital landscape.",
  },
  {
    icon: tech_icon,
    title: "Technologies",
    content:
      "We offer a comprehensive range of IT services. Our services are designed to help small businesses thrive in today's digital world.",
    link: {
      label: "Learn More",
      url: SERVICES_PAGE_PATH,
      elementId: SERVICE_CARDS_CONTAINER_ID,
    },
  },
];

export default WHY_US_DATA;
