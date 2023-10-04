// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Instagram from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

// Template layout components
import ContactUs from "layouts/pages/landing-pages/contact-us";
import OurMission from "layouts/pages/landing-pages/ourmission";

// Template components components
import MKTypography from "components/MKTypography";

// Images
import dfLogo from "assets/images/df-logo_5.png";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "Dark Falcon Productions",
    image: dfLogo,
    route: "/",
  },
  socials: [
    {
      icon: <YouTubeIcon />,
      link: "https://www.youtube.com/user/darkfalconprod",
    },
    {
      icon: <LinkedIn />,
      link: "https://www.linkedin.com/company/dark-falcon-productions/",
    },
    {
      icon: <Instagram />,
      link: "https://www.instagram.com/darkfalconproductions/",
    },
    {
      icon: <FacebookIcon />,
      link: "https://www.facebook.com/darkfalconproductions/",
    },
  ],
  menus: [
    {
      name: "contact us",
      items: [
        { name: "info@darkfalconproductions.com", href: "mailto:info@darkfalconproductions.com" },
        { name: "+ 44 (0) 208 194 6178", href: "tel:+442081946178" },
      ],
    },
    {
      name: "",
      items: [
      ],
    },
    {
      name: "more",
      items: [
        { name: "our mission", route: "/about", component: <OurMission/>},
        { name: "message us", route: "/contact", component: <ContactUs/>},
      ],
      route: "/contact"
    },
    {
      name: "",
      items: [
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date} Dark Falcon Productions{" "}
    </MKTypography>
  ),
};
