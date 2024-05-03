// import { dark } from "@mui/material/styles/createPalette";
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

// Template layout components
import DefaultNavbar from "layouts/DefaultNavbar";
import DefaultFooter from "layouts/DefaultFooter";

// Home page sections
import Counters from "pages/Home/sections/Counters";
import Testimonials from "pages/Home/sections/Testimonials";
import GallerySelector from "components/Custom/Gallery/GallerySelector";
import ThreeSteps from "components/Custom/ThreeSteps";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/headers/df-bg.jpeg"

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
              variant="h1Alt2"
              color="white"
              mt={25}
              ml={5}
              mb={1}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                }
              })}
              className="animated"
            >
              Discover The <br/>Falcon
            </MKTypography>
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
        <ThreeSteps/>
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Home;
