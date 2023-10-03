/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import 'assets/css/App.css'
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

// Material Kit 2 React examples
import DefaultNavbar from "layouts/DefaultNavbar";
import DefaultFooter from "layouts/DefaultFooter";

// About Us page sections
import Information from "pages/Home/sections/Information";
import Testimonials from "pages/Home/sections/Testimonials";
import Counters from "pages/Home/sections/Counters";
// import Gallery from "components/Custom/Gallery/Gallery";
import GallerySelector from "components/Custom/Gallery/GallerySelector";
// import GalleryMobile from "components/Custom/Gallery/GalleryMobile";
import ThreeSteps from "components/Custom/ThreeSteps";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/df-bg.jpeg"
// import { dark } from "@mui/material/styles/createPalette";

// import { useAuth } from "auth-context/auth.context";

function Home() {
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
        minHeight="100vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0),
              rgba(gradients.dark.state, 0)
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
            alignItems="left"
            flexDirection="column"
          >
            <MKTypography
              variant="h1"
              color="white"
              mt={25}
              ml={5}
              mb={1}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
              className="animated"
            >
              Discover The <br/>Falcon
            </MKTypography>
            {/* <MKButton color="primary" style={{width:'15%'}} sx={{ color: ({ palette: { light } }) => light.main }}>
              quick quote
            </MKButton> */}
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
          backgroundColor: "#212529 !important"
        }}
      >
        <a href="#count"><h1 style={{textAlign:"center", color:"#ec407a", cursor:"pointer"}}><KeyboardDoubleArrowDownIcon fontSize="large"/></h1></a>
        
        <Counters/>
        <Testimonials/>
        <GallerySelector/>
        {/* <GalleryMobile/> */}
        <ThreeSteps/>
        {/* <Information/> */}
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Home;
