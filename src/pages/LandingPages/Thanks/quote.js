// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

// Template components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Template layout components
import DefaultNavbar from "layouts/DefaultNavbar";
import DefaultFooter from "layouts/DefaultFooter";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/headers/our-mission-bg.jpg";

function ThankyouQuote() {
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
      <MKBox bgColor="transparent">
      <MKBox
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
        <Card
          sx={{
            py: 5,
            // mx: { xs: 25,lg: 50 },
            mt: 0,
            mb: 4,
            backgroundColor: ({ palette: { dark }, functions: { rgba } }) => rgba(dark.main, 0.8),
            backdropFilter: "saturate(200%) blur(30px)",
            boxShadow: ({ boxShadows: { xxl } }) => xxl,
            backgroundColor: "rgba(33, 37, 41, 0.5) !important"
          }}
        >
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
              variant="h1"
              color="primary"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Thank you
            </MKTypography>
            <MKTypography variant="body2" fontWeight="bold" color="white">
            Thank you for submitting your quote.
            <br/>
            Our Project Manager will be in touch shortly to discuss your project.
          </MKTypography>
          </Grid>
          </Card>
        </Container>
      </MKBox>
        {/* <Card
          sx={{
            p: 2,
            mx: { xs: 2, lg: 3 },
            mt: -8,
            mb: 4,
            // backgroundColor: ({ palette: { dark }, functions: { rgba } }) => rgba(dark.main, 0.8),
            // backdropFilter: "saturate(200%) blur(30px)",
            boxShadow: ({ boxShadows: { xxl } }) => xxl,
            backgroundColor: "#212529 !important"
          }}
        >
          
        <Grid
          container
          item
          xs={12}
          lg={8}
          flexDirection="column"
          alignItems="center"
          sx={{ textAlign: "center", my: 6, mx: "auto", px: 0.75 }}
        >
          <MKTypography variant="h2Alt" fontWeight="bold" color="primary">
            Our Commitment
          </MKTypography>

        </Grid>
        </Card> */}
        <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
      </MKBox>
    </>
  );
}

export default ThankyouQuote;
