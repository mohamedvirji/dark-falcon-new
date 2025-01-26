import ReactGA from "react-ga4";
import { Link } from "react-router-dom";

// @mui material icons
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

// Template components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

// Template layout components
import DefaultNavbar from "layouts/DefaultNavbar";
import DefaultFooter from "layouts/DefaultFooter";

// Brand page sections
import DesignBlocks from "pages/ServicePages/Brand/sections/DesignBlocks";
// import ThreeSteps from "components/Custom/ThreeSteps";
import BackgroundVideo from "components/Custom/BackgroundVideo";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
// import bgImage from "assets/images/headers/BrandHeader.png";

function Brand() {
  ReactGA.send({ hitType: "pageview", page: "/brand", title: "Brand Videos" });
  const videoSource = "https://d2u61031vokrmr.cloudfront.net/webp/videos/Creative+Brand.mp4";
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
      {/* <MKBox
        minHeight="85vh"
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
              BRAND VIDEOS
            </MKTypography>
          </Grid>
        </Container>
      </MKBox> */}
      <BackgroundVideo blur={2} videoSource={videoSource}>
        <div className="content">
          <div className="sub-content">
            <MKTypography
              mt="45%"
              variant="h1AltVideo"
              color="white"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              BRAND VIDEOS
            </MKTypography>
          </div>
        </div>
      </BackgroundVideo>
      <a href="#portfolio">
        <div
          style={{
            textAlign: "center",
            color: "#ec407a",
            cursor: "pointer",
            marginTop: "2%",
            marginBottom: "5%",
          }}
        >
          <KeyboardDoubleArrowDownIcon fontSize="large" />
        </div>
      </a>
      {/* <ThreeSteps/> */}
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
        <br />
        <Link to="/contact">
          <MKButton
            variant="gradient"
            color="primary"
            sx={{ color: ({ palette: { light } }) => light.main }}
          >
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

export default Brand;
