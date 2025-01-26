import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function useHubSpotTracking() {
  const location = useLocation();

  useEffect(() => {
    if (window._hsq) {
      window._hsq.push(['setPath', location.pathname]);
      window._hsq.push(['trackPageView']);
    }
  }, [location]);
}

export default useHubSpotTracking;
