/* eslint-disable no-param-reassign */


// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// Routes
import routes from "routes";
import { useAuth } from "auth-context/auth.context";

function NavbarDark() {
  const { user } = useAuth();
  return (
    <MKBox variant="gradient" bgColor="dark" shadow="sm" py={0.25}>
      {user && user.token ? (
        <DefaultNavbar
          routes={routes}
          action={{
            type: "internal",
            route: "/pages/authentication/sign-out",
            label: "logout",
            color: "info",
          }}
          transparent
          relative
          light
          center
        />
      ) : (
        <DefaultNavbar
          routes={routes}
          action={{
            type: "external",
            route: "https://appseed.us/product/material-kit/api-server-nodejs/react/",
            label: "download",
            color: "info",
          }}
          transparent
          relative
          light
          center
        />
      )}
    </MKBox>
  );
}

export default NavbarDark;
