
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
//import Divider from "@mui/material/Divider";

// Template components
import MKBox from "components/MKBox";

// Template layout components
import DefaultCounterCard from "components/Custom/DefaultCounterCard";

function Counters() {
  return (
    <MKBox id="count" component="section" py={3} sx={{ mb: 5 }}>
      <Container>
        <Grid container item xs={12} lg={9} sx={{ mx: "auto" }}>
          <Grid item xs={12} md={3}>
            <DefaultCounterCard
              count={78}
              suffix="+"
              title="Creatives"
              description=""
            />
          </Grid>
          <Grid item xs={12} md={3} >
            <DefaultCounterCard
              count={115}
              suffix="+"
              title="Branded"
              description=""
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <DefaultCounterCard
              count={84}
              suffix="+"
              title="Events"
              description=""
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <DefaultCounterCard
              count={33}
              suffix="+"
              title="Animations"
              description=""
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Counters;
