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
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultNavbar from "layouts/DefaultNavbar";
import DefaultFooter from "layouts/DefaultFooter";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Image
import bgImage from "assets/images/illustrations/illustration-reset.jpg";
import { QuoteForm } from "components/Custom/QuoteForm";
import ContactAlt from "components/Custom/ContactAlt";
import { Box } from "@mui/material";

function ContactUs() {
  return (
    <>
      <MKBox position="fixed" top="0.5rem" width="100%">
          <DefaultNavbar
            routes={routes}
            // action={{
            //   type: "internal",
            //   route: "/pages/authentication/sign-out",
            //   label: "quick quote",
            //   color: "primary",
            // }}
            light
          transparent
          sticky
          />
      </MKBox>
      <Grid container spacing={3} alignItems="center">


        {/* <Grid item xs={12} lg={6}>
          <MKBox
            display={{ xs: "none", lg: "flex" }}
            width="calc(100% - 2rem)"
            height="calc(100vh - 2rem)"
            borderRadius="lg"
            ml={2}
            mt={2}
            sx={{ backgroundImage: `url(${bgImage})` }}
          />
        </Grid> */}



        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
        
        >
                <MKBox pt={6} px={1} mt={6}>
          <QuoteForm/>
          <ContactAlt/>
        </MKBox>
        </Grid>



      </Grid>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default ContactUs;
