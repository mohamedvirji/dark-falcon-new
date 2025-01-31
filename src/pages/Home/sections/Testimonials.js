// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// Template components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKAvatar from "components/MKAvatar";

// Template layout components
import DefaultReviewCard from "components/Custom/DefaultReviewCard";

// Images
import hollie from "assets/images/new-hollie.png";
import rob from "assets/images/new-rob.png";
import owen from "assets/images/new-owen.png";

const imagesPrefix = "https://d2u61031vokrmr.cloudfront.net/webp/logos";

function Testimonials() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container spacing={3} sx={{ mt: 0 }}>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              color="#212529"
              name="Owen Hutchins"
              date="My Vital Metrics"
              review="Working with Dark Falcon was really easy from the very beginning. They had reviewed the footage to be filmed, quickly got comfortable with the space, and had real creative flair for understanding what footage was going to be good and useful, and versatile. Absolutely 10/10 for the shooting day."
              rating={5}
              image={owen}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              color="#212529"
              name="Rob Foster"
              date="GoTo"
              review="The team is one of the most agile, focused and creative that I have worked with.
              Nothing is ever too much for them and they always find a quality solution while generating fresh ideas.
              Not only do they complete the projects on time and to a very high standard - but they spent time educating me about their world which enabled the relationship to flourish."
              rating={5}
              image={rob}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              color="#212529"
              name="Hollie Smith"
              date="Grayce"
              review="We're really pleased with the videos that Dark Falcon have produced for us. A very approachable, professional team who worked closely with us to ensure we championed our brief. Highly recommend."
              rating={5}
              image={hollie}
            />
          </Grid>
        </Grid>
        <Divider sx={{ my: 6 }} />
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={6} md={4} lg={2}>
            <MKBox
              component="img"
              src={`${imagesPrefix}/TE-t.webp`}
              alt="TotalEnergies Logo"
              width="100%"
              opacity={1}
            />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox
              component="img"
              src={`${imagesPrefix}/LastPass-t.webp`}
              alt="LastPass Logo"
              width="100%"
              opacity={1}
            />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox
              component="img"
              src={`${imagesPrefix}/NHS-t.webp`}
              alt="NHS Logo"
              width="100%"
              opacity={1}
            />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox
              component="img"
              src={`${imagesPrefix}/RC2-t.webp`}
              alt="Ring Central Logo"
              width="100%"
              opacity={1}
            />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox
              component="img"
              src={`${imagesPrefix}/GoTo-t.webp`}
              alt="GoTo Logo"
              width="100%"
              opacity={1}
            />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox
              component="img"
              src={`${imagesPrefix}/profitero-t.webp`}
              alt="Profitero Logo"
              width="100%"
              opacity={1}
            />
          </Grid>
        </Grid>
        <Divider sx={{ my: 4 }} />
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={6} md={4} lg={2}>
            {" "}
            <MKBox
              component="img"
              src={`${imagesPrefix}/ATEN.webp`}
              alt="ATEN Logo"
              width="100%"
              opacity={1}
            />{" "}
          </Grid>{" "}
          <Grid item xs={6} md={4} lg={2}>
            {" "}
            <MKBox
              component="img"
              src={`${imagesPrefix}/custom.webp`}
              alt="Custom Logo"
              width="100%"
              opacity={1}
            />{" "}
          </Grid>{" "}
          <Grid item xs={6} md={4} lg={2}>
            {" "}
            <MKBox
              component="img"
              src={`${imagesPrefix}/upland.webp`}
              alt="Upland Logo"
              width="100%"
              opacity={1}
            />{" "}
          </Grid>{" "}
          <Grid item xs={6} md={4} lg={2}>
            {" "}
            <MKBox
              component="img"
              src={`${imagesPrefix}/harley+street.webp`}
              alt="Harley Street Logo"
              width="100%"
              opacity={1}
            />{" "}
          </Grid>{" "}
          <Grid item xs={6} md={4} lg={2}>
            {" "}
            <MKBox
              component="img"
              src={`${imagesPrefix}/SMI.webp`}
              alt="Maritime Logo"
              width="100%"
              opacity={1}
            />{" "}
          </Grid>{" "}
          {/* <Grid item xs={6} md={4} lg={2}>
            {" "}
            <MKBox
              component="img"
              src={`${imagesPrefix}/alzheimers.webp`}
              alt="Alzheimer's Logo"
              width="100%"
              opacity={1}
            />{" "}
          </Grid>{" "} */}
          <Grid item xs={6} md={4} lg={2}>
            {" "}
            <MKBox
              component="img"
              src={`${imagesPrefix}/ivg.webp`}
              alt="IVG Logo"
              width="100%"
              opacity={1}
            />{" "}
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Testimonials;
