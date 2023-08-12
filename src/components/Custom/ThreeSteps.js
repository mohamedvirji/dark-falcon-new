import { Container, Row, Col } from 'react-bootstrap';
import MKBox from "components/MKBox";

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
              <span>Brief, proposal, let's start</span>
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
        <Row>
          {/* col start */}
          <Col md={4} className="three-step-method-block">
            <h4 className="three-step-method-heading">
            Brief
            </h4>
            <div className="three-step-method-number">
              1
            </div>
            <p>
            Tell us what you need by downloading our production brief, if you already have one please share this in an email.
            </p>
          </Col>
          {/* col end */}
          {/* col start */}
          <Col md={4} className="three-step-method-block middle">
            <h4 className="three-step-method-heading">
            Proposal
            </h4>
            <div className="three-step-method-number">
              2
            </div>
            <p>
            We will send our proposal which includes a production overview, framework and itemised quote.
            </p>
          </Col>
          {/* col end */}
          {/* col start */}
          <Col md={4} className="three-step-method-block">
            <h4 className="three-step-method-heading">
            Let's start
            </h4>
            <div className="three-step-method-number">
              3
            </div>
            <p>
            Give us the thumbs up and we can start working on your production
            </p>
          </Col>
          {/* col end */}
        </Row>
        {/* row end */}
      </Container>
      {/* container end */}
    </section>
    </MKBox>
  );
}
export default ThreeSteps;
