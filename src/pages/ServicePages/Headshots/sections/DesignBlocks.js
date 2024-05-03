
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Presentation page components
import ThumbnailCard from "components/Custom/ThumbnailCard";

// Data
import data from "pages/ServicePages/Headshots/sections/data/designBlocksData";

function DesignBlocks() {
  const renderData = data.map(({ key, items }) => (
    <Grid container spacing={3} sx={{ mb: 25 }} key={key}>
      {/* <Grid item xs={12} lg={3}>
        <MKBox position="sticky" top="100px" pb={{ xs: 2, lg: 6 }}>
          <MKTypography variant="h3" fontWeight="bold" mb={1}>
            {title}
          </MKTypography>
          <MKTypography variant="body2" fontWeight="regular" color="secondary" mb={1} pr={2}>
            {description}
          </MKTypography>
        </MKBox>
      </Grid> */}
      <Grid item xs={12} lg={12}>
        <Grid container spacing={3}>
          {items.map(({ image, name, key }) => (
            <Grid item xs={12} md={4} sx={{ mb: 2 }} key={key}>
                <ThumbnailCard image={image} name={name} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  ));

  return (
    <MKBox component="section" my={-20} py={6}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          flexDirection="column"
          alignItems="center"
          sx={{ textAlign: "center", my: 6, mx: "auto", px: 0.75 }}
        >
          {/* <MKBadge
            variant="contained"
            color="primary"
            badgeContent="Our Work"
            container
            sx={{ mb: 2 }}
            size="lg"
          /> */}
          {/* <MKTypography variant="h2" fontWeight="bold">
            Thumbnails
          </MKTypography>
          <MKTypography variant="body1" color="text">
            This is the layout for Thumbnails
          </MKTypography> */}
        </Grid>
      </Container>
      <Container sx={{ mt: 6 }}>{renderData}</Container>
    </MKBox>
  );
}

export default DesignBlocks;
