import { Row, Col } from 'react-bootstrap';
import {Container, Grid} from '@mui/material';
import MKBox from "components/MKBox";
import 'assets/css/three-steps.css'

function ThreeSteps() {
  return (
    
    <MKBox
      component="section"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
    >
    <section id="three-step-method">
      {/* divider start */}
      <div className="inner-divider"></div>
      {/* divider end */}
      {/* container start */}
      <Container className="sections">
        {/* row start */}
        <Row>
          {/* col start */}
          <Col lg={12}>
            {/* page title start */}
            <h2 className="section-heading">
              The 3-step Method
            </h2>
            {/* page title end */}
            {/* divider start */}
            <div className="inner-divider-ultra-half"></div>
            {/* divider end */}
            {/* page subtitle start */}
            <h2 className="section-subheading">
              <span>Your Vision, The Production, The Result</span>
            </h2>
            {/* page subtitle end */}
          </Col>
          {/* col end */}
        </Row>
        {/* row end */}
        {/* divider start */}
        <div className="inner-divider-half"></div>
        {/* divider end */}
        {/* row start */}
        <Grid container>
          {/* col start */}
          <Grid item md={4} className="three-step-method-block">
            <h4 className="three-step-method-heading">
            Your Vision
            </h4>
            <div className="three-step-method-number">
              1
            </div>
            <p>
            "Unlock the power of your vision with our expert guidance and creative collaboration."
            </p>
          </Grid>
          {/* col end */}
          {/* col start */}
          <Grid item md={4} className="three-step-method-block">
            <h4 className="three-step-method-heading">
            The Production
            </h4>
            <div className="three-step-method-number">
              2
            </div>
            <p>
            "Watch your ideas come to life with our highly skilled team, capturing every detail into a riveting production."
            </p>
          </Grid>
          {/* col end */}
          {/* col start */}
          <Grid item md={4} className="three-step-method-block">
            <h4 className="three-step-method-heading">
            The Result
            </h4>
            <div className="three-step-method-number">
              3
            </div>
            <p>
            "Experience the remarkable results of our dedicated efforts and your visual masterpiece ready to impress."
            </p>
          </Grid>
          {/* col end */}
        </Grid>
        {/* row end */}
      </Container>
      {/* container end */}
    </section>
    </MKBox>
  );
}
export default ThreeSteps;
