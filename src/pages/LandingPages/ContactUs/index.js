// @mui material components
import Grid from "@mui/material/Grid";

// Template components
import MKBox from "components/MKBox";

// Template layout components
import DefaultNavbar from "layouts/DefaultNavbar";
import DefaultFooter from "layouts/DefaultFooter";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

import { QuoteForm } from "components/Custom/QuoteForm";

function ContactUs() {
  return (
    <>
      <MKBox position="fixed" top="0.5rem" width="100%">
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