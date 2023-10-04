import 'assets/css/App.css'
import 'assets/css/three-steps.css'
import 'assets/css/gallery-main.css'
import './config.js';

import { useEffect } from "react";

// react-router components
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Template themes
import theme from "assets/theme";
import Home from "layouts/pages/home";

import routes from "routes";
// import { ProtectedRoute } from "./ProtectedRoute";


export default function App() {
  const { pathname } = useLocation();

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        // if (route.protected) {
        //   return (
        //     <Route key={route.key} element={<ProtectedRoute />}>
        //       <Route path={route.route} element={route.component} />
        //     </Route>
        //   );
        // }
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        {getRoutes(routes)}
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </ThemeProvider>
  );
}
