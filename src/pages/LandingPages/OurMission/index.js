import ReactGA from 'react-ga4';

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

function OurMission() {
  ReactGA.send({ hitType: "pageview", page: "/our-mission", title: "Our Mission" });
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
              color="white"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Welcome to Dark Falcon Productions
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
          <MKTypography variant="body2" color="white">
          With a wealth of experience working alongside industry leaders, Dark Falcon Productions brings you compelling content that elevates your business. We understand that your vision drives our mission, and during our consultation sessions, we lend an attentive ear to your ideas. Together, we refine and develop your concepts into tangible masterpieces.
          </MKTypography>
<br/>
          <MKTypography variant="h2Alt" fontWeight="bold" color="primary">
          Client-Centric Approach
          </MKTypography>
          <MKTypography variant="body2" color="white">
          At Dark Falcon Productions, success thrives on a uniquely creative partnership with our clients. We pride ourselves on transforming their visions and inputs into dynamic masterpieces that captivate and resonate.
<br/><br/>
Our approach revolves around more than just turning ideas into visuals – it's a journey of collaboration and ingenuity. We recognize the distinctiveness of each client's vision and the value of their input. Rather than just listening, we actively engage in a creative dialogue. This interactive process becomes the heartbeat of every project, fueling our determination to craft something truly extraordinary.
          </MKTypography>
          <br/>
          <MKTypography variant="h2Alt" fontWeight="bold" color="primary">
          Building Rapport
          </MKTypography>
          <MKTypography variant="body2" color="white">
          The recognition of our production team's dedication and hard work speaks for itself. Our clients, ranging from global leaders to local businesses, have acknowledged our commitment, resulting in repeat partnerships. This rapport is a testament to our dedication to delivering excellence every step of the way.
          </MKTypography>
          <br/>
          <MKTypography variant="h2Alt" fontWeight="bold" color="primary">
          Our Creative Team
          </MKTypography>
          <MKTypography variant="body2" color="white">
          Behind Dark Falcon Productions is a team that seamlessly blends top-notch equipment with approachable creativity. Our passionate media professionals possess the expertise and resources to meet deadlines without compromising quality. With each project we undertake, we deliver on our promises, exceeding expectations.
          </MKTypography>
          <br/>
          <MKTypography variant="h2Alt" fontWeight="bold" color="primary">
          Why Choose Dark Falcon Productions?
          </MKTypography>
          <MKTypography variant="body2" color="white">
          Dark Falcon Productions is your creative ally, offering a proven track record in producing impactful content. With a focus on collaboration, client satisfaction, and unwavering dedication, we stand as the partner that transforms your vision into reality.
          </MKTypography>
<br/>
<MKTypography variant="h5Alt" fontWeight="bold" color="primary">
Experience the power of storytelling with Dark Falcon Productions.
          </MKTypography>

        </Grid>
        </Card>
        <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
      </MKBox>
    </>
  );
}

export default OurMission;
