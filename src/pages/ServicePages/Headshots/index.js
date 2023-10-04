import { Link } from "react-router-dom";
// import { useAuth } from "auth-context/auth.context";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// @mui material icons
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

// Template components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

// Template layout components
import DefaultNavbar from "layouts/DefaultNavbar";
import DefaultFooter from "layouts/DefaultFooter";

// Creative page sections
import DesignBlocks from "pages/ServicePages/Headshots/sections/DesignBlocks";
import ThreeSteps from "components/Custom/ThreeSteps";
import BackgroundVideo from "components/Custom/BackgroundVideo";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/headers/bg-about-us.jpg";

function Headshots() {
  const videoSource = "https://darkfalcon-assets.s3.eu-west-2.amazonaws.com/videos/Headshot+Photography.mp4";
  return (
    <>
        <DefaultNavbar
          routes={routes}
          action={{
            type: "internal",
            route: "/contact",
            label: "quick quote",
            color: "white",
          }}
          light
          transparent
          sticky
        />
      <BackgroundVideo
          blur={2}
          videoSource={videoSource}>
          <div className='content'>
            <div className='sub-content'>
            <MKTypography
            mt="45%"
              variant="h1AltVideo"
              color="white"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })
            }
            >
              HEADSHOTS
            </MKTypography>
            </div>
          </div>
         
        </BackgroundVideo>
        <a href="#three-step-method"><h1 style={{textAlign:"center", color:"#ec407a", cursor:"pointer"}}><KeyboardDoubleArrowDownIcon fontSize="large"/></h1></a>
      <ThreeSteps/>
      <DesignBlocks />
        <MKBox display="flex" justifyContent="center" alignItems="center" flexDirection="column">
        <MKTypography
              variant="h1"
              color="white"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              GET IN TOUCH
            </MKTypography>
            <br/>
            <Link to="/contact">
            <MKButton variant="gradient" color="primary" sx={{ color: ({ palette: { light } }) => light.main }}>
              quick quote
            </MKButton>
            </Link>
            </MKBox>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Headshots;
