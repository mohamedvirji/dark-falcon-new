import {useState} from 'react';
// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// react-countup component
import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function DefaultCounterCard({ color, count, title, description, bgColor, ...rest }) {
  const [hasAnimated, setHasAnimated] = useState(false);

  return (
    <div className="testBorderCount">
    <MKBox p={2} textAlign="center" lineHeight={1} bgColor={bgColor}>
    <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
      {({ isVisible }) => {
        if (isVisible && !hasAnimated) {
          setHasAnimated(true);
        }
        return (
          <MKTypography variant="h1" color={color} textGradient>
            {hasAnimated ? (
              <CountUp end={count} duration={1} {...rest} />
            ) : (
              <span>{count}</span>
            )}
          </MKTypography>
        );
      }}
    </VisibilitySensor>
            
      {title && (
        <MKTypography variant="h5" mt={2} mb={1}>
          {title}
        </MKTypography>
      )}
      {description && (
        <MKTypography variant="body2" color="text">
          {description}
        </MKTypography>
      )}
    </MKBox>
    </div>
  );
}

// Setting default props for the DefaultCounterCard
DefaultCounterCard.defaultProps = {
  color: "primary",
  description: "",
  title: "",
};

// Typechecking props for the DefaultCounterCard
DefaultCounterCard.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  count: PropTypes.number.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default DefaultCounterCard;
