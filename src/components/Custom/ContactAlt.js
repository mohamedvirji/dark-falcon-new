// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Template components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Images
import bgImage from "assets/images/examples/blog2.jpg";

// Custom components
import { QuoteForm } from "components/Custom/QuoteForm";

function ContactAlt() {
  return (
    <MKBox className="behind" component="section" py={{ xs: 0, lg: 6 }} mt={5}>
      <Container>
        <Grid container item px={6}>
          <MKBox
            width="100%"
            bgColor="white"
            borderRadius="xl"
            shadow="xl"
            mb={6}
            sx={{ overflow: "hidden" }}
          >
            <Grid container spacing={3}>
              <Grid item xs={12} lg={7}>
              <MKBox py={6} pl={6} pr={{ xs: 6, sm: 12 }} my="auto">
                    <MKTypography variant="h3" color="dark" mb={1}>
                      Contact Information
                    </MKTypography>
                    <MKTypography variant="body2" color="dark" opacity={0.8} mb={3}>
                    Select a quote form from the dropdown or fill out the contact form and a project manager will be in touch
                    </MKTypography>
                  </MKBox>
                <QuoteForm/>
              </Grid>
            </Grid>
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default ContactAlt;
