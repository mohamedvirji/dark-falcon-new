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

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
//import Divider from "@mui/material/Divider";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";

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
