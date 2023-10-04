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

// Testimonial page components
import DesignBlocks from "pages/ServicePages/Testimonials/sections/DesignBlocks";
import ThreeSteps from "components/Custom/ThreeSteps";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/headers/bg-about-us.jpg";

function Testimonials() {
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
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid
            container
            item
            xs={12}
            lg={8}
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            sx={{ mx: "auto", textAlign: "center" }}
          >
            <MKTypography
              variant="h1Alt"
              color="white"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              TESTIMONIAL VIDEOS
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
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

export default Testimonials;
