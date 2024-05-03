
import { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import AuthApi from "../../../api/auth";
import { useAuth } from "../../../auth-context/auth.context";

function SignOut() {
  const navigate = useNavigate();
  const { user, setUser } = useAuth();

  const handleLogout = async () => {
    await AuthApi.Logout(user);
    await setUser(null);
    localStorage.removeItem("user");
    return navigate("/pages/authentication/sign-in");
  };

  useEffect(() => {
    handleLogout();
  }, []);

  return null;
}

export default SignOut;
